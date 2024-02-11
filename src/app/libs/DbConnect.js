import mongoose from "mongoose";
export const DbConnect =async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/regDb");
        console.log("Connection Successfully")
    } catch (error) {
        console.log("not connected")
    }
}