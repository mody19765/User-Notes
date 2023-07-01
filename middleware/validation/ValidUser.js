import Joi from "joi";
let arr2 = []
let METHOD = ["body", "params"]
let Schem = {
    body: Joi.object({
        name: Joi.string().required().min(5).max(25),
        email: Joi.string().required().email(),
        password: Joi.string().required().pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/), Repassword: Joi.ref("password"),
        age: Joi.number().min(20).required()
    }),
    params: Joi.object({
        id: Joi.string().required().min(5).max(25)
    })
}
const validation = async (req, res, next) => {
    let arr = []
    METHOD.map((key) => {
        let { error } = Schem[key].validate(req[key], { abortEarly:false })

        if (error) {
            error.details.map((mes) => {

                arr.push(mes.message)
            })
        }

    })

    if (arr.length > 0) {
        res.json(arr)
    }
    else {
        next()
    }
}


export { validation }