const User = require("../models/user.model");

class UserController {
  findAll(req, res) {
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
    //Get data
    let { first_name, last_name, username, password, phone, email } = req.body;

    User.create({
      first_name,
      last_name,
      username,
      password,
      phone,
      email,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
  findOne(req, res) {
    const id = req.params.id;

    User.findByPk(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;

    //--Code phèn--
    delete req.body.id;
    //---------------

    User.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "User was updated successfully.",
          });
        } else {
          res.json({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    User.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete User with id=" + id,
        });
      });
  }
}
module.exports = new UserController();
