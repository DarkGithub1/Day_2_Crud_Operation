import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  idd:Number,
  name:String,
  email:String,
  desc:String
},{timestamps:true})


export const userModel=mongoose.model("users",userSchema)