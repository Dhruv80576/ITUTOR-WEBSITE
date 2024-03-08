const { User } = require('../models/user.model');
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
        const user = await User.findById(id).select("-password");
 
        if(!user) {
            res.status(404).json({message: "User not found"});
        }
        req.user = user;
        next();
        console.log("User sent")
    } catch (error) {
        console.log("Error in protect route middleware", error);
        res.status(500).json({error: "Internal hhvvvyyvServer Error"});
    }
}

module.exports = protectRoute