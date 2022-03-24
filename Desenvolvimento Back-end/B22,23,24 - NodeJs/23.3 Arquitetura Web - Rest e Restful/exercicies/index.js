const express = require('express');
const bodyParser = require('body-parser');
const productRoute =require('./controllers/productController')
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRoute);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});