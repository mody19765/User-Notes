import { modelNotes } from "../../models/notes.model.js"


const updateNotes=async(req,res)=>{

    const {_id,title,desc}=req.body

   await modelNotes.findByIdAndUpdate({_id},{title,desc})
   res.json({message:"Updated"})


}
export{updateNotes}