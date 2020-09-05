const chatRoomSchema = require(__base + 'models/chatRooms');

const chatInfo = (req, res) => {
    chatRoomSchema.find({}).exec((err, doc) => {
        if (err) {
            res.json({
                success: false,
                msg: err.message
            });
        }
        else {
            let data = {
                rooms: doc,
                ip: req.connection.localAddress.split(':')[3],
                port: req.connection.localPort,
                prefix: 'sbrw'
            }
            res.render('sessions/chat', { data: data });
        }
    });
}

module.exports = chatInfo;