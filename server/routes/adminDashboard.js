const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const requireLogin = require('../middleware/requireLogin')
const { route } = require('./auth')

const fetch = require('node-fetch');

const path = require("path");

router.get('/registrationCountForAYear', (req,res)=>{
    console.log("In registration count function")
    let monthsData = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
        11:0,
    }

    User.find()

    //Show the user id and name of the postedBy id
    .populate("postedBy", "_id fullName")
    .then(registrations=>{
        // console.log(registrations)
        let result = new Array()
        let total_registrations = registrations.length
        for (let user = 0; user<registrations.length; user++){
            let date = registrations[user].dateCreated
            monthsData[date.getMonth()]+=1
        }

        for (let month =0; month<12; month++)
        {
            let val = monthsData[month]
            let percent = val/total_registrations
            result.push(Math.floor(percent*100))
        }

        console.log(result)
        res.json({result})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/premiumpredict', async(req,res)=>{
    console.log("In premium predict function")
    let data = req.body
    console.log(data)
    let cities = {
        "Pune":1,
        "Mumbai":2,
        "Bangalore":3,
        "Hyderabad":4
    }
    let persons = {
        "Student":1,
        "Employee":2,
        "Self_Employed":3,
        "Tourist":4
    }
    let city_selected = cities[data.city_selected]
    let quarter_selected = Math.floor(data.quarter_selected)
    let person_selected = persons[data.person_selected]
    let main_data = [city_selected, quarter_selected, person_selected]

    console.log(JSON.stringify(main_data))

    await fetch('http://127.0.0.1:8000/predict_premium', {
        method: 'post',
        body:    JSON.stringify({
            "main_data":main_data
        }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            if(json.predictedValue === '1')
            {
                res.json({result:"Yes"})
            }
            else{
                res.json({result:"No"})
            }
        });
})


router.post('/profitpredict', async(req,res)=>{
    console.log("In profit predict function")
    let data = req.body
    console.log(data)
    let cities = {
        "Pune":1,
        "Mumbai":2,
        "Bangalore":3,
        "Hyderabad":4
    }
    
    let city_selected = cities[data.city_selected]
    let quarter_selected = Math.floor(data.quarter_selected)
    let main_data = [city_selected, quarter_selected]

    console.log(JSON.stringify(main_data))

    await fetch('http://127.0.0.1:8000/predict_profit', {
        method: 'post',
        body:    JSON.stringify({
            "main_data":main_data
        }),
        headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            
            res.json({result:Math.floor(json.predictedValue)})
            
        });
})


module.exports = router