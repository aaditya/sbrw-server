const fraudConfig = (req, res) => {
  res.send(`<FraudConfig>
    <enabledBitField>12</enabledBitField>
    <gameFileFreq>1000000</gameFileFreq>
    <moduleFreq>360000</moduleFreq>
    <startUpFreq>1000000</startUpFreq>
    <userID>26083</userID>
</FraudConfig>`);
};

module.exports = fraudConfig;
