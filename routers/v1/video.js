const video = require("../../model/video");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        const type = file.mimetype.split("/")[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + `.${type}`)
    }
})
module.exports.upload = multer({ storage: storage });

module.exports.test = async (req, res) => {
    const ans = await video.create({
        name: "好看视频",
        createAt: Date.now(),
        url: "http://mediaplay.kksmg.com/2022/08/11/h264_720p_600k_39725-minhangtv-20220811195700-2040-323669-600k_mp4.mp4",
    });
    res.send(ans);
}

module.exports.uploadFile = async (req, res) => {
    res.send(req.file);
}
module.exports.postTest = async (req, res, next) => {
    console.log("test: ", req.body);
    res.send("post接收到了！");
}