const mongoose = require("mongoose");
const user=require('./User');
const postSchema= mongoose.Schema({
       
 
    country :{type: String},
   dateStart:{type:String},
   dateEnd:{type:String},
   description:{type:String},

   user:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }],


})

module.exports =Post= mongoose.model("post",postSchema);
