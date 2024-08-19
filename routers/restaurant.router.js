const express = require("express");
const router = express.Router(); //เรียกออกมาเป็นฟังก์ชันด้วยนะ!!
const restaurantController = require("../controllers/restaurant.controllers");

const { authJwt } = require("../middlewares");

// const userController = require("../controllers/user.controllers");
// const User = require("../models/user.model");

// const roleController = require("../controllers/role.controllers");
// const Role = require("../models/role.model");

//create a restaurant
//POST http://localhost:3000/api/v1/restaurants
router.post(
  "/",
    [authJwt.verifyToken, authJwt.isAdminOrMod],
  restaurantController.create
);
//Get all restaurant ดึงข้อมูลร้านอาหารทั้งหมด
router.get("/", restaurantController.getall);
//Get By ID ดึงข้อมูลร้านอาหารตาม ID โดยส่งคำขอไปยังฟังก์ชัน getById
router.get("/:id", [authJwt.verifyToken], restaurantController.getById);
//update a restaurant by Id สำหรับอัพเดทร้านอาหารตาม ID
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdminOrMod],
  restaurantController.update
);
//delete a restaurant by Id ลบร้านอาหารตาม ID โดยส่งคำขอไปยังฟังก์ชัน deletebyid
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  restaurantController.deletebyid
);

module.exports = router;
