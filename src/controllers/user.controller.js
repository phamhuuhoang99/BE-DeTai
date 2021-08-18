const User = require("../models/user.model");

class UserController {
  index(req, res) {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) =>
        res.status(500).send({
          message: err,
        })
      );
  }
  create(req, res) {
    //Validate
    //...
    // ex:
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!",
    //   });
    //   return;
    // }

    //Get data
    let { first_name, last_name, username, password, phone } = req.body;

    User.create({
      first_name,
      last_name,
      username,
      password,
      phone,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
}
module.exports = new UserController();
