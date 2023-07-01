import mongoose from "mongoose";


const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:String

})
const modelUser=mongoose.model("User",Schema)

export{modelUser}
