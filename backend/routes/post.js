const express = require("express");
const {register, getPosts, getPostsById} = require("../controllers/post.controller");
const { registerRules, validator } = require("../middelware/validatorPost");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Post =require("../models/Post");
const isAuth=require("../middelware/passport-setup");


 //crud test 
// router.post('/register',register);
 

router.get('/posts',getPosts);

router.get("/user/:_id",getPostsById);//get post by id
//
  router.get("/", (req, res) => {
    
    Post.find()
      .then((post) => res.send(post))
      .catch((post) => res.send(post));
  });


  router.get("/map", (req, res) => {
    
    Post.find().populate("user","phone fullName email")
      .then((post) => res.send(post))
      .catch((post) => res.send(post));
  });
//
// crud start
//
// get post by user id 

router.get("/user/:_id",isAuth(), (req, res) => {
  let user = req.params._id;
  //   let id = req.params._id;
  Post.find({ user: user}).populate("user","_id")
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

//get post by id 
router.get("/:_id",(req, res) => {
  let { _id } = req.params;
  
  Post.find({ _id })
    .then((post) => res.send(post))
    .catch((err) => res.send(err));
});

//

//update post assigned to auth user!
  router.put("/post/:_id",(req, res) => {
    let { _id } = req.params;
    Post.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("Post has been updated"))
      .catch((err) => res.send(err));
  });



//@route POST api/post/posts
//@desc create a post
//@access Private

router.post(
"/registerp",
[isAuth(),
  check("country","(*)country is required").not().isEmpty(),
  check("dateStart","(*)date start is required").not().isEmpty(),
  check("dateEnd","(*)date End is required").not().isEmpty(),
  check("description","(*)description is required").not().isEmpty(),

],
async(req,res)=>{
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(500).json({errors:errors.array()})
  }
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newPost = new Post({
      country: req.body.country,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      description: req.body.description, 
      user: req.user.id
    });
    const post = await newPost.save();
  
    res.status(201).json({ msg: "post added successfully" });
    // res.json(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server errors");
  }
}
);
// delete post by user id// ca marche done
router.delete("/user/:id", isAuth(), async (req, res) => {
  try {
    const id = req.params.id;
    const authUserId = req.user._id;
    const post = await Post.findById(id);
    const userID = post.user;
    if (authUserId.toString() !== userID.toString()) {
      return res.status(401).send({ msg: "Unauthorized" });
    }
    await post.remove();
    res.status(200).send({ msg: "post deleted" });
  } catch (error) {
    res.status(501).send({ msg: "Server Error" });
  }
});


module.exports = router ; 
