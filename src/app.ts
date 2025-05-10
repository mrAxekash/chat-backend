// import express from 'express';
// import http from 'http';
// import socketio from "socket.io";
//
// // import { createServer } from 'node:http';
// // import { fileURLToPath } from 'node:url';
// // import { dirname, join } from 'node:path';
// //import { Server } from 'socket.io';
//
// const app = express();
// const server = http.createServer(app);
// const io = socketio(server);
//
// //const __dirname = dirname(fileURLToPath(import.meta.url));
//
// app.get('/', (req, res) => {
//
//     res.send('Hello ws server');
//     //res.sendFile(join(__dirname, 'index.html'));
// });
//
// io.on('connection', (socket) => {
//     console.log('a user connected');
// });
//
// server.listen(3009, () => {
//     console.log('server *:3009');
// });

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.send("Hello,it's ws server");
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3009, () => {
    console.log('server *:3009');
});