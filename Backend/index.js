import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import connectDB from "./db/db.js";
import { userModel } from "./models/Users.js";


const app=express()
app.use(cors());
app.use(express.json());



connectDB()
.then(()=>{app.listen(8000,()=>{
  console.log(`Server is running at Port on 8000`);
})})
.catch((err)=>{
  app.on("error",(error)=>{
    console.log(error);
  })
  console.log("MongoDB connection Failed !!",err);
})



//api for to record data

app.post("/createUser",(req,res)=>{
  userModel.create(req.body)
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
})

//show data at main route
app.get("/",(req,res)=>{
  userModel.find({})
  .then(userData=>res.json(userData))
  .catch(err=>res.json(err))
})


app.get("/getUser/:id",(req,res)=>{
  const id=req.params.id;
  userModel.findById({_id:id})
  .then(userData=>res.json(userData))
  .catch(err=>res.json(err))
})

//Update user

app.put('/updateUser/:id',(req,res)=>{
  const id=req.params.id;
  userModel.findByIdAndUpdate({_id:id},{
    idd:req.body.idd,
    name:req.body.name,
    email:req.body.email,
    desc:req.body.desc
  })
  .then(userData=>res.json(userData))
  .catch(err=>res.json(err))
})


//deleting the data
app.delete("/delete/:id",(req,res)=>{
  const id=req.params.id;
  userModel.findByIdAndDelete({_id:id})
  .then(userData=>res.json(userData))
  .catch(err=>res.json(err))
})
