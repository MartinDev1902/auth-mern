import { Router } from "express";
import AuthController from "../controllers/auth.controller";

class AuthRoutes {
    public router: Router

    constructor(){
        this.router = Router()

        this.init()
    }

    init():void {
        this.router.route('/register').post(AuthController.register)
        this.router.route('/login').post(AuthController.login)
        this.router.route('/logout').get(AuthController.logout)
        this.router.route('/refresh').post(AuthController.refreshToken)
        this.router.route('/').get(AuthController.getUser)
    }
}

export default new AuthRoutes().router