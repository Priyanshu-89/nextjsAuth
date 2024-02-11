import NextAuth from "next-auth";
import credentials from 'next-auth/providers/credentials'
import { DbConnect } from "./libs/DbConnect";
import User from "./libs/model/register";
import bcrypt from "bcrypt"
export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({
    providers: [
        credentials({
            name: 'credentials',
            async authorize(credentials) {
                await DbConnect();
                const user = await User.findOne({
                    username: credentials.username,
                    //password: credentials.password,
                })
                if(user){
                    const matchedPass=bcrypt.compare(credentials?.password, user.password);
                    if (matchedPass){
                   
                        return user;
                    }
                        
                    else throw new Error("Invalid password")
                
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login",
        signOut: "/logout",
    }
})