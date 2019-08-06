"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moviesSchema = _interopRequireDefault(require("../models/schemas/moviesSchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moviesByIDController = async (req, res) => {
  const payload = {
    id: req.body.id
  };
  await _moviesSchema.default.findOne({
    id: payload.id
  }, (err, value) => {
    console.log(req.body.id);

    if (err) {
      res.send(err);
    }

    res.send(value);
  });
};

var _default = moviesByIDController;
exports.default = _default;