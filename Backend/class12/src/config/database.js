const mongoose = require('mongoose');
require('dotenv').config()

async function connectToDb(){
    await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
}

module.exports = connectToDb