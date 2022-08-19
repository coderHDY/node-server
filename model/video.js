const cnm = require('./db');

const video = cnm.model("Video", {
    name: String,
    createAt: Number,
    url: String,
});

module.exports = video;