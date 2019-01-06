const http = require('http');
const mongoose = require('mongoose');

const config = require('./config.json');
const app = require('../app');

const server = http.createServer(app);

let port = process.env.PORT || config.server.port;

mongoose.connect(config.database.url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log('Database Connected');
    }
})

server.listen(port, () => {
    console.log(`Server up on port ${port}.`);
});

module.exports = server;