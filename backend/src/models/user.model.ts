import { IUser } from "../interfaces/IUser";
import mongoose, {Document, Schema} from "mongoose";

interface IUserModel extends IUser, Document{}

const UserShema = new Schema<IUserModel>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model<IUserModel>("User", UserShema)

export default UserModel;