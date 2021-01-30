const User=require('../model/userModel')

module.exports={
    alumniIce(req,res){

        User.find({dept:'ICE'})
        .then(result=>{
            
            return res.status(201).json({
                result
            })
        })
        .catch(err=>{
            console.log(err)
        })
    },
    alumniEs(req,res){

        User.find({dept:'ES'})
        .then(result=>{
            return res.status(201).json({
                result
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}