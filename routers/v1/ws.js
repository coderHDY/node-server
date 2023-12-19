const express = require("express");
require("express-ws")(express());
const router = express.Router();

let ws;
router.ws("/screen", (wsInstance, req) => {
  console.log("------  screen ------ ");
  ws = wsInstance;
  ws.on("message", function (msg) {
    ws.send(msg);
  });
});
router.post("/msg", (req, res) => {
  const msg = req.body;
  console.log(msg);
  if (!ws) {
    return res.send({ done: false });
  }
  ws.send(JSON.stringify(msg));
  res.send({ done: true });
});

module.exports = router;
