import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  idd:Number,
  name:String,
  price:Number,
  desc:String
},{timestamps:true})


export const userModel=mongoose.model("users",userSchema)