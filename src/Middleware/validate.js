
export const validate = (schema)=>{
    return  (req,res,next)=>{
        let {error , value} = schema.validate(req.body)
        if(!error){
            console.log(req.body)
            console.log(value)
            
            next()
        } else{
            console.log("did not pass")
            let errMsgs = error.details.map(err=>err.message)
            return  res.status(400).json({ errors: errMsgs })
        }
    }
}
