import { modelNotes } from "../../models/notes.model.js"
import  Jwt  from "jsonwebtoken";


const AddNews = async (req, res) => {

    const { title,desc } = req.body
    
    Jwt.verify(token, 'Hacking',async function(err, decoded) {
       
       if(err){res.json({ message: "Bay Bay fake User ....." })
    }
        else{
        await modelNotes.insertMany({ title, desc, createdBy: req.id })
        res.json({ message: "Done, added" })
        console.log(decoded.foo) // bar
        }
      });
}

export { AddNews }