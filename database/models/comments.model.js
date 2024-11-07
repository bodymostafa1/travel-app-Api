import mongoose, { Types } from "mongoose";
let schema = new mongoose.Schema({
    userId:{
        type:Types.ObjectId,
        ref:"User"
    },
    content:String,
    entryId:{
        type:Types.ObjectId,
        ref:"Entries"
    },
},{
    timestamps:true,
    versionKey:false
})
let Comments = mongoose.model("Comments", schema)
export default Comments