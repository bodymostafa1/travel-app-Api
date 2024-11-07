import userRouter from "../modules/user/user.routes.js"
import entryRouter from "./entry/entry.routes.js"

export const bootsrap = (app)=>{
app.use("/api/users",userRouter)
app.use("/api/entries",entryRouter)
}