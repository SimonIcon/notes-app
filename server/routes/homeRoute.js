const express = require('express')
const homeController = require('../controllers/homeController')
const homeRoute = express.Router()

homeRoute.get('/', homeController)

module.exports = homeRoute