const express = require("express");
const router = express.Router(); //เรียกออกมาเป็นฟังก์ชันด้วยนะ!!
const authController = require("../controllers/auth.controllers");
const { verifySignUp } = require("../middlewares");

//ใส่ middleware
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
//create a auth
//POST http://localhost:3000/api/v1/auth/signup
router.post(
  "/signup",
 // [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  authController.signup
);
//http://localhost:3000/api/v1/auth/signin
router.post("/signin", authController.signin);

module.exports = router;
