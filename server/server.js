import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

//App Config
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

//Initialize Middlewares
app.use(express.json()) //any request on server will be parsed into json
app.use(cors()) //to connect with client who is running on different port

//API routes
app.get('/', (req,res)=>res.send("API Working"))
app.use('/api/user', userRouter)
app.use('/api/image', imageRouter)

app.listen(PORT, ()=> console.log("Server Running on port "+PORT))