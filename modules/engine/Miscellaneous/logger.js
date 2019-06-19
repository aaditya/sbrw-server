const colors = require('colors');

const loggerFunc = (req, res, next) => {
    console.log('----------------------------------------'.green);
    console.log('Queries:', req.query);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('----------------------------------------'.red);
    next();
}

module.exports = loggerFunc;