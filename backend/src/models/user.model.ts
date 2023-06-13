import { IUser, IUserMethods } from "../interfaces/IUser";
import mongoose, {Model, Schema} from "mongoose";
import jwt from 'jsonwebtoken'

type UserModel = Model<IUser, {}, IUserMethods>

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
    fullName: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true}
})

UserSchema.static('createAccessToken', function createAccessToken (id: any){
    //@ts-ignore
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '2h'})
})

UserSchema.static('createRefreshToken', function createRefreshToken(id: any){
    //@ts-ignore
    return jwt.sign({id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d'})
})


const User = mongoose.model<IUser, UserModel>("User", UserSchema)

export default User;