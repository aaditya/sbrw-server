const ChatRooms = require('../../../models/chatRooms');

const { data } = require('../../../datasets/soapbox_table_chat_room.json');

const addChatRooms = async (req, res) => {
  try {
    await ChatRooms.insertMany(data);
    res.send('DONE');
  } catch (err) {
    console.log(err);
  }
};

module.exports = addChatRooms;
