`use strict`
const express = require(`express`);
const bodyParser = require(`body-parser`);
const mongoose = require('mongoose');

const app = express();

const router = express.Router();

mongoose.connect('mongodb+srv://usr_kevin_hizatsuki:GUO1MDa7iE8AvFBq@cluster0-hjtwh.mongodb.net/balta?retryWrites=true&w=majority',
{ useNewUrlParser: true })

//Carga dos models
const Product = require('./models/products');

//Carrega rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/products-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;

