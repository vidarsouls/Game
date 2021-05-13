const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const PORT = 3000;

const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log("new connection -", socket);

    //listeners

});

server.listen(PORT, () => { console.log(("Started")) });
