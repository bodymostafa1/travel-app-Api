import mongoose, { Types } from "mongoose";

let schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[2,"name is too short"],

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:[10,"email is too short"]

    },
    password:{
        type:String,
        required:true,
        minLength:[10,"password is too short"]
    },
    entries:{
        type:[Types.ObjectId],
        ref:"Entries"
    },
    comments:{
        type:[Types.ObjectId],
        ref:"Comments"
    }
},{
    timestamps:true,
    versionKey:false
})
let User = mongoose.model("User",schema)
export default User