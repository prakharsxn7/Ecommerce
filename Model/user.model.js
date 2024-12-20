const mongoose= require("mongoose") //to connect to the database
/*
username
userid
password
email 
usertype
*/
const user_schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    }
    ,userid:{
        type:String,
        required:true,
        unique:true,
    }
    ,password:{
        type:String,
        required:true,
    }
    ,email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    }
    ,usertype:{
        type:String,
        required:true,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},{timestamps:true,versionKey:false})

module.exports=mongoose.model("User",userSchema)// this will make a collection "Users" 

