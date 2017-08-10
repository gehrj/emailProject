'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./routes');
const path = require('path');

let app = express();

// this is the middleware for routes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// I am serveing up static files here
app.use(express.static('./public'));
app.use('/bootstrap',express.static(path.resolve(__dirname, 'node_modules/bootstrap/dist')))
app.use('/jquery',express.static(path.resolve(__dirname, 'node_modules/jquery/dist')))
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

// sending any api route over to routes
app.use('/api', routes);

// syncing database and starting server
models.db.sync({force: true})
.then(function() {
    app.listen(3000,function() {
    console.log('Listening on port 3000!');
    });
})
.catch(console.error);


