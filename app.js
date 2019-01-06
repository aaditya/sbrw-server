const express = require('express');
const morgan = require('morgan');

const app = express();

// API backtracking
app.use(morgan('dev'));

app.use('/soapbox-race-core/Engine.svc', require('./engine/index'));

module.exports = app;