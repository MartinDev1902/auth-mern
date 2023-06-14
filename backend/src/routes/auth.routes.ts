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
        this.router.route('/logout').get(UserController.logout)
        this.router.route('/refresh').post(UserController.refreshToken)
        this.router.route('/').get(UserController.getUser)
    }
}

export default new UserRoutes().router