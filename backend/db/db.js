const mongoose = require("mongoose")

const db = async () =>{ 
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connection Successful")
    } catch (error) {
        console.log(`Error in DB connection: ${error}`)
    }
}

module.exports = {db}