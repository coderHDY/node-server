const express = require("express");
const path = require("path");

const { video } = require("./video");
const { test } = require("./test");
const api = require("./api");
const ws = require("./ws");
const ghql = require("./ghql");

module.exports = (app) => {
    app.use("/test", test);
    app.use("/files", express.static(path.join(__dirname, "../../files")));
    app.use("/api", api);
    app.use("/video", video);
    app.use("/ws", ws);
    app.use("/ghql", ghql);
}