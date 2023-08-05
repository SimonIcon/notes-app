const express = require('express')
const featureController = require('../controllers/feature')
const featureRoute = express.Router()

featureRoute.get('/', featureController)

module.exports = featureRoute