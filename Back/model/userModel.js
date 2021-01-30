const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },

    dept:{
        type:String,
        require: true
    },

    img:{
        type: String,
        default: 'No photo'
    },

    passing_year:{
        type:String,
        require: true
    },
    batch:{
        type:String,
        require: true
    },

    address:{
        type:String,
        require: true
    },
    
    student_Id:
    {
        type:String,
        require: true
    },
    job_details:{
        type:String,
        require: true
    },

    link:
        {
            type: String,
            default: '#'
           
        },

    linkedInLink:
    {
        type: String,
        default: '#'
       
    },
    



})

const User=mongoose.model('User',userSchema)
module.exports=User