const express = require('express')
const {User, Account} = require('../db')
const jwt = require("jsonwebtoken");
const authMiddleware = require('../middleware')
const {JWT_SECRET} = require('../config')
const zod = require("zod");

const router = express.Router()

router.get('/balance',authMiddleware,async(req,res)=>{
    const account = await Account.findOne({
        userId:req.body.userId
    })
    res.status(200).json({
        balance: account.balance
    })
})

module.exports = router