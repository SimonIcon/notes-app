require('dotenv').config()

const express = require('express')
const expressLayout = require("express-ejs-layouts");
const homeRoute = require('./server/routes/homeRoute');
const aboutRoute = require('./server/routes/aboutRoute');
const path = require('path');
const faqRoute = require('./server/routes/faqRoute');
const featureRoute = require('./server/routes/featureRoute');


// initializing app
const app = express()
const PORT = 5050;

// app middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// static files
app.use(express.static('public'))
app.use("/dist", express.static('dist'))



// template engine
app.use(expressLayout)
app.set('view engine', 'ejs')
app.set('layout', './layouts/main')

// app middleware
app.use('/', homeRoute)
app.use('/about', aboutRoute)
app.use('/faq', faqRoute)
app.use('/feature', featureRoute)

app.listen(PORT, () => {
    console.log(`application running at port ${PORT}`)
})