const { version } = require('../../../package.json');
const { info } = require('../../../config.json');

const Users = require('../../../models/user.js');

const serverInfo = async (req, res, next) => {
  try {
    const users = await Users.find({});
    // Add logged in flags.
    const onlineUsers = users.filter((i) => i.status === 1);
    res.json({
      success: true,
      numberOfRegistered: users.length,
      onlineNumber: onlineUsers.length,
      requireTicket: false,
      serverVersion: version,
      ...info,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = serverInfo;
