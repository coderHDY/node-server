const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// 创建上传目录
const uploadDir = path.join(__dirname, "../../files");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// 配置 multer 存储方式
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `tweet-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)}${ext}`;
    cb(null, name);
  },
});

/**
 * 第一版：存图片url
 */
// 创建 multer 实例
// 接收插件上传的 tweet 数据
// const upload = multer({ storage });
// router.post("/save-tweet", upload.array("images", 10), async (req, res) => {
//   try {
//     const { text, url, createdAt } = req.body;
//     const images = req.files.map((file) => ({
//       filename: file.filename,
//       path: file.path,
//       size: file.size,
//     }));

//     console.log("📩 收到推文：", { text, url, createdAt, images });

//     res.json({
//       message: "推文接收成功",
//       data: {
//         text,
//         url,
//         createdAt,
//         images,
//       },
//     });
//   } catch (err) {
//     console.error("❌ 接收推文失败：", err);
//     res.status(500).json({ error: "接收失败", detail: err.message });
//   }
// });

// 第二版，接收图片Url
router.post("/save-prompt", async (req, res) => {
  try {
    const { text, url, createdAt, images } = req.body;
    console.log("📩 收到推文：", { text, url, createdAt, images });

    res.json({
      message: "推文接收成功",
      data: {
        text,
        url,
        createdAt,
        images,
      },
    });
  } catch (err) {
    console.error("❌ 接收推文失败：", err);
    res.status(500).json({ error: "接收失败", detail: err.message });
  }
});

module.exports = {
  tweeter: router,
};
