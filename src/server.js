const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://admin:abisague97339162@cluster0-illat.mongodb.net/oministack8?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(3333);

// node src/server.js
// yarn dev -- para startar a aplicação