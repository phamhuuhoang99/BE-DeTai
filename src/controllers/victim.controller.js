const { Victim } = require("../models/index.model");

class VictimController {
  // findAll(req, res) {
  //   Victim.findAll()
  //     .then((victims) => {
  //       res.json(victims);
  //     })
  //     .catch((err) =>
  //       res.status(404).send({
  //         message: err,
  //       })
  //     );
  // }
  create(req, res) {
    console.log(req.body);
    //Get data
    let { name, birthday, hometown, characteristic, image, missionId } =
      req.body;

    Victim.create({
      name,
      birthday,
      hometown,
      characteristic,
      image,
      missionId,
    })
      .then((victim) => res.json(victim))
      .catch((err) => {
        res.status(400).send({
          message:
            err.message || "Some error occurred while creating the Victim.",
        });
      });
  }
  // update(req, res) {
  //   const id = req.params.id;

  //   //--Code phèn--
  //   delete req.body.id;
  //   //---------------

  //   User.update(req.body, {
  //     where: { id: id },
  //   })
  //     .then((num) => {
  //       if (num == 1) {
  //         res.json({
  //           message: "User was updated successfully.",
  //         });
  //       } else {
  //         res.json({
  //           message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: "Error updating User with id=" + id,
  //       });
  //     });
  // }
  delete(req, res) {
    const id = req.params.id;

    Victim.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Victim was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Victim with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(404).send({
          message: "Could not delete User with id=" + id,
        });
      });
  }
}
module.exports = new VictimController();
