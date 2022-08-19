const { test, uploadFile, postTest, upload } = require("./video");



module.exports = (app) => {
    app.get("/", test);
    app.post("/uploadFile", upload.single("file"), uploadFile);
    app.post("/postTest", postTest);
}