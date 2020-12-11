const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    pic1:{
        type:String,
        //default:"no photo"
        required:true
    },
    pic2:{
        type:String,
        //default:"no photo"
        required:true
    },
    pic3:{
        type:String,
        //default:"no photo"
        required:true
    },
    house_struct:{
        type:String,
        required:true
    },
    house_type:{
        type:String,
        required:true
    },
    question1:{
        type:String,
        required:true
    },
    question2:{
        type:String,
        required:true
    },
    question3:{
        type:String,
        required:true
    },
    question4:{
        type:String,
        required:true
    },
    question5:{
        type:String,
        required:true
    },
    question6:{
        type:String,
        required:true
    },
    question7:{
        type:String,
        required:true
    },
    question8:{
        type:String,
        required:true
    },
    question9:{
        type:String,
        required:true
    },
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Post", postSchema)