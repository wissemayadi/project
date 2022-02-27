const mongoose = require("mongoose");

const userSchema= mongoose.Schema({

    pseudo :{type: String},
    email :{type : String},
     password :{type: String},
    emplacement :{type:String},
    phone:{type:String},
    fullName:{type:String},
    bio:{type:String},
    instagram:{type:String},
    facebook:{type:String},
    twitter:{type:String},
   
  

})

module.exports =User= mongoose.model("user",userSchema); 
