"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _insertController = _interopRequireDefault(require("./controller/insertController"));

var _moviesController = _interopRequireDefault(require("./controller/moviesController"));

var _moviesByIDController = _interopRequireDefault(require("./controller/moviesByIDController"));

var _seatController = _interopRequireDefault(require("./controller/seatController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});
router.put('/addmovie', _insertController.default);
router.get('/movies', _moviesController.default);
router.get('/detail', _moviesByIDController.default);
router.post('/reserver', _seatController.default);
var _default = router;
exports.default = _default;