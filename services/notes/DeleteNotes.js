import { modelNotes } from "../../models/notes.model.js"


const deleteNotes=async(req,res)=>{

    const {_id}=req.body

   await modelNotes.deleteOne({_id})
   res.json({message:"Deleted"})
}
export{deleteNotes}