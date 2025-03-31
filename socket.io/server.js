const express  = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();

const server = http.createServer(app);
// initate socket.io and attach this this to the http server

const io = socketIo(server);
app.use(express.static('public'))

const users = new Set();
io.on('connection', (socket)=>{
    console.log('A user is connected');
    // handle users when they will join the chat
    socket.on('join',(userName)=>{
        users.add(userName);
        socket.userName = userName;
        // broadcast to all clients/users that a new user has joined
        io.emit('userJoined',userName);

        // Send the updated user list to all users
        io.emit("userList",Array.from(users));
    })

    // handle incoming chat messages
    socket.on('chatMessage',(message)=>{
        console.log("server side",`${message.userName}: ${message.text}`);
        //broadcast the recieved message to all clients
        io.emit('chatMessage',message);
    })
    // ḥandle user disconnection
    socket.on('disconnect',()=>{
        console.log('An user is disconnected');
        users.forEach(user=>{
            if(user ===socket.userName){
                users.delete(user); 
                io.emit('userLeft',user);
                io.emit('userList',Array.from(users));
            }
        })
    })
});
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})