const systemInfo = (req, res) => {
    res.type('application/xml').render('core/systemInfo.ejs', {});
}

module.exports = systemInfo;