const express = require("express");
const router = express.Router();


// 测试接口
const test = async (req, res) => {
    console.log(`test start!`);
    const start = +Date.now();
    try {
        res.send({ start });
    } catch (e) {
        res.send({ e });
    }
}

router.get("/", async (req, res) => {
    try {
        console.log("api get /video")
        res.send({ msg: "video suggess" });
    } catch (err) {
        res.send({ err });
    }
});

module.exports = {
    video: router,
    test,
}