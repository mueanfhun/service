import movieModel from '../models/schemas/moviesSchema';
import dataMovies from '../../datamovies.json';

const insertController = (req, res) => {
  movieModel.insertMany(dataMovies, (err, value) => {
    if (err) {
      console.log(err);
      res.status(400).json({ message: 'Bad request.' });
    } else {
      res.status(200).json({ message: value });
    }
  });
};

export default insertController;
