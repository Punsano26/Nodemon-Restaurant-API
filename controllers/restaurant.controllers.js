const Restaurant = require("../models/restaurant.model");
//crate and Save a new Restaurant
exports.create = async (req, res) => {
  const { title, type, img } = req.body;
  console.log(res.body+"hello12121");
  
  //validate data
  if (!title || !type || !img) {
    res.status(400).send({ 
      message: "Name, Type and Image can not be empty!" ,
    });
  }
  await Restaurant.findOne({ where: { title: req.body.title } }).then(
    (restaurant) => {
      if (restaurant) {
        res.status(400).send({ message: "Restaurant already exists!" });
        return;
      }
      //create a new restaurant
      const newRestaurant = {
        title: title,
        type: type,
        img: img,
      };
      Restaurant.create(newRestaurant)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Something error occurred while creating the restaurant.",
          });
        });
    }
  );
};

//Get all restaurant
exports.getall = async (req, res) => {

  
  await Restaurant.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Something error occurred while craeting the restaurants.",
      });
    });
};

//Get by id
exports.getById = async (req, res) => {
  const id = req.params.id;
  await Restaurant.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "No found Restaurant with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Somthing error occurred while creating the restaurants",
      });
    });
};

//UpdAte a restaurant
exports.update = async (req, res) => {
  const id = req.params.id;
  await Restaurant.update(req.body, {where: { id: id,}}).then((num) => {
      if (num == 1) {
        res.send({ message: "Restaurant was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update restaurant with id=" +
            id +
            ". Maybe restaurant was not found or req.body is empty",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Somthing error occurred while creating the restaurants",
      });
    });

  
};
//Delete A Restaurant
  exports.deletebyid = async (req, res) => {
    const id = req.params.id;
    await Restaurant.destroy({
      where: {
        id: id,
      },
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Restaurant was Deleted successfully" });
        } else {
          res.send({
            message: "Cannot Delete restaurant with id=" + id + ".",
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message ||
            "Somthing error occurred while creating the restaurants.",
        });
      });
  };
