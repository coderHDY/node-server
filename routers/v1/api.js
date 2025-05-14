const express = require("express");
const router = express.Router();
const multer = require("multer");

// 写文件功能
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files");
  },
  //   filename: function (req, file, cb) {
  //     const type = file.mimetype.match(/(?<=\/)[a-zA-Z0-9]+/);
  //     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  //     cb(null, file.fieldname + "-" + uniqueSuffix + `.${type}`);
  //   },
});
const upload = multer({ storage });

// 文件只读功能
const readerStorage = multer.memoryStorage();
const fileReader = multer({ storage: readerStorage });

router.get("/robot/:val", async (req, res) => {
  const { val } = req.params;
  console.log(`robot get ${val}`);
  try {
    const msg = await (
      await fetch(
        `http://api.qingyunke.com/api.php?key=free&appid=0&msg=${val}`
      )
    ).json();
    res.send(msg);
  } catch (e) {
    console.log(e);
    res.send({ e });
  }
});

const readFile = async (req, res) => {
  try {
    console.log(req.file);
    delete req.file.buffer;
    res.send(req.file);
  } catch (err) {
    res.send(err);
  }
};
const uploadFile = async (req, res) => {
  console.log("req.file", req.file);
  res.send(req.file);
};
const postTest = async (req, res, next) => {
  console.log("test: ", req.body);
  res.send("post接收到了！");
};

router.post("/uploadFile", upload.single("file"), uploadFile);
router.post("/readFile", fileReader.single("file"), readFile);
router.post("/postTest", postTest);

router.get("/", async (req, res) => {
  try {
    console.log("api get /");
    res.send({ msg: "suggess" });
  } catch (err) {
    res.send({ err });
  }
});

module.exports = router;
