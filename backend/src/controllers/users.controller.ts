import { Request, Response } from "express"
import User from "../models/user.model"

class UsersController{
    static async getUser(req: Request, res: Response){
        const user = await User.findOne({_id: req.query.id})
        
        res.send({
            fullName: user?.fullName,
            email: user?.email
        })
    }
}

export default UsersController