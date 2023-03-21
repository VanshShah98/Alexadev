var jwt = require('jsonwebtoken');
const JWT_SECRET='Vansh$123';
const fetchuser=(req,res,next) =>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send("valid token pls")
    }
    try{
        const string=jwt.verify(token,JWT_SECRET);
        req.user.id=data.user;
        next()
    }catch(error){
        res.status(401).send("valid token pls")
    }
} 

module.exports=fetchuser;