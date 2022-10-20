const express = require("express");
require("express-ws")(express());
const router = express.Router();

let ws;
router.ws("/", (wsInstance, req) => {
    ws = wsInstance;
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send(msg);
    });
})
router.get("/msg", (req, res) => {
    const { m } = req.query;
    if (!ws || !m) return res.send({ "done": false });
    ws.send(m);
    res.send({ "done": true });
})
module.exports = router;