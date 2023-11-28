const express = require("express");
const router = express.Router();

// video
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
}