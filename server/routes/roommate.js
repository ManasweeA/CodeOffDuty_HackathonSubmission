const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Roommate = mongoose.model("Roommate")
const requireLogin = require('../middleware/requireLogin')
const { route } = require('./auth')

const fetch = require('node-fetch');

const path = require("path");

router.get('/allroommates', requireLogin, (req,res)=>{
    Roommate.find()

    //Show the user id and name of the postedBy id
    .populate("postedBy", "_id fullName")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/getroommatesubpost', requireLogin, (req,res)=>{

    // if postedBy in following
    Roommate.find({postedBy:{$in:req.user.following}})

    //Show the user id and name of the postedBy id
    .populate("postedBy", "_id fullName")
    
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/myroommatepost',requireLogin,(req,res)=>{
    Roommate.find({postedBy:req.user._id})
    .populate("postedBy","_id fullName")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createroommatepost', requireLogin, async(req,res)=>{
    const {pic1, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14} = req.body

    if(!pic1 && !question1 && !question2 && !question3 && !question4 && !question5 && !question6 && !question7 && !question8 && !question9 && !question10 && !question11 && !question12 && !question13 && !question14){
        return res.status(422).json({error:"Please add all the fields"})
    }
    //console.log(req.user)
    //res.send("OK")

    // Remove the password while storing the postedBy user
    req.user.password = undefined

    
    const post = new Roommate({
        pic1,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
        question14,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.put('/roommateconnect',requireLogin,(req,res)=>{
    Roommate.findByIdAndUpdate(req.body.postId,{
        $push:{connected:req.user._id}
    },{
        new:true
    })
    .populate("postedBy","_id fullName")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})

router.put('/roommateunconnect',requireLogin,(req,res)=>{
    Roommate.findByIdAndUpdate(req.body.postId,{
        $pull:{connected:req.user._id}
    },{
        new:true
    })
    .populate("postedBy","_id fullName")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            res.json(result)
        }
    })
})

router.delete('/roommatedeletepost/:postId',requireLogin,(req,res)=>{
    Roommate.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})

module.exports = router