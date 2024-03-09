const express =  require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
// const {messaging} = require("../firebaseConfig")

router.post('/', async (req, res) =>{
    try {
        const { senderId, receiverId, title, body } = req.body;
        const tokens = req.cookies.jwt;
        // if (tokens) {
          const message = {
            notification: {
              title,
              body,
            },
            // tokens,
          };
  
          // const response = await messaging.sendMulticast(message);
          // const successCount = response.successCount;
          // const failureCount = response.failureCount;
  
          // res.status(200).json({ success: true, successCount, failureCount });
        // } else {
        //   res.status(400).json({ success: false, error: "No tokens found" });
        // }
      } catch (error) {
        console.error("Error sending notification", error);
        res.status(500).json({error: error});
      }
  });

// const getTokens = (req, res) => {
//     try{
//    const token = req.cookie.jwt;
//     if(!token){
//         res.status(401).json({message: "UnAuthorized- No token found"});
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if(!decoded){
//         res.status(401).json({message: "UnAuthorized- Invalid token"});
//     }
//     res.status(200).json({message: "Done"});
//   } catch (error) {
//     console.error('Error verifying JWT:', error);
//     return null;
//   }
// }
module.exports= router;