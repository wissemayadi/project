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
  router.get("/",isAuth(), (req, res) => {
    Post.find()
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
  router.put("/user/:_id",(req, res) => {
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
  check("country","text is required").not().isEmpty(),
  check("dateStart","date is required").not().isEmpty(),
  check("dateEnd","date is required").not().isEmpty(),
  check("description","date is required").not().isEmpty(),

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
    res.json(post);
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

//update post by user id 
// router.put("/user/:id", isAuth(), async (req, res) => {
//   try {
//     const id = req.params.id;
//     const authUserId = req.user._id;
//     const post = await Post.findById(id);
//     const userID = post.user;
//     if (authUserId.toString() !== userID.toString()) {
//       return res.status(401).send({ msg: "Unauthorized" });
//     }
//     await post.findByIdAndUpdate();
//     res.status(200).send({ msg: "post deleted" });
//   } catch (error) {
//     res.status(501).send({ msg: "Server Error" });
//   }
// });


//////essai
// router.get("/user/:user/:startIndex?", isAuth(),async (req, res) => {
//   const startIndex = Number(req.query.startIndex) || 0;
//   const user = req.params.user;
//   const count = await Post.countDocuments({ user });
//   const hasMore = startIndex + 1 < count;

//   try {
//     if (!require("mongoose").Types.ObjectId.isValid(user)) {
//       return res.status(404).send({ msg: "Not Found" });
//     }
//     const post = await Post.find({ user })
//       .skip(startIndex)
//       .limit()
//       .populate("user", ["_id"])
//       .sort({ date: -1 });

//     if (!post) {
//       return res.status(404).send({ msg: "Not Found" });
//     }

//     res.status(200).send({ post, hasMore, startIndex });
//     console.log({ count });
//   } catch (error) {
//     res.status(501).send({ msg: "Server Error" });
//     console.log(error);
//   }
// });

/// delete new
// router.put("/user/:id", isAuth(), async (req, res) => {
//   try {
//     const id = req.params.id;
//     const authUserId = req.user._id;
//     const post = await Post.findById(id);
//     const userID = post.user;
//     if (authUserId.toString() !== userID.toString()) {
//       return res.status(401).send({ msg: "Unauthorized" });
//     }
//     await post.update();
//     res.status(200).send({ msg: "ok" });
//   } catch (error) {
//     res.status(501).send({ msg: "Server Error" });
//   }
// });


// router.get("/:id",isAuth(), (req, res) => {

//   post.findOne({ user: req.user._id }).exec((error, post) => {
//     if (error) return res.status(400).json({ error });
//     if (post) {
//       res.status(200).json({ post });
//     }
//   }})
//autre facon de faire les choses!!
// router.get('/posts/:userId', isAuth(), (req, res, next) => {

//   Post.find({"user": req.params.userId})
//   .select('_id country dateStart')
//   .exec()
//   .then(user => {
//       res.status(200).json({
//           user: user
//       })
//   })
//   .catch(error => {
//       res.status(500).json({
//           error: error
//       })
//   })

// });


module.exports = router ; 
