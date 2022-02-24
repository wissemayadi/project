const express=require("express");
const user = require("./routes/user");
require('dotenv').config({path:'./config/.env'})
const connectDB= require('./config/connectDB');
const post= require("./routes/post");
const app=express();
 



app.use(express.json());
//user router
app.use("/api/user",user);

//post router
app.use("/api/post",post);


connectDB();

app.listen(process.env.PORT,(err)=>{
    err 
    ? console.log(err)
    : console.log(`the server is running on ${process.env.PORT}`);
})
