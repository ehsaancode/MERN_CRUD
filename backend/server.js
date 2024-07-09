const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")

const cors = require("cors")
app.use(cors())

//imported and used at the end
const userRouter = require("./routes/userRoute")

//middleware to parse into json
app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected")
    app.listen(process.env.PORT || 5000, (err)=>{
        console.log("Running on", process.env.PORT)
    })
}).catch((error)=>{
    console.log("error", error)
})

app.use(userRouter)
