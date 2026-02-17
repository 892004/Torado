const jwt = require("jsonwebtoken");

exports.verifyToken = (req ,res ,next)=>{
    const authHeader = req.headers["authorization"];

    if(!authHeader){
        return res.status(401).json({Message:"no token provided"})
    }
    const token = authHeader.split(" ")[1];

    jwt.verify(token , process.env.JWT_SECRET , (err , decoded)=>{
        if(err){
            return res.status(403).json({Message:"Invalid Token"})
        }
        req.user = decoded;
        next();
    })
}

exports.isAdmin = (req , res , next ) =>{
    if(req.user.role !== "admin"){
        return res.status(403).json({Message:"Admin Can access only"})
    }

    next();
}