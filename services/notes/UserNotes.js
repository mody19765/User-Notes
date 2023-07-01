import { modelNotes } from "../../models/notes.model.js"


const usernotes = async (req, res) => {
    const createdBy = req.header('id')
    const news = await modelNotes.find({ createdBy })
    
    res.json({ message: "user", news })
}
export { usernotes}