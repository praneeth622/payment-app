const express = require('express')
const {User, Account} = require('../db')
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware')
const {JWT_SECRET} = require('../config')
const zod = require("zod");
const { default: mongoose } = require('mongoose');

const router = express.Router()

router.get('/balance',authMiddleware,async(req,res)=>{
    const account = await Account.findOne({
        userId:req.userId
    })
    res.status(200).json({
        balance: account.balance
    })
})

//transfer API
router.post('transfer',authMiddleware,async(req,res)=>{
    //create the session
    const session = await mongoose.startSession()

    session.startTransaction()
    const {amount,to} = req.body
    //fetch account
    const account = await Account.findOne({
        userId:req.userId
    }).session(session)

    //balance>trans
    if(!account|| account.balance<to){
        await session.abortTransaction()
        res.status(400).json({
            message:"Insufficient balance"
        })
    }
    //find to account
    const toAccount = await Account.findOne({
        userId:to
    }).session(session)

    //Checking to Account
    if(!toAccount){
        await session.abortTransaction()
        res.status(400).json({
            message:"Invaild to Account"
        })
    }
    //Excutice the transation
    await Account.updateOne({
        userId:res.userid
    },{
        $inc:{
            balance: -amount
        }
    }).session(session)

    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance:+amount
        }
    }).session(session)
    //commit the transation
    await session.commitTransaction()
    res.status(200).json({
        message: "Transfer successful"
    })
})

module.exports = router