const host = "127.0.0.1";
const port = "27017";
const dbName = "test";
const cnm = require('mongoose');

cnm.connect(`mongodb://${host}:${port}/${dbName}`);

module.exports = cnm;