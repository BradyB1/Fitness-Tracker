require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { db } = require("./db/db")


const app = express()
const port = process.env.port

app.use(express.json())
app.use(cors())


const server = () =>{
    db()
    app.listen(port, () =>{
        console.log(`Server running on ${port}`)
    })
}

server()