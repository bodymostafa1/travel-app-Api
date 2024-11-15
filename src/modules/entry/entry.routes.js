import { Router } from "express";
import { upload } from "../../Middleware/multer.js";
import { addEntry, deleteEntry, getEntries, getEntry } from "./entry.controller.js";
import { validate } from "../../Middleware/validate.js";
import entryValidation from "./entry.validation.js";


let entryRouter = Router()
entryRouter.route("/").post(upload.array('images',10),validate(entryValidation),addEntry).get(getEntries)
entryRouter.route("/:id").get(getEntry).delete(deleteEntry)
export default entryRouter