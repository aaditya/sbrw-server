const loggerFunc = (req, res, next) => {
    console.log('----------------------------------------');
    console.log('Queries:', req.query);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('----------------------------------------');
    next();
}

module.exports = loggerFunc;