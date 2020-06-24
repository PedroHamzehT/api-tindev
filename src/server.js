const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://admin:phht2010@cluster0-pwtip.mongodb.net/tindev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);