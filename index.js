import express from 'express'
import cors from  "cors"
import dotenv from "dotenv"
import connectDB from "./Database/config.js"
import userRoute from "./Routers/UserRouter.js"

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

connectDB();
app.get('/', (req, res) => {
    res.send('Welcome to the API')
})

app.use("/api",userRoute)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port ")
})