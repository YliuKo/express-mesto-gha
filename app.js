const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const router = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();
app.use(helmet());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '648dd8c565a5ef4e52637f1f'
  };
  next();
});

app.use(router);
app.listen(PORT, () => {
  console.log('Сервер запущен');
});
