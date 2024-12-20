/*This will be starting file of the project
when i run this file my project will start working */

const express = require("express")
const mongoose = require("mongoose")

const app = express()

//lets start the server

// app.listen(8080,()=>{
//     console.log("Server started")
// }) 
// This is not the way to do because port number is customisable and hardcoded. So, we will store these details in different file server.config.js
const server_config = require("./config/server.config")

app.listen(server_config.PORT,()=>{
    console.log("Server started at PORT",server_config.PORT)
})
//checked server is working or not