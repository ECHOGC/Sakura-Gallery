-- 1. 创建数据库并设置完美支持 Emoji 的字符集
CREATE DATABASE IF NOT EXISTS `nas_gallery` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `nas_gallery`;

-- 2. 创建核心的照片档案表
CREATE TABLE IF NOT EXISTS `photos` (
  `id` VARCHAR(50) PRIMARY KEY,
  `url` LONGTEXT NOT NULL COMMENT '图片的 Base64 数据或直链',
  `x` FLOAT NOT NULL,
  `y` FLOAT NOT NULL,
  `z` FLOAT NOT NULL,
  `rotZ` FLOAT NOT NULL,
  `width` FLOAT NOT NULL,
  `height` FLOAT NOT NULL,
  `analysis` TEXT COMMENT '包含 AI 分析、定位、文件夹等元数据的 JSON',
  `analyzing` TINYINT(1) DEFAULT 1 COMMENT 'AI分析状态 1:是 0:否',
  `timestamp` BIGINT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
