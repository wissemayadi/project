const express = require("express");
const {register} = require("../controllers/post.controller");
const { registerRules, validator } = require("../middelware/validatorPost");
const router = express.Router();




router.post('/register',register);
  //crud


  router.get("/", (req, res) => {
    Post.find()
      .then((post) => res.send(post))
      .catch((post) => res.send(post));
  });

  router.get("/:_id", (req, res) => {
    let { _id } = req.params;
    //   let id = req.params._id;
    Post.find({ _id })
      .then((post) => res.send(post))
      .catch((err) => res.send(err));
  });

  router.delete("/:_id", (req, res) => {
    // console.log(req.params)
    let { _id } = req.params;
    Post.findByIdAndDelete({ _id })
      .then(() => res.send("Post has been deleted"))
      .catch((err) => res.send(err));
  });

  router.put("/:_id", (req, res) => {
    let { _id } = req.params;
    Post.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("Post has been updated"))
      .catch((err) => res.send(err));
  });


module.exports = router ; 