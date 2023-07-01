import express from 'express'
import { DBconnection } from './config/dbconnection.js'
import { user } from './api/user.routes.js'
import { notes } from './api/nots.routes.js'
const port = 9000
const app = express()
app.use(express.json())
app.use("/user", user)
app.use("/notes", notes)


DBconnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

