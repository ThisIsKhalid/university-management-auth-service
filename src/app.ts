import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', UserRoutes.router)

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working  Successfully !')
})

// global error handler
app.use(globalErrorHandler)

export default app
