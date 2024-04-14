const express = require('express')
const userRouter = require('../routes/user')
const {User} = require('../db')
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config')
const zod = require("zod");

const router = express.Router()

router.use('/user', userRouter)




router.post('/')

module.exports = router