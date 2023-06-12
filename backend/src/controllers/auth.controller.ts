import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import UserModel from "../models/user.model";
import jwt from 'jsonwebtoken'

class UserController{
    static async register(req: Request, res: Response) {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new UserModel({
            fullName: req.body.fullName,
            email: req.body.email,
            password
        })
        user.save().then(() => {

            //@ts-ignore
            const token = jwt.sign({id: user._id}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '2h',
            })
            const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toString();
            //@ts-ignore
            const refreshToken = jwt.sign({id: user._id}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '7d',
            })
            res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7})
            
            return res.status(200).send({token, expirationDate})
        }).catch(error => res.send(error))
    }

    static login(req: Request, res: Response): void {
        res.send('Login')
    }

    static logout(req: Request, res: Response): void{
        res.send('LogOut')
    }
}

export default UserController