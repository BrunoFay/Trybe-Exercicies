const express = require('express');
const ProductModel = require('../models/productModel');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(StatusCodes.OK).send(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.status(StatusCodes.OK).send(new Array(product));
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(StatusCodes.CREATED).send(new Array(newProduct));
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  await ProductModel.update(req.params.id, name, brand);

  res.status(StatusCodes.OK).send(new Array({ id: req.params.id, name, brand }));
});

router.delete('/:id', async (req, res) => {
  await ProductModel.exclude(req.params.id);

  res.status(StatusCodes.NO_CONTENT).end();
});

module.exports = router;