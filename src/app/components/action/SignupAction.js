"use server"

import { DbConnect } from "@/app/libs/DbConnect"
import User from "@/app/libs/model/register";
import bcrypt from "bcrypt";
export async function signupAction(formData){
    await DbConnect();
    const {username, email, password}=formData;
const salt = await bcrypt.genSalt(10)
const hashedPassword=await  bcrypt.hash(password,salt);
    await User.create({
        username:username, password:hashedPassword, email:email
    })
   
}