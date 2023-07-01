
import { modelUser } from "../../models/user.model.js";
import bcrypt, { hash } from "bcrypt"

const siginup = async (req, res) => {


        const { name, email, password, age } = req.body
        const user = await modelUser.findOne({ email })
        if (user) {
            res.json({ message: "email already exits ", user })
        }
        else {
            bcrypt.hash(password, 4, async (err, hash) => {
                await modelUser.insertMany({ name, email, password: hash, age })
                res.json({ message: "success" })

            })

        }
    


}



export { siginup }


