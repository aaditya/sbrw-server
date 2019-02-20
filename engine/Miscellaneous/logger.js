const loggerFunc = (req, res, next) => {
    console.log('----------------------------------------')
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('URL:', req.originalUrl);
    console.log('Method:', req.method);
    console.log('---------------------------------------')
    next();
}

module.exports = loggerFunc;