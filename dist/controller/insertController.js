"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moviesSchema = _interopRequireDefault(require("../models/schemas/moviesSchema"));

var _dataMovies = _interopRequireDefault(require("../dataMovies.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const insertController = (req, res) => {
  _moviesSchema.default.insertMany(_dataMovies.default, (err, value) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        message: 'Bad request.'
      });
    } else {
      res.status(200).json({
        message: 'create success.'
      });
    }
  });
};

var _default = insertController;
exports.default = _default;