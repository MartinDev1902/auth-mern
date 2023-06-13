import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import User from "../models/user.model";
import jwt from 'jsonwebtoken'

class UserController{
    static async register(req: Request, res: Response) {
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password
        })
        user.save().then(() => {

            //@ts-ignore
            const token = User.createAccessToken(user._id)
            //@ts-ignore
            const refreshToken = User.createRefreshToken(user?._id)
            const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toString();
            
            res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7})
            
            return res.status(200).send({token, expirationDate})
        }).catch(error => res.send(error))
    }

    static async login(req: Request, res: Response) {
        try{
            const user = await User.findOne({email: req.body.email})

            //@ts-ignore
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err) res.status(500).send(err)

                if(result){
                    //@ts-ignore
                    const token = User.createAccessToken(user._id)
                    //@ts-ignore
                    const refreshToken = User.createRefreshToken(user?._id)
                    const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toString();
                    res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7})
                    
                    return res.status(200).send({token, expirationDate})
                }
            })

        

        }catch(error){
            console.log(error)
        }
    }

    static logout(req: Request, res: Response): void{
        res.cookie('refreshToken', '', {httpOnly: true, expires: new Date(Date.now() + 5 * 1000),});
        res.status(200).send("Logout successful");
    }
}

export default UserController