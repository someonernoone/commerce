const express = require("express")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors= require('cors')

const mongodb = require('./config/mongodb')
const error = require('./middlewares/error')

const userRoute = require('./routers/userRouter')
const productRoute = require('./routers/productRouter')

const app = express()
dotenv.config({path: 'config/config.env'})
mongodb()

const port = process.env.PORT 
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/v1/user', userRoute)
app.use('/api/v1/product', productRoute)

app.use(error)
app.listen(port)
