const Post = require("../models/Post");
const User=require("../models/User");
const ObjectID=require("mongoose").Types.ObjectId;
require("dotenv").config({path :"./config/.env"})
const isAuth = require("../middelware/passport-setup");



exports.getPosts=async(req,res)=>{
try{
const post = await Post.find().populate('user');
// const user = await User.findById(req.user.id).select("-password");
res.status(200).json(post);

}catch(error){

  res.status(401).json({msg:error.msg});
}

}

exports.getPostsById=async(req,res)=>{
try{
let user=req.params._id;
const postById=await Post.find({user:user}).populate("user","_id");
// const user = await User.findById(req.user.id).select("-password");
res.status(200).json(postById);

}catch(error){
  res.status(401).json({msg:error.msg});
}

}






exports.updatePosts=async(req,res)=>{
const {id : _id} =req.params;
const post =req.body;

if(!mongoose.Types.ObjectID.isValid(id)) return res.status(404).send("user not exist");

const updatPost=await Post.findByIdAndUpdate(_id,{...post,_id},{new:true});
res.json(updatPost);


}

exports.register=async(req,res)=>{

try{
  const user =await User.findById(req.user.id).select("password");
  const newPost=new Post ({
  country:req.body.country,
  dateStart: req.body.dateStart,
  dateEnd:req.body.dateEnd,
  description:req.body.description,
  user:req.user.id

  })
  const post =await newPost.save();
  res.json(post);
}catch(err){
console.log(err.message);
res.status(500).send("error to add");
}


}


