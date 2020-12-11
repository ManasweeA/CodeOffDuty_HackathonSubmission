const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')
const { route } = require('./auth')

const fetch = require('node-fetch');

const path = require("path");
const { json } = require('express')

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

router.post('/createpost', requireLogin, async(req,res)=>{
    const {pic1, pic2, pic3, flag} = req.body

    if(!pic1 && !pic2 && !pic3){
        return res.status(422).json({error:"Please add all the fields"})
    }
    //console.log(req.user)
    //res.send("OK")

    // Remove the password while storing the postedBy user
    req.user.password = undefined

    if(flag=="0"){
        let image_cat1;
        let image_cat2;
        let image_cat3;

        await fetch('http://127.0.0.1:8000/predict_structure', {
        method: 'post',
        body:    JSON.stringify({
            "image":pic1
        }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            image_cat1 = json.category
            // console.log(image_cat1)
            if(image_cat1==='building'){
                image_cat1 = 'Building'
            }
            else if(image_cat1==='bungalow'){
                image_cat1 = 'Bungalow'
            }
            else if(image_cat1==='row_house'){
                image_cat1 = 'Row House'
            }
            else{
                image_cat1 = 'Undefined'
            }
        });

        await fetch('http://127.0.0.1:8000/predict_type', {
        method: 'post',
        body:    JSON.stringify({
            "image":pic2
        }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            image_cat2 = json.category
            // console.log(image_cat2)
            if(image_cat2==='furnished_house'){
                image_cat2 = 'Furnished House'
            }
            else if(image_cat2==='unfurnished_house'){
                image_cat2 = 'Unfurnished House'
            }
            else{
                image_cat2 = 'Undefined'
            }
        });

        await fetch('http://127.0.0.1:8000/predict_type', {
        method: 'post',
        body:    JSON.stringify({
            "image":pic3
        }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            image_cat3 = json.category
            // console.log(image_cat3)
            if(image_cat3==='furnished_house'){
                image_cat3 = 'Furnished House'
            }
            else if(image_cat3==='unfurnished_house'){
                image_cat3 = 'Unfurnished House'
            }
            else{
                image_cat3 = 'Undefined'
            }
        });

        if(image_cat1 && image_cat2 && image_cat3){
            console.log(JSON.stringify({
                pic1,
                pic2,
                pic3,
                image_cat1,
                image_cat2,
                image_cat3
            }))
            res.json({
                pic1,
                pic2,
                pic3,
                image_cat1,
                image_cat2,
                image_cat3
            })
        }

        
    }

})

router.post('/verifiedpost', requireLogin, async(req,res)=>{
    const {pic1, pic2, pic3, image_cat1, image_cat2, image_cat3, question1, question2, question3, question4, question5, question6, question7, question8, question9, flag} = req.body

    if(!pic1 && !pic2 && !pic3){
        return res.status(422).json({error:"Please add all the fields"})
    }
    //console.log(req.user)
    //res.send("OK")

    // Remove the password while storing the postedBy user
    req.user.password = undefined

    let house_struct = image_cat1;
    let house_type;
    if (image_cat2===image_cat3){
        house_type = image_cat2
    }
    else{
        house_type = "Semi-Furnished House"
    }
    const post = new Post({
        pic1,
        pic2,
        pic3,
        house_struct,
        house_type,
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        postedBy:req.user
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })

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
            res.json({house:result})
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


router.get('/house/:id',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.id})
    .populate("postedBy","_id fullName")
    .select("-password")
    .then(house=>{
        res.json({house})
        })
    .catch(err=>{
        return res.status(404).json({error:"Property not found"})
    })
})

module.exports = router