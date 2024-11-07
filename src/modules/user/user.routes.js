import { Router } from "express";
import { upload } from "../../Middleware/multer.js";
import { addUser, deleteUser, getAllusers, getuser } from "./user.controller.js";

let userRouter = Router()
userRouter.route("/").post(addUser).get(getAllusers)
userRouter.route("/:id").get(getuser).delete(deleteUser)
export default userRouter