const express = require('express')
const loginRouter = express.Router()
const loginSchema = require('../models/user')



loginRouter.get('/' ,async (req , res) => {
    console.log('Hittteddd');
    try{
        const loginResponse = await loginSchema.find()
        res.json(loginResponse)
    }
    catch(err){
        res.send('Error : ' + err)
    }
})


loginRouter.post('/', async(req,res) => {
    console.log(req.body)
    const loginQuery = {username : req.body.username, password : req.body.password}

    try{
        const userData = await loginSchema.findOne(loginQuery)
        res.json(userData)
    }
    catch(err){
        res.send('Error : ' +err)
    }
})


// loginRouter.post('/', async(req,res) => {
//     const user = new loginSchema({
//         username : req.body.username,
//         password : req.body.password
//     })

//     try{
//         const userData = await user.save()
//         res.json(userData)
//     }
//     catch(err){
//         res.send('Error : ' +err)
//     }
// })



module.exports = loginRouter