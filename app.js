const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

/* Global Path setup for easy require */
global.__base = __dirname + '/';

require('body-parser-xml')(bodyParser);

const app = express();

const config = require('./system/config.json');

// XML/HTML Rendering Engine
app.set('views', path.join(__dirname, 'modules/renders'));
app.set('view engine', 'ejs');

// POST request parsing
app.use(bodyParser.json());
app.use(bodyParser.xml());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('tokenSign', config.details.sign);

// API backtracking
app.use(morgan('dev'));

app.use('/soapbox-race-core/Engine.svc', require('./modules/engine/routes'));
app.use('/runner', require('./modules/runner/routes'));

module.exports = app;