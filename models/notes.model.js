import mongoose from "mongoose";


const Schema= new mongoose.Schema({
    title:String,
    desc:String,
    createdBy:{
   type: mongoose.SchemaTypes.ObjectId,
   ref:'User'
   },
},
{   
timestamps:true
})
const modelNotes=mongoose.model("notes",Schema)

export{modelNotes}
