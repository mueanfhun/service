"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const moviesSchema = new _mongoose.default.Schema([{
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  Rate: {
    type: String,
    required: true
  },
  timemovies: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  showingTime: [{
    date: {
      type: Date
    },
    sound: {
      type: String
    },
    theater: [{
      id: {
        type: Number
      },
      time: {
        type: String
      },
      normalSeat: {
        available: {
          type: Number
        },
        price: {
          type: Number
        }
      },
      honeymoonSeat: {
        available: {
          type: Number
        },
        price: {
          type: Number
        }
      },
      pairSeat: {
        available: {
          type: Number
        },
        price: {
          type: Number
        }
      }
    }]
  }]
}]);

const movies = _mongoose.default.model('movies', moviesSchema);

var _default = movies;
exports.default = _default;