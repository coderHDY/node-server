const express = require("express");
const router = express.Router();

router.get("/robot/:val", async (req, res) => {
    try {
        const { val } = req.params;
        const msg = await (await fetch(`http://api.qingyunke.com/api.php?key=free&appid=0&msg=${val}`)).json();
        res.send(msg);
    } catch (e) {
        res.send({ e });
    }
});

router.get("/", async (req, res) => {
    try {
        console.log("api get /")
        res.send({ msg: "suggess" });
    } catch (err) {
        res.send({ err });
    }
});


module.exports = router;