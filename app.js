//This file will run the server and listion on port 8080
//express is a web framework for node.js
const express = require('express');
// body-parser is an npm library used to process data sent through an HTTP request body
const bodyParser = require('body-parser');

//handles the routes
const professionalRoutes = require('./backend/routes/professional');
const { request } = require('http');

//listion on port
const port = process.env.PORT || 8080;
const app = express();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/professional', professionalRoutes); //url/professioinal