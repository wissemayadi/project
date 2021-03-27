const express = require("express");
const {register , login}= require("../controllers/user.controller")
const { registerRules, validator } = require("../middelware/validator");
const isAuth = require("../middelware/passport-setup");
const User = require("../models/User");

const router = express.Router();

router.post("/register",registerRules() ,validator,register);
router.post("/login", login);

router.get("/current",isAuth() , (req,res)=>{

res.json(req.user);

})



//crud
//@Api http:localhost:7000/api/users
//@desc Get all users
//@access public
router.get("/", (req, res) => {
    User.find()
      .then((user) => res.send(user))
      .catch((err) => res.send(err));
  });
  
  //@Api http:localhost:7000/api/users/id
  //@desc Get user by id
  //@access public
  router.get("/:_id", (req, res) => {
    let { _id } = req.params;
    
    User.find({ _id })
      .then((user) => res.send(user))
      .catch((err) => res.send(err));
  });
  
  //@Api http:localhost:7000/api/users/id
  //@desc Delete user by id
  //@access public
  router.delete("/:_id", (req, res) => {
    // console.log(req.params)
    let { _id } = req.params;
    User.findByIdAndDelete({ _id })
      .then(() => res.send("User has been deleted"))
      .catch((err) => res.send(err));
  });
  
  //@Api http:localhost:7000/api/users/id
  //@desc Update user by id
  //@access public
  router.put("/:_id", (req, res) => {
    let { _id } = req.params;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("User has been updated"))
      .catch((err) => res.send(err));
  });
  



module.exports = router ; 