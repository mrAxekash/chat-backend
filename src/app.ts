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

const messages = [
    {message: 'Hello Kolya', id: '23sfasdfa', user: {id: '323232fsdafds', name: 'Alex'} },
    {message: 'Hello Alex', id: '43dsfasdfasd', user: {id: '423sasdfasdfasd', name: 'Kolya'} },
    {message: 'Yo yo', id: '43dsfasdd', user: {id: '423sasdfasdfasd', name: 'Kolya'} }
]

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('client-message-sent', (message: string) => {
        const newMessage = {message: message, id: '43dsfasddd' + new Date().getTime(), user: {id: '423sasdfasdfasd', name: 'Kolya'} }
        messages.push(newMessage)

        io.emit('new-message-sent', newMessage)
    })
    socket.emit('init-messages-published', messages)
});



const PORT = process.env.PORT || 3009;

server.listen(PORT, () => {
    console.log(`server *:${PORT}`);
});