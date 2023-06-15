import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import User from "../models/user.model";
import jwt from 'jsonwebtoken'

class AuthController{
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

    static refreshToken(req: Request, res: Response) {
        const token = req.headers.cookie?.split('=')[1]

        if(token){
            //@ts-ignore
            const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
            //@ts-ignore
            if(decoded.exp > Math.floor(Date.now() / 1000)){
                //@ts-ignore
                const token = User.createAccessToken(decoded._id)
                //@ts-ignore
                const refreshToken = User.createRefreshToken(decoded?._id)
                const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000).toString();
                res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7})
                
                return res.status(200).send({token, expirationDate})
            }
        }

        return res.status(404).send("Token is undefined")
        
    }

    static async getUser(req: Request, res: Response) {
        const user = await User.findOne({_id: req.query.id})

        res.send({
            fullName: user?.fullName,
            email: user?.email
        })
    }
}

export default AuthController