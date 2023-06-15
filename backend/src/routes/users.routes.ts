import { Router } from "express"
import UsersController from "../controllers/users.controller"

class UsersRoutes{
    public router: Router

    constructor(){
        this.router = Router()

        this.init()
    }

    init(): void{
        this.router.route('/').get(UsersController.getUser)
    }
}

export default new UsersRoutes().router