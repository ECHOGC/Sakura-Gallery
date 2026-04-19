# 🌸 Sakura Gallery

Sakura Gallery is a highly customizable, aesthetic, and AI-powered self-hosted private cloud gallery for NAS. Featuring a single-file frontend architecture, it integrates a silky-smooth dynamic particle engine and powerful AI visual extraction capabilities to build your exclusive digital memory archive.

Sakura Gallery 是一款极致唯美、高度可定制的轻量级 NAS 私有云相册。采用单文件前端架构，融合了极其丝滑的动态粒子引擎与强大的 AI 视觉特征提取能力，为您打造专属的数字记忆档案馆。

# ✨ Features | 核心特性

🌸 Extreme Aesthetics | 极致美学

Built-in 3D sakura particle engine and deep frosted glass parallax effects. Switch seamlessly between realistic petals, simple petals, or snow particles.
内置3D 粒子引擎与深度毛玻璃视差动效，支持在逼真樱花、简约花瓣与唯美雪花间无缝切换。

💎 Mythic Vault | 至尊收藏室

An exclusive space for your best photos, featuring epic custom glow effects, hover sounds, and 3D hover parallax tracking.
为您最喜欢相片打造的独立高阶空间，包含专属光晕、划过连击音效与 3D 跟随视差。

🧠 AI Curator | AI 视觉策展

Compatible with OpenAI API (GPT-4o, DeepSeek, etc.) with a built-in image compression engine to prevent payload overloads. Automatically generates Markdown-formatted professional archives and accurately recognizes internet memes.
兼容 OpenAI 标准协议，内置 AI 专供轻量级图像压缩引擎。自动为照片生成 Markdown 格式的严谨特征档案，完美识别二次元与热门网络梗图。

🗺️ World Footprint Map | 世界足迹地图

Automatically parses EXIF GPS data and renders interactive map pins on an immersive map view (similar to Immich). Supports manual coordinate tagging.
照片 EXIF 经纬度自动解析，并渲染为交互式地图图钉。对于无位置信息的照片，支持手动在交互地图上选点定位。

🔍 Multi-dimensional Search | 多维智能检索

Global cross-search algorithms across AI features, shooting dates, EXIF camera models, and folder names.
支持对 AI 提取特征、拍摄日期、相机镜头型号 (EXIF) 和所在文件夹进行多词聚合、全局交叉检索。

🎵 Immersive BGM | 沉浸式后台音乐

Native support for APlayer / MetingJS, integrating Netease playlists or local lossless audio with a hidden drawer UI to ensure zero content obstruction.
原生集成，支持网易云单曲/歌单与本地无损音频悬浮播放。采用侧边抽屉式隐藏设计，确保绝不遮挡任何画廊内容。

# 🚀 Quick Start | 快速部署

The recommended way to deploy Sakura Gallery is via Docker Compose.
最推荐的安装方式是通过 Docker Compose 一键启动：

1. Clone the repository | 克隆仓库
   
  ```
  git clone [https://github.com/ECHOGC/Sakura-Gallery.git](https://github.com/ECHOGC/Sakura-Gallery.git)
  cd Sakura-Gallery
  ```

2. Configure Environment Variables | 配置环境变量

Copy the example environment file and set your secure database password:
复制环境变量模板文件，并设置你自己的数据库密码：

  ```
  cp .env.example .env
  # Edit .env and change DB_PASSWORD
  # 编辑 .env 文件，修改 DB_PASSWORD 的值
  ```

3. Start the services | 一键启动
  
  ```
  docker-compose up -d
  ```

Once the containers are up and running, open your browser and navigate to http://localhost (or your server's IP address) to experience the gallery!
等待几十秒让数据库初始化完成后，打开浏览器访问 http://localhost 即可体验Sakura+画廊！

# 🛠️ Tech Stack | 技术栈

Frontend: React 18, Tailwind CSS, Babel (Standalone), Leaflet, Marked

Backend: Node.js, Express, MySQL 2

Infrastructure: Docker, Docker Compose

# 📄 License | 开源协议

This project is licensed under the MIT License.
本项目采用 MIT 开源协议。欢迎 Fork、提交 PR 或提出 Issue！
