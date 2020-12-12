const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/', (req,res)=>{
    res.send("Hello user")
})

/*
router.get('/protected',requireLogin,(req,res)=>{
    res.send("Hello User")
})
*/

router.post('/signup', (req,res)=>{
    //console.log(req.body)
    const {firstName, lastName, fullName, email, city, gender, password, pic} = req.body
    console.log("Called")
    console.log(req.body)
    if (!email || !password || !firstName || !lastName || !fullName || !city || !gender){
        return res.status(422).json({error:"Please enter values in all the fields"})
    }
    
    let currentDate = new Date()

    if(req.body.date){
        currentDate = new Date(req.body.date)
    }
    // console.log(req.body.date)
    //res.json({message:"Successfully Posted"})
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                firstName,
                lastName,
                fullName,
                city,
                gender,
                pic,
                dateCreated:currentDate
            })
    
            user.save()
            .then(user=>{
                res.json({message:"Account Created Successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/signin', (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"Please add email or password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"Successfully Signed in"})
                const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
                const {_id,fullName,email,followers,following,pic} = savedUser
                res.json({token, user:{_id, fullName, email, followers, following, pic}})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router