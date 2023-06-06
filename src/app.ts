import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import useGlobalErrorHandler from './app/middleWares/globalErrorHandler'
// import { error } from 'winston'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application route
app.use('/api/v1/users/', usersRouter.router)

//testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.send('Hello World!')
//   throw new useApiError.ApiError(400, 'ore baba error')
//   next("ore baba error")
// })

app.use(useGlobalErrorHandler.globalErrorHandler)

export default app
