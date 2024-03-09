const express =  require("express");
const {signup, logout} = require("../controllers/authStudent.controller.js");
const {login} = require("../controllers/authTeacher.controller.js");
const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

module.exports= router;