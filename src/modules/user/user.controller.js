import User from "../../../database/models/user.model.js"
let addUser = async(req,res,next)=>{
    let user = new User(req.body)
    await user.save()
    res.json({message:"user created successfully", newUser:user})
}
 let getAllusers = async(req,res,next)=>{
    let users = await  User.find()
    res.json({message:"successfull",allUsers:users})
 }
 let getuser = async(req,res,next)=>{
    let userId = req.params.id
    let user = await  User.find({_id:userId})
    res.json({message:"successfull",user})
 }
 let deleteUser = async(req,res,next)=>{
    let userId = req.params.id
    let deletedUser = await  User.findByIdAndDelete(userId)
    res.json({message:"successfull",deletedUser})
 }
export {
    addUser,
    getAllusers,
    getuser,
    deleteUser
}