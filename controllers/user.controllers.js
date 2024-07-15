const User = require("../models/user.model");
//crate and Save a new User
exports.create = async (req, res) => {
  const { username, email, password } = req.body;
  //validate data
  if (!username || !email || !password) {
    res.status(400).send({ message: "Name, Type and Image can not be empty!" });
    return;
  }
  await User.findOne({ where: { username: req.body.username } }).then(
    (User) => {
      if (User) {
        res.status(400).send({ message: "User already exists!" });
        return;
      }
      //create a new User
      const newUser = {
        username: username,
        email: email,
        password: password,
      };
      User.create(newUser)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              "Something error occurred while creating the User.",
          });
        });
    }
  );
};
//Get all restaurant
exports.getall = async (req, res) => {
  await User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something error occurred while craeting the User.",
      });
    });
};
//Get by id
exports.getById = async (req, res) => {
  const id = req.params.id;
  await User.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "No found User with id" + id });
      } else {
        res.send(data);
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Somthing error occurred while creating the User",
      });
    });
};

//UpdAte a restaurant
exports.update = async (req, res) => {
  const id = req.params.id;
  await User.update(req.body, {
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "User was update successfully" });
      } else {
        res.send({
          message:
            "Cannot update User with id=" +
            id +
            ". Maybe User was not found or req.body is empty",
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Somthing error occurred while creating the User",
      });
    });

  
};

//Delete A Restaurant
  exports.deletebyid = async (req, res) => {
    const id = req.params.id;
    await User.destroy({
      where: {
        id: id,
      },
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "User was Deleted successfully" });
        } else {
          res.send({
            message: "Cannot Delete User with id=" + id + ".",
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Somthing error occurred while creating the User.",
        });
      });
  };