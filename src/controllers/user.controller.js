const { User } = require("../models/index.model");
const JWT = require("jsonwebtoken");

const { JWT_SECRET } = require("../configs/index");

const encodedToken = (userID) => {
  return JWT.sign(
    {
      iss: "Huu Hoang",
      sub: userID,
      iat: new Date().getTime(), // ngay phat hanh
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    JWT_SECRET
  );
};

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
  async create(req, res) {
    //Get data
    let { first_name, last_name, username, password, phone, email } = req.body;
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res.status(403).json({
        // error: {
        message: "Email tồn tại",
        // },
      });
    }

    User.create({
      first_name,
      last_name,
      username,
      password,
      phone,
      email,
    })
      .then((user) => {
        // const token = encodedToken(user.id);
        // res.setHeader("Authorization", token);
        const { password, ...data } = user.toJSON();
        res.status(201).json({ success: true, data });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
  signIn(req, res) {
    const token = encodedToken(req.user._id);
    res.setHeader("Authorization", token);

    return res.status(200).json({ success: true });
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
  secret(req, res) {
    console.log(req);
  }
  logout(req, res) {
    res.setHeader("Authorization", "");
    res.send({ message: "success" });
  }
}
module.exports = new UserController();
