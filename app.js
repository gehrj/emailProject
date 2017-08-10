'use strict'

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');
const routes = require('./routes');
const path = require('path');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static('./public'));
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});
app.use('/api', routes);

models.db.sync({force: true})
.then(function() {
    app.listen(3000,function() {
    console.log('Listening on port 3000!');
    });
})
.catch(console.error);


