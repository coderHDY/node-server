const { test, uploadFile, postTest, upload, readFile, fileReader } = require("./video");
const express = require("express");
const path = require("path");

module.exports = (app) => {
    app.get("/", test);
    app.post("/uploadFile", upload.single("file"), uploadFile);
    app.post("/readFile", fileReader.single("file"), readFile);
    app.post("/postTest", postTest);
    app.use("/file", express.static(path.join(__dirname, "../../files")));
}