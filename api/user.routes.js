import express from 'express'

import { siginup } from "../services/log/signup.js"
import { signin } from "../services/log/signin.js"
import { validation } from '../middleware/validation/ValidUser.js'
const user = express.Router()
user.post("/siginup/:id",validation, siginup)
user.post("/siginin", validation,signin)

export { user } 




