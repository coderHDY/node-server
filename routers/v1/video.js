// const video = require("../../model/video");
const multer = require("multer");

// 写文件功能
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        const type = file.mimetype.match(/(?<=\/)[a-zA-Z0-9]+/);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${type}`)
    }
})
module.exports.upload = multer({ storage });

// 文件只读功能
const readerStorage = multer.memoryStorage();
module.exports.fileReader = multer({ storage: readerStorage });

// 接口
module.exports.test = async (req, res) => {
    console.log(`test start!`);
    const start = +Date.now();
    try {
        res.send({ start });
    } catch (e) {
        res.send({ e });
    }
    // try {
    //     const ans = await video.create({
    //         name: "好看视频",
    //         createAt: Date.now(),
    //         url: "http://mediaplay.kksmg.com/2022/08/11/h264_720p_600k_39725-minhangtv-20220811195700-2040-323669-600k_mp4.mp4",
    //     });
    //     res.send(ans);
    // } catch (e) {
    //     console.log(e);
    //     res.send(e)
    // } finally {
    //     console.log(`test end!: ${(Date.now() - start) / 1000}`);
    // }
}
module.exports.readFile = async (req, res) => {
    try {
        console.log(req.file)
        delete req.file.buffer;
        res.send(req.file);
    } catch (err) {
        res.send(err);
    }
}
module.exports.uploadFile = async (req, res) => {
    res.send(req.file);
}
module.exports.postTest = async (req, res, next) => {
    console.log("test: ", req.body);
    res.send("post接收到了！");
}