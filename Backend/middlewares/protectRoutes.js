const { Student } = require('../models/student.model');
const jwt = require("jsonwebtoken");

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({message: "UnAuthorized- No token found"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            res.status(401).json({message: "UnAuthorized- Invalid token"});
        }
		let id = decoded.userId;
        // console.log(id);
        const student = await Student.findById(id).select("-password");
        if(!student) {
            res.status(404).json({message: "Student not found"});
        }
        req.student = student;
        next();
    } catch (error) {
        console.log("Error in protect route middleware", error);
        res.status(500).json({error: "Internal hhvvvyyvServer Error"});
    }
}

module.exports = protectRoute