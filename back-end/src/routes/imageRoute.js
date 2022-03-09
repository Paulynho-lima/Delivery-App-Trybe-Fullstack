const express = require('express');
const imageController = require('../images/controllers');

const imageRouter = express.Router();

imageRouter.get('/:name', imageController.getImage);

module.exports = imageRouter;
