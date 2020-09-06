const Vinyls = require('../../../models/vinyls');

const { data } = require('../../../datasets/soapbox_table_vinylproduct.json');

const addVinyls = async (req, res) => {
  try {
    await Vinyls.insertMany(data);
    res.send('DONE');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addVinyls;
