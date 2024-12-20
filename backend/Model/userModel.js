const mongoose =require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"User must have a name"]
    },
    email:{
        type:String,
        required:[true,"User must have a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"User must have a password"]
    }
})

const User =mongoose.model('User',userSchema)

module.exports=User