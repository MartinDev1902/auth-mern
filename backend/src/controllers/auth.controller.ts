import { Request, Response } from "express";
class UserController{
    static register(req: Request, res: Response):void {
        res.send('Register')
    }

    static login(req: Request, res: Response): void {
        res.send('Login')
    }
}

export default UserController