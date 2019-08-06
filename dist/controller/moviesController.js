"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moviesSchema = _interopRequireDefault(require("../models/schemas/moviesSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moviesController = async (req, res) => {
  await _moviesSchema.default.find({}, (err, value) => {
    if (err) {
      res.send(err);
    }

    res.json(value);
  });
};

var _default = moviesController;
exports.default = _default;