// 1. 优先加载 .env 环境变量
require('dotenv').config({ path: '../.env' }); // 兼容 Docker 挂载路径

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();

// 2. 核心中间件配置
// 允许跨域请求 (前端直接访问后端)
app.use(cors());
// 极度关键：放宽 JSON 限制到 500MB，因为前端传来的是庞大的 Base64 图片数据
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));

// 3. 配置 MySQL 数据库连接池 (完全读取环境变量，实现代码与密码分离)
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'nas_gallery',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 测试数据库连接
pool.getConnection()
    .then(conn => {
        console.log('✅ 数据库连接成功！Sakura+ 核心引擎已启动。');
        conn.release();
    })
    .catch(err => {
        console.error('❌ 数据库连接失败，请检查 .env 配置或等待 MySQL 初始化:', err.message);
    });

// ==========================================
// 4. RESTful API 路由接口
// ==========================================

// 获取所有照片
app.get('/api/photos', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM photos ORDER BY timestamp DESC');
        // 将 MySQL 的 TINYINT 转换回前端需要的 Boolean
        const formattedRows = rows.map(row => ({
            ...row,
            analyzing: row.analyzing === 1
        }));
        res.json(formattedRows);
    } catch (error) {
        console.error('获取照片失败:', error);
        res.status(500).json({ error: '服务器内部错误' });
    }
});

// 上传新照片
app.post('/api/photos', async (req, res) => {
    try {
        const { id, url, x, y, z, rotZ, width, height, analysis, analyzing, timestamp } = req.body;
        const query = `
            INSERT INTO photos 
            (id, url, x, y, z, rotZ, width, height, analysis, analyzing, timestamp) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        await pool.execute(query, [
            id, url, x, y, z, rotZ, width, height, analysis, 
            analyzing ? 1 : 0, // Boolean 转 MySQL TINYINT
            timestamp
        ]);
        res.status(201).json(req.body);
    } catch (error) {
        console.error('上传照片失败:', error);
        res.status(500).json({ error: '上传失败' });
    }
});

// 更新照片元数据 (AI分析结果、收藏状态、放入至尊室等)
app.put('/api/photos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { analysis, analyzing } = req.body;
        const query = 'UPDATE photos SET analysis = ?, analyzing = ? WHERE id = ?';
        await pool.execute(query, [analysis, analyzing ? 1 : 0, id]);
        res.json({ success: true, message: '元数据更新成功' });
    } catch (error) {
        console.error('更新照片失败:', error);
        res.status(500).json({ error: '更新失败' });
    }
});

// 彻底删除照片
app.delete('/api/photos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.execute('DELETE FROM photos WHERE id = ?', [id]);
        res.json({ success: true, message: '文件已彻底销毁' });
    } catch (error) {
        console.error('删除照片失败:', error);
        res.status(500).json({ error: '删除失败' });
    }
});

// 5. 启动服务
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🌸 Sakura+ Backend API is running on http://localhost:${PORT}`);
});
