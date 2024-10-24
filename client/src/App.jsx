import React, { useEffect } from 'react'
import {io} from "socket.io-client"

function App() {

  const socket = io("http://localhost:3000")

  useEffect(()=>{
    socket.on("connect" , ()=>{
      console.log("connected");
    });

    socket.on("welcome" , (s)=>{
      console.log(s)

    })
  } , [])


  return (
    <div>App</div>
  )
}

export default App