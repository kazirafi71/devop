const User=require('../model/userModel')


module.exports={
    profile(req,res){
        console.log('erwerwerew')
        console.log(req.user._id)
        User.findById({_id: req.user._id})
        .then(result=>{
            return res.status(201).json(result)
        })
        .catch(err=>console.log(err))
    }
}