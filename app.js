const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// XML/HTML Rendering Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// POST request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API backtracking
app.use(morgan('dev'));

app.use('/soapbox-race-core/Engine.svc', require('./engine/index'));

module.exports = app;