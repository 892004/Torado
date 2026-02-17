const { use } = require('react');
const db =  require('../Config/db')
const jwt =  require('jsonwebtoken')
require ('dotenv').config(); 
const bcrypt = require('bcrypt')
exports.loginUser = async (req , res ) =>{
    try{
        const {email , password} = req.body;

        const [result] = await db.query(
            'CALL sp_login_user(?,?)',
            [email , password]
        );

        const user = result[0][0];

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
            return res.status(401).json({message:"Invalid password"});
        }

        const token = jwt.sign(
        {
            user_id : user.user_id,
            role : user.role,
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
        );

        res.json({message:"Login Successful" , token , role:user.role , user});

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error" , error:error.message})
    }
}


exports.RegisterUser =  async (req , res )=>{
    const {name , email , password , phone} = req.body;

    const hashedPassword =  await bcrypt.hash(password,10);

    await db.query("CALL sp_register_user(?,?,?,?)",[name , email , hashedPassword, phone])
    res.json({message:"user Created"})
}

exports.getUserById =  async(req , res )=>{
    try{
        const{id} = req.params

        const [result] = await db.query("CALL sp_get_user_by_id(?)" , [id])

        const user = result[0][0];

        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        res.json(user)
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error" , error:error.message})
    }
}

exports.getUsers = async(req , res ) =>{
    try{
        const [result] =  await db.query("CALL sp_get_users()")
        const users = result[0];

        res.json(users);
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Server Error" , error:error.message})
    }
}