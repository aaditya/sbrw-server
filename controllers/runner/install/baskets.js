const Baskets = require('../../../models/baskets');

const { data } = require('../../../datasets/soapbox_table_basketdefinition.json');

const addBaskets = async (req, res) => {
  try {
    await Baskets.insertMany(data);
    res.send('DONE');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addBaskets;
