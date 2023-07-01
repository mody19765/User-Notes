import { modelNotes } from "../../models/notes.model.js"


const Display = async (req, res) => {
    const news = await modelNotes.find({},).populate('createdBy', 'name -_id')

    res.json({ message: "success", news })
}

export { Display}



