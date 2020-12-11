const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const roommateSchema = new mongoose.Schema({
    pic1:{
        type:String,
        //default:"no photo"
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
    question10:{
        type:String,
        required:true
    },
    question11:{
        type:String,
        required:true
    },
    question12:{
        type:String,
        required:true
    },
    question13:{
        type:String,
        required:true
    },
    connected:[{type:ObjectId,ref:"User"}],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Roommate", roommateSchema)