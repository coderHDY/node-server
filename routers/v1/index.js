const express = require("express");
const path = require("path");

const { video, test } = require("./video");
const api = require("./api");
const ws = require("./ws");

module.exports = (app) => {
    app.get("/", test);
    app.use("/files", express.static(path.join(__dirname, "../../files")));
    app.use("/api", api);
    app.use("/video", video);
    app.use("/ws", ws);
}