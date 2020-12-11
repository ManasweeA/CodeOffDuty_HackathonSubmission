const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')
const { route } = require('./auth')

const path = require("path");

router.get('/allpost', requireLogin, (req,res)=>{
    Post.find()

    //Show the user id and name of the postedBy id
    .populate("postedBy", "_id fullName")
    .populate("comments.postedBy", "_id fullName")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/getsubpost', requireLogin, (req,res)=>{

    // if postedBy in following
    Post.find({postedBy:{$in:req.user.following}})

    //Show the user id and name of the postedBy id
    .populate("postedBy", "_id fullName")
    .populate("comments.postedBy", "_id fullName")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate("postedBy","_id fullName")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost', requireLogin, (req,res)=>{
    const {pic1, pic2, pic3, question1, question2, question3, question4, question5, question6, question7, question8, question9} = req.body
    if(!pic1 && !pic2 && !pic3 && !question1 && !question2, !question3, !question4, !question5, !question6, !question7, !question8, !question9){
        return res.status(422).json({error:"Please add all the fields"})
    }
    //console.log(req.user)
    //res.send("OK")

    // Remove the password while storing the postedBy user
    req.user.password = undefined

    console.log(JSON.stringify({
        pic1,
        pic2,
        pic3,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9
    }))
    res.json("Successful")

    // const post = new Post({
    //     title,
    //     body,
    //     photo:pic,
    //     postedBy:req.user
    // })
    // post.save().then(result=>{
    //     res.json({post:result})
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
})

router.put('/like',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    },{
        new:true
    })
    .populate("comments.postedBy","_id fullName")
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

router.put('/unlike',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    },{
        new:true
    })
    .populate("comments.postedBy","_id fullName")
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

router.put('/comment',requireLogin,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id fullName")
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

router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
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