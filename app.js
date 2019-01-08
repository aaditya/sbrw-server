const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// XML/HTML Rendering Engine
app.set('views', path.join(__dirname, 'ejs'));
app.set('view engine', 'ejs');

// POST request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('superSecret', 'check123');

// API backtracking
app.use(morgan('dev'));

app.use('/soapbox-race-core/Engine.svc', require('./engine/index'));

module.exports = app;