// import mongoose from 'mongoose';

// const CountersSchema = new mongoose.Schema(
//   {
//       _id: { type: String, required: true },
//       seq: { type: Number, required: true }
//   }
// )

// const counters = mongoose.model('counters', CountersSchema);

// const moviesSchema = new mongoose.Schema(
//     {
//       id:{ type: String},
//       name: { type: String, required: true },
//       image: { type: String, required: true },
//       description: { type: String, required: true },
//       genre: { type: String, required: true },
//       Rate: { type: String, required: true },
//       timemovies: { type: Number, required: true },
//       startDate: { type: Date, required: true },
//       endDate: { type: Date, required: true },
//     },
//   {
//     _id: false,
//     versionKey: false
//   }
// );

// moviesSchema.pre('save', function(next) {
// console.log('increment');
//   var doc = this;
//   counters.findByIdAndUpdate(
//     {_id: 'movieId'}, 
//     {$inc: { seq: 1} }, 
//     function(error, counter)   {
//       if(error){
//           return next(error);
//       }
//       console.log("...count: "+JSON.stringify(count));
//       doc.id = counter.seq;
//       next();
//   }).catch(function(error) {
//     console.error("counter error-> : "+error);
//     throw error;
// });
// });

// const movies = mongoose.model('movies', moviesSchema);

// export default movies;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoIncrementModelID = require('./counterSchema');

const moviesSchema = new Schema({
  id: { type: Number, unique: true, min: 1 },
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  Rate: { type: String, required: true },
  timemovies: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

moviesSchema.pre('save', function (next) {
  if (!this.isNew) {
    next();
    return;
  }

  autoIncrementModelID('movies', this, next);
});

const movies = mongoose.model('movies', moviesSchema);

export default movies;
