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
const db_config = require("./config/db.config")


//checked server is working or not

/**
 * Creating an admin and user at the starting of the application
 * if not already connected
 */

//Connection with database

mongoose.connect(db_config.DB_URL)

const db= mongoose.connection
db.on("error",()=>{
    console.log("Error while connection to the database")
})

db.once("open",()=>{
    console.log("Connected to the database")
})

app.listen(server_config.PORT,()=>{
    console.log("Server started at PORT",server_config.PORT)
})