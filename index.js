const express = require('express')
const connectMongoose = require('./db')
var cors = require('cors')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
connectMongoose()

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/api",require('./routes/contact'))

app.listen(PORT,()=>{
    console.log(`Connected to port ${PORT}`)
})