const connectToDB = require("./db/connect.js");
const authTeacherRoutes = require("./routes/authTeacher.routes.js");
const authStudentRoutes = require("./routes/authStudent.routes.js");
const searchRoutes = require("./routes/search.routes.js");
const teacherRoutes = require("./routes/teacher.routes.js");
const studentRoutes = require("./routes/student.routes.js");
const notificationRoutes = require("./routes/notification.routes.js");

const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors=require('cors');

const app = express();
const port = 2000;

dotenv.config();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/api/auth/teacher/', authTeacherRoutes);
app.use('/api/auth/student/', authStudentRoutes);
app.use('/api/search/', searchRoutes);
app.use('/api/teacher/', teacherRoutes);
app.use('/api/student/', studentRoutes);
app.use('/api/notifications/', notificationRoutes);

app.listen(port, ()=>{
    connectToDB();
    console.log(`Listening to port ${port}`);
})