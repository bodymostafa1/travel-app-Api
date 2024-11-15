import { Router } from "express";
import { addComment, deleteComment } from "./comment.controller.js";
let commentRouter = Router()
commentRouter.route("/").post(addComment)
commentRouter.route("/:id").delete(deleteComment)
export default commentRouter