const logging = (req, res) => {
    res.send(`<ClientConfigTrans xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://schemas.datacontract.org/2004/07/Victory.DataLayer.Serialization"/>`);
}

module.exports = logging;