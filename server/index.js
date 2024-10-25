import express from 'express'
import { Server } from 'socket.io';
import {createServer} from 'http'
import cors from 'cors'


const port = 3000;


const app = express()
const server = createServer(app)

const io = new Server(server  , {
    cors:{
        origin:"*",
        methods:["GET" , "POST"],
        credentials: true
    }
}) // io menas circuit(whole sockets circuit)

app.use(cors());

app.get("/" ,(req , res)=>{
    res.send("Hello World!");
})

io.on("connection" , (socket)=>{
    console.log("User Connected")
    console.log("Id" , socket.id)
    // socket.emit(`welcome" , "welcome to the server ${socket.id}`)
    socket.emit(`welcome" , "welcome to the server ${socket.id}`)

})


// app.listen(port , ()=>{ // as this create a new server.. and do not run on server created by ourself
//     console.log(`Server is running at Port : ${port}`)
// })

server.listen(port , ()=>{
    console.log(`Server is running at Port : ${port}`)
})