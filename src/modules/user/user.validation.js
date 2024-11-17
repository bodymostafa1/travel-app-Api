import Joi from "joi";

let userValidation = Joi.object({
    name: Joi.string().required().min(2),
    email:Joi.string().required(),
    password:Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
})
export default userValidation