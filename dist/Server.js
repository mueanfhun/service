"use strict";

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require('express');

const port = process.env.PORT || 8081;
const app = express();
const uri = 'mongodb://admin:admin1@cluster0-shard-00-00-42ibx.mongodb.net:27017,cluster0-shard-00-01-42ibx.mongodb.net:27017,cluster0-shard-00-02-42ibx.mongodb.net:27017/test?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin';
const option = {
  user: 'admin',
  pass: 'admin',
  useNewUrlParser: true,
  dbName: 'movies'
};

_mongoose.default.connect(uri, option);

app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_routes.default);

_mongoose.default.connection.on('connected', () => {
  console.info('Mongoose connection has been connected.');
});

app.listen(port, () => {
  console.log('Start server at port', port);
});