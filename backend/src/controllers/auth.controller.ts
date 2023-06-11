import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import UserModel from "../models/user.model";
class UserController{
    static async register(req: Request, res: Response) {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            password
        })
        user.save().then(() => {
            res.send('Registered')
        }).catch(error => console.log(error))
    }

    static login(req: Request, res: Response): void {
        res.send('Login')
    }
}

export default UserController