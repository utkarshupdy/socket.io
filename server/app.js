import express from 'express'
import { Server } from 'socket.io';


const port = 3000;


const app = express()
const server = new Server(app)

const io = new Server(server ) // io menas circuit(whole sockets circuit)

app.get("/" ,(req , res)=>{
    res.send("Hello World!");
})


app.listen(port , ()=>{
    console.log(`Server is running at Port : ${port}`)
})