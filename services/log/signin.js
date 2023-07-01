import { modelUser } from "../../models/user.model.js";
import bcrypt from "bcrypt"

import  Jwt  from "jsonwebtoken";

const signin = async (req, res) => {
    const { email, password} = req.body
    let user = await modelUser.findOne({ email })
    if (user) {
        const match = await bcrypt.compare(password, user.password)
        if (match) {
            let token = Jwt.sign({ root: 'user', UserID:user._id,UserName:user.name }, 'Hacking');
            res.json({ message: "Accepted", token})
        }
        else {
            res.json({ message: "Wrong password" })
        }
    }
    else {
        res.json({ message: "email not found" })
    }
}
export { signin }