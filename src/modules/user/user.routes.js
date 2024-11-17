import { Router } from "express";
import { upload } from "../../Middleware/multer.js";
import { addUser, deleteUser, getAllusers, getuser } from "./user.controller.js";
import { validate } from "../../Middleware/validate.js";
import userValidation from "./user.validation.js";

let userRouter = Router()
userRouter.route("/").post(validate(userValidation),addUser).get(getAllusers)
userRouter.route("/:id").get(getuser).delete(deleteUser)
export default userRouter