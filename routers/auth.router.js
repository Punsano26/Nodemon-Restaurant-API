const express = require("express");
const router = express.Router(); //เรียกออกมาเป็นฟังก์ชันด้วยนะ!!
const authController = require("../controllers/auth.controllers");
const Auth = require("../controllers/auth.controllers");

//create a auth
//POST http://localhost:3000/api/v1/auth/signup
router.post("/signup", authController.sigup);

module.exports = router;

