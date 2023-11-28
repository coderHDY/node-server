const express = require("express");
const router = express.Router();

// 测试接口
router.get("/redirect", async (req, res) => {
  try {
    res.setHeader("token_aaa", "hhhhhhh");
    res.redirect("https://www.baidu.com");
    // res.send({ msg: "准备重定向" });
  } catch (err) {
    res.send({ err });
  }
});

router.get("/", async (req, res) => {
  console.log(`test start!`);
  const start = +Date.now();
  try {
    res.send({ start });
  } catch (e) {
    res.send({ e });
  }
});

module.exports = {
  test: router,
};
