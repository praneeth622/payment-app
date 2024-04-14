const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({})
    }
    //break the token 
    const token =authHeader.split(' ')[1]
    //verify the token is valid
    try{
        const decode = jwt.verify(token,JWT_SECRET)

        if(decode.userId){
            req.userId = decode.userId;
            next()
        }

    }
    catch(err){
        return res.status(403).json({})
    }
}
module.exports=authMiddleware