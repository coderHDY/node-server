const { cors } = require("./plugins");
const bdParser = require('body-parser');
module.exports = (app) => {
    app.use(cors)
    app.use(bdParser.urlencoded({ extended: false }));
    app.use(bdParser.json());
}