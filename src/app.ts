import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', usersRouter)

// testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working  Successfully !')
})

// global error handler
app.use(globalErrorHandler)

export default app
