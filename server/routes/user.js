const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model("Post")
const User = mongoose.model("User")

router.get('/user/:id',requireLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
        Post.find({postedBy:req.params.id})
        .populate("postedBy","_id name")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            res.json({user,posts})
        })
    }).catch(err=>{
        return res.status(404).json({error:"User not found"})
    })
})

router.put('/follow',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.body.followId,{
        $push:{followers:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      User.findByIdAndUpdate(req.user._id,{
          $push:{following:req.body.followId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})
router.put('/unfollow',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.body.unfollowId,{
        $pull:{followers:req.user._id}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
      User.findByIdAndUpdate(req.user._id,{
          $pull:{following:req.body.unfollowId}
          
      },{new:true}).select("-password").then(result=>{
          res.json(result)
      }).catch(err=>{
          return res.status(422).json({error:err})
      })

    }
    )
})

router.put('/updatepic', requireLogin, (req,res)=>{
    User.findByIdAndUpdate(req.user._id, {$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
            if(err){
                return res.status(422).json({error:"Pic cannot post"})
            }
            res.json(result)
    })
})


router.put('/houseviewed',requireLogin,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{
        $push:{houseviewed:req.body.viewId}
    },{
        new:true
    },(err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }
        else{
            return res.status(200).json({result})
        }
    }
    )
})

router.get('/housesuggestions',requireLogin,(req,res)=>{
    User.findOne({_id:req.user._id})
    .select("-password")
    .populate("houseviewed", "house_struct house_type")
    .then(user=>{
        console.log(user)
        console.log(user.houseviewed)
        let building_viewed = 0, bungalow_viewed = 0, row_house_viewed = 0, furnished_viewed = 0, unfurnished_viewed = 0, semifurnished_viewed = 0;
        let max_v1 = 0, max_v2 = 0, house_struct_chosen = "", house_type_chosen = "";

        for(let i =0; i<user.houseviewed.length; i++){
            if(user.houseviewed[i].house_struct === 'Building'){
                building_viewed+=1
            }
            else if(user.houseviewed[i].house_struct === 'Bungalow'){
                bungalow_viewed+=1
            }
            else{
                row_house_viewed+=1
            }

            if(user.houseviewed[i].house_type==='Furnished House'){
                furnished_viewed+=1
            }
            else if(user.houseviewed[i].house_type==='Unfurnished House'){
                unfurnished_viewed+=1
            }
            else{
                semifurnished_viewed+=1
            }
        }

        if(building_viewed>=bungalow_viewed){
            max_v1 = building_viewed
            house_struct_chosen = "Building"
        }
        else{
            max_v1 = bungalow_viewed
            house_struct_chosen = "Bungalow"

            if(row_house_viewed>=max_v1){
                max_v1 = row_house_viewed
                house_struct_chosen = "Row House"
            }
        }

        if(furnished_viewed>=unfurnished_viewed){
            max_v2 = furnished_viewed
            house_type_chosen = "Furnished House"
        }
        else{
            max_v2 = unfurnished_viewed
            house_type_chosen = "Unfurnished House"
            if(semifurnished_viewed>=max_v2){
                max_v2 = semifurnished_viewed
                house_type_chosen = "Semi-Furnished House"
            }
        }

        console.log("House struct chosen : ", house_struct_chosen, " : ", max_v1)
        console.log("House type chosen : ", house_type_chosen, " : ", max_v2)

        Post.find({house_struct:house_struct_chosen, house_type:house_type_chosen})
        .populate("postedBy", "_id fullName")
        .populate("comments.postedBy", "_id fullName")
        .then(posts=>{
            res.json({posts})
        })
        .catch(err=>{
            console.log(err)
        })
            
        }).catch(err=>{
            return res.status(404).json({error:"User not found"})
        })
})


module.exports = router