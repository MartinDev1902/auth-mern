import { Router } from "express";
import AuthRoutes from './auth.routes'
import UsersRoutes from "./users.routes";

class Routes {
    public router: Router

    constructor(){
        this.router = Router()

        this.router.use('/auth', AuthRoutes)
        this.router.use('/users', UsersRoutes)
    }
}

export default new Routes().router