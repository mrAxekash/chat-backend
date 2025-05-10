const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');



const app = express();
const server = createServer(app);
const io = new Server(server, { cors: {
        origin: 'http://localhost:3000',
        methods: ['GET, POST'],
        credentials: true,
    }})

const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.get('/', (req, res) => {
    res.send("Hello,it's ws server");

});

io.on('connection', (socket) => {
    console.log('a user connected');
});

const PORT = process.env.PORT || 3009;

server.listen(PORT, () => {
    console.log(`server *:${PORT}`);
});