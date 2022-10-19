const { cors } = require("./plugins");
const bdParser = require('body-parser');
const ws = require("express-ws");
// const path = require('path');
// const serveStatic = require('serve-static');
// const rootPath = path.join(__dirname, '../files');

module.exports = (app) => {
    app.use(cors)
    app.use(bdParser.urlencoded({ extended: false }));
    app.use(bdParser.json());
    ws(app);
    // app.use(serveStatic(rootPath));
}