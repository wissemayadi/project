const User= require ("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {registerErrors}=require("../utils/errorsutils")

 require("dotenv").config({path :"./config/.env"})

 const secretOrKey = process.env.secretOrKey;



exports.register = async (req, res) => {
    const { pseudo, email, password } = req.body;
    const searcheResult = await User.findOne({ email });
    if (searcheResult) return res.status(400).json({ msg: "user exist" });
    
    try {
     
      const newUser = new User({
        pseudo,
        email,
        password,
        password
      

      });
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      newUser.password = hash;
      await newUser.save();
      res.status(201).json({ msg: "user added successfully" });
    } catch (error) {
    
      console.log(error );
      res.status(501).json({ msg: "User add fail"});
    }
  };

exports.login = async (req,res)=>{
const { email , password} = req.body;

const user = await User.findOne({ email});

if(!user) return res.status(400).json({msg :"Wrong email or password"})

const isMatch = await bcrypt.compare(password,user.password);

if(!isMatch) return res.status(400).json({msg:"Wrong password"})

if(user && !isMatch) return res.status(400).json({msg:"required field password"})




try {
    const payload ={

      pseudo: user.pseudo,
     
        email:user.email,
        id: user._id
    }
  //change res.status(200).json({token:`Bearer ${token}`,msg:'login success'}) to res.status(200).json({token:`Bearer ${token}`})
    const token = await jwt.sign(payload,secretOrKey);
    res.status(200).json({ token: `Bearer ${token}` })
    
} catch (error) {
    console.log("Login error",error);
    res.status(500).json({msg:"login fail"});
}


} 
