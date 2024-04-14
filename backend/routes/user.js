const express = require('express')
const {User} = require('../db')
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config')
const zod = require("zod");
const router = express.Router()

const signupSchema  = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
});

router.post('/signup',async(req,res)=>{
    const {sucess} =signupSchema.safeParse(req.body)

    if(!sucess){
        return res.status(411).json({
            "message":"Email already taken / Incorrect inputs"
        })
    }


    const user = await User.findOne({
        username:req.body.username
    })

    if(user){
        return res.status(411).json({
            "message":"Email already taken / Incorrect inputs"
        })
    }

    const username= req.body.username
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const password = req.body.password

    const newUser = await User.create({
        username,
        firstName,
        lastName,
        password
    })

    const userId = newUser._id

    //jwt token
    const token = jwt.sign({userId},JWT_SECRET)

    res.status(201).json({
        message: "User created successfully",
        token: token
    })

})

router.post('/signin',async (req,res)=>{
    const { success } = signinSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
    
    const username= req.body.username
    const password = req.body.password

    //find user
    const presentUser = User.findOne({
        username:username,
        password:password
    })
    if(!presentUser){
        return res.status(411).json({
            'message':"User is not present"
        })
    }
    //create jwt
    const presentUserId = presentUser._id
    const token = jwt.sign({presentUserId},JWT_SECRET)

    //send the response
    res.status(200).json({
        'message':"Login Successfull",
        tonken : token
    })
})

module.exports = router