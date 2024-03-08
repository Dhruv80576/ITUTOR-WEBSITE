const mongoose = require("mongoose");
const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to database");
    } catch (error) { 
        console.log(error);
    }
}
module.exports= connectToDB