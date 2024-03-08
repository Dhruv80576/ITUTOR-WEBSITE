const connectToDB = require("./db/connect.js");
const authTeacherRoutes = require("./routes/authTeacher.routes.js");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const port = 2000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth/teacher/', authTeacherRoutes); 

app.listen(port, ()=>{
    connectToDB();
    console.log(`Listening to port ${port}`);
})