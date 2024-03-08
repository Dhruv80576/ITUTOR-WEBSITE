const express =  require("express");
const {searchTeacher} = require("../controllers/search.controller.js");
// const {protectRoute} = require("../middlewares/protectRoutes.js")
const router = express.Router();
router.get('/', searchTeacher);

module.exports= router;