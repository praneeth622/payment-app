const express = require('express')
const {User, Account} = require('../db')
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware')
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

    //Adding Account Balance
    await Account.create({
        userId,
        balance : 1+Math.random()*10000
    })

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
const updateBody = zod.object({
    firstName: zod.string().optional(),
    lastName : zod.string().optional(),
    password : zod.string().optional()
})

router.put('/',authMiddleware,async(req,res)=>{
    const {sucess} = updateBody.safeParse(req.body)
    //check with zod
    if(!sucess){
        return res.status(400).json({
            'message':"Give valid data"
        })
    }
    //find the user (no need as we are verifing in authMiddleware only so no need to double check)
    // const presentUser = aw it User.findOne({
    //     username:res.body.username,
    //     password:res.body.password
    // })
    // if(!presentUser){
    //     return res.status(403).json({
    //         'message':'User not present'
    //     })
    // }

    //update the user
    await User.updateOne({_id : res.body.userId},res.body)

    //return the response
    res.status(200).json({
        "message":"Updated Sucessfully"
    })
})

//Filter
router.get('/bulk',async(res,req)=>{
    const filter = req.query.filter

    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":filter
            }
        },{
            lastName:{
                "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(u=>({
            username:u.username,
            firstName:u.firstName,
            lastName:u.lastName,
            _id:u._id
        }))
    })
})

module.exports = router