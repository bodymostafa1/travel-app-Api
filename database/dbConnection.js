import mongoose from "mongoose";

let dbConnection = mongoose.connect("mongodb://localhost:27017/travelApp").catch(err => {
    console.log("err in database connection")
}).then(() => {
    console.log('database connected successfully')
}) 
export default dbConnection