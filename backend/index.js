require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { db } = require("./db/db")
const {readdirSync} = require("fs")

const app = express()
const port = process.env.port

app.use(express.json())
app.use(cors())

readdirSync("./routes").map((route) => app.use("/api/v1", require("./routes/" + route)))
const path = require("path")


const server = () =>{
    db()
    app.listen(port, () =>{
        console.log(`Server running on ${port}`)
    })
}

server()