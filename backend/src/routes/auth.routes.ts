import { Router } from "express";
import UserController from "../controllers/auth.controller";

class UserRoutes {
    public router: Router

    constructor(){
        this.router = Router()

        this.init()
    }

    init():void {
        this.router.route('/register').post(UserController.register)
        this.router.route('/login').post(UserController.login)
    }
}

export default new UserRoutes().router