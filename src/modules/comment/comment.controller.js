import Comments from "../../../database/models/comments.model.js"
let addComment = async (req, res, next) => {
   let comment = new Comments(req.body)
   await comment.save()
   res.json({ message: "user created successfully", newComment: comment })
}

let deleteComment = async (req, res, next) => {
   let commentId = req.params.id
   let deletedComment = await Comments.findByIdAndDelete(commentId)
   res.json({ message: "successfull", deletedComment })
}
export {
   addComment,
   deleteComment
}