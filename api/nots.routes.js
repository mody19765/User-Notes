
import express from 'express'
import { AddNews } from '../services/notes/AddNotes.js'
import { Display} from '../services/notes/ShowNotes.js'
import { usernotes } from '../services/notes/UserNotes.js'
import { deleteNotes } from '../services/notes/DeleteNotes.js'
import { updateNotes } from '../services/notes/UpdateNotes.js'
import { auth } from '../middleware/authentication/auth.js'
const notes = express.Router()

notes.post("/AddNews", auth,AddNews)
notes.get("/Display",auth,Display)
notes.get("/usernotes", auth,usernotes)
notes.delete("/deletenotes",auth,deleteNotes)
notes.put("/updateNotes",auth,updateNotes)

export { notes }



