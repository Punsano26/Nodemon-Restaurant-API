const User = require("../models/user.model");
const Role = require("../models/role.model");
//เป็น middleware เสมอ
checkDuplicateUsernameOrEmail = async (req, res, next) => {
  //check username
  await User.findOne({ where: { username: req.body.username } }).then(
    (user) => {
      if (user) {
        res
          .status(400)
          .send({ message: "Failed! Username is already in use!" });
        return;
      }
      //check email
      User.findOne({
        where: {
          email: req.body.email,
        },
      }).then((user) => {
        if (user) {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
        }
        //ถ้าไม่ next() มันจะค้างที่ middleware แล้วไม่ไปต่อ
        next();
      });
    }
  );
};

//check roles are valid
checkRolesExisted = async (req, res, next) => {
  if (req.body.roles) {
    Role.findAll({
      where: {
        name: {
          [Op.or]: req.body.roles,
        },
      },
    }).then((roles) => {
      if (roles.length !== req.body.roles.length) {
        res.status(400).send({ message: "Failed! Role does not exist" });
        return;
      }
      next();
    });
  } else {
    next();
  }
};
const verifySingUp = {
    checkRolesExisted,
    checkDuplicateUsernameOrEmail,
  };
  module.exports = verifySingUp
