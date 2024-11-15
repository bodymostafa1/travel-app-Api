import Joi from "joi";

let entryValidation = Joi.object({
    userId: Joi.string().length(24).required(),
    content:Joi.string().min(20).required(),
})
export default entryValidation