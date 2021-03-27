const Post = require("../models/Post");
const User=require("../models/User");
const ObjectID=require("mongoose").Types.ObjectId;
require("dotenv").config({path :"./config/.env"})


exports.register=async(req,res)=>{
  
    const {country,dateStart,dateEnd,description}=req.body;
    
    try{
   

    const newPost= new Post(
      {
           
            country,
            dateStart,
            dateEnd,
            description,
            author:req.User,
            
        })
    await newPost.save();
    res.status(201).json({ msg: "post added successfully" });
} catch (error) {
  res.status(501).json({ msg: "post add fail",errors:error });
}
};


exports.getPosts=async(req,res)=>{
try{
const post = await Post.find();
res.status(200).json(post);

}catch(error){

  res.status(401).json({msg:error.msg});
}

}

exports.getPostsById=async(req,res)=>{
try{
let {_id}=req.params;
const postById=await User.find({_id});
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