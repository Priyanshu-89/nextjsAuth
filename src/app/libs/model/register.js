import mongoose, {Schema} from "mongoose";
const userSchema=new Schema({
    username:String,
    password:String,
    email:String
})

const User =mongoose.models.User || mongoose.model("User", userSchema);
export default User;