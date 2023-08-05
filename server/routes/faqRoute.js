const express = require("express")
const faqController = require("../controllers/faqController")

const faqRoute = express.Router()

faqRoute.get('/', faqController)

module.exports = faqRoute