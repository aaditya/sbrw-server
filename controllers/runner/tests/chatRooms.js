const chatRooms = require('../../../models/chatRooms');

module.exports = (req, res) => {
  chatRooms.find({}).exec((err, doc) => {
    if (err) {
      res.json({
        success: false,
        msg: err.message,
      });
    } else {
      res.json(doc);
    }
  });
};
