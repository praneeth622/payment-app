const express = require('express')
const userRouter = require('../routes/user')
const {User} = require('../db')
const zod = require("zod");

const router = express.Router()

router.use('/user', userRouter)

const signupSchema  = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

router.post('/signup',(req,res)=>{
    const {sucess} =signupSchema.safeParse(req.body)

    if(!sucess){
        return res.status(411).json({
            "message":"Email already taken / Incorrect inputs"
        })
    }


    const user = User.findOne({
        username:req.body.username
    })

    if(user._id){
        return res.status(411).json({
            "message":"Email already taken / Incorrect inputs"
        })
    }

})

module.exports = router