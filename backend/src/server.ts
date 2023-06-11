import express, {Application, Request, Response} from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Routes from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'

class Server {
    public app: Application
    public port: any

    constructor(){
        dotenv.config()
        
        this.app = express()
        this.port = process.env.PORT || 5000

        this.init()
    }

    init(): void{

        mongoose.connect(String(process.env.DB_LINK)).then(() => {
            console.log(`[MongoDB] connected: ${process.env.DB_LINK}`);

            this.app.use(cors<Request>({
                credentials: true,
                origin: true
            }))
            this.app.use(bodyParser.json())
            this.app.use(Routes)
            this.app.get('/', (req: Request, res: Response) => {
                res.send("Hello server 1")
            })


            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}`);
            })
        }).catch(error => {throw new Error(error)})

        
    }
}

export default new Server().app