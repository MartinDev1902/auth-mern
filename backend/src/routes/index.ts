import { Router } from "express";
import UserRoutes from './auth.routes'

class Routes {
    public router: Router

    constructor(){
        this.router = Router()

        this.router.use('/users', UserRoutes)
    }
}

export default new Routes().router