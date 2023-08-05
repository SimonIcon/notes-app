const express = require('express')
const { aboutController } = require('../controllers/aboutController')
const aboutRoute = express.Router()

aboutRoute.get('/', aboutController)

module.exports = aboutRoute