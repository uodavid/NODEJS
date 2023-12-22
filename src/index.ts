import Express, {Request, Response} from 'express';
import dotenv from 'dotenv'; 
import Cors from 'cors'; 
import { PrismaClient } from '@prisma/client'
import allRoutes from './routes'
import { notFoundHandler } from './middlewares/errorsHandlers';
import { tokenMiddlware } from './middlewares/token';
dotenv.config();

const prisma = new PrismaClient()

// framework express

const app = Express();

//middleware
app.use(Cors({origin: '*'}))
app.use(Express.json())
app.use('/api', tokenMiddlware, allRoutes); //aqui todas las peticiones llegan a /api osea barra api //http://localhost:4000/api
app.use(notFoundHandler)

export default app;