import mongoose, { Types } from "mongoose";

let schema = new mongoose.Schema({
    userId:{
        type:Types.ObjectId,
        ref:"User"
    },
    content:String,
    comments:{
        type:[Types.ObjectId],
        ref:"Comment"
    },
    images:[String]
},{
    timestamps:true,
    versionKey:false
})
schema.post("init",function (doc){
    doc.images = doc.images.map(img =>"http://localhost:3000/uploads/" + img)
})
let Entries = mongoose.model("Entries", schema)
export default Entries