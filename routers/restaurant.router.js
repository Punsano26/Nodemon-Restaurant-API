const express = require("express");
const router = express.Router(); //เรียกออกมาเป็นฟังก์ชันด้วยนะ!!
const restaurantController = require("../controllers/restaurant.controllers");
const Restaurant = require("../models/restaurant.model");

//create a restaurant
//POST http://localhost:3000/api/v1/restaurants
router.post("/", restaurantController.create);

//Get all restaurant
router.get("/", restaurantController.getall);
//Get By ID
router.get("/:id", restaurantController.getById);
//update a restaurant by Id
router.put("/:id", restaurantController.update);
//delete a restaurant by Id
router.delete("/:id", restaurantController.deletebyid);





module.exports = router;
