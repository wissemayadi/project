const mongoose = require("mongoose");

const postSchema= mongoose.Schema({
       
          
    country :{type: String},
   dateStart:{type:String},
   dateEnd:{type:String},
   description:{type:String},

   user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],


})

module.exports =Post= mongoose.model("post",postSchema);
