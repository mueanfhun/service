import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes';


const express = require('express');

const port = process.env.PORT || 8081;

const app = express();
const uri = 'mongodb+srv://dbUser:dbUser1@cluster0-26ash.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true';
const option = {
  user: 'dbUser',
  pass: 'dbUser1',
  useNewUrlParser: true,
  dbName: 'User',
};
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, option);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.connection.on('connected', () => {
  console.info('Mongoose connection has been connected.');
});

app.listen(port, () => {
  console.log('Start server at port', port);
});
