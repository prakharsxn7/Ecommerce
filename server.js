/*This will be starting file of the project
when i run this file my project will start working */

const express = require("express")
const mongoose = require("mongoose")
const bcrypt =require("bcryptjs")

const app = express()

//lets start the server

// app.listen(8080,()=>{
//     console.log("Server started")
// }) 
// This is not the way to do because port number is customisable and hardcoded. So, we will store these details in different file server.config.js
const server_config = require("./config/server.config")
const db_config = require("./config/db.config")
const user_model= require("./Model/user.model")


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
    init()

})
async function init(){
    try{
        let user = await user_model.findOne({userid:"admin"})
        if(user){
        console.log("Admin is already present")
        return
        }

    }
    catch(err){
        console.log("Error while creating admin and user",err)
    }
    
    try{
        user= await user_model.create({
            name:"Prakhar",
            userid:"admin",
            email:"prakharsxn7@gmail.com",
            usertype:"ADMIN",
            password:bcrypt.hashSync("LetsBegin123",12)
        })
        console.log("Admin Sucessfully created",user)
    }
    catch(err){
        console.log("Error while creating admin",err)


    }
}


app.listen(server_config.PORT,()=>{
    console.log("Server started at PORT",server_config.PORT)
})
