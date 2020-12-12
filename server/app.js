const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} =  require('./keys')
/*
const customMiddleware = (req,res,next)=>{
    console.log("middleware executed !!")
    next()
}

app.get('/about',customMiddleware, (req,res)=>{
    console.log("About")
    res.send("About Page")
})
*/


mongoose.connect(MONGOURI, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.on('connected', ()=>{
    console.log("Connected to Mongo")
})
mongoose.connection.on('error', (err)=>{
    console.log("Error Connecting", err)
})

//app.use(customMiddleware)

require('./models/user')
require('./models/post')
require('./models/roommate')

//First Parse the post data
app.use(express.json())


// and then route
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))
app.use(require('./routes/roommate'))
app.use(require('./routes/adminDashboard'))


app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})