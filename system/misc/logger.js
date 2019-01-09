const loggerFunc = (req, res, next) => {
    console.log('----------------------------------------')
    console.log('headers', req.headers);
    console.log('body', req.body);
    next();
}

module.exports = loggerFunc;