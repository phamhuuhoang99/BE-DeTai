const { Material } = require("../models/index.model");

class MaterialController {
  findAll(req, res) {
    Material.findAll()
      .then((materials) => {
        res.json(materials);
      })
      .catch((err) =>
        res.status(500).send({
          message: err,
        })
      );
  }
  create(req, res) {
    //Get data
    let { name, description, type, status, missionId } = req.body;

    Material.create({
      name,
      description,
      type,
      status,
      missionId,
    })
      .then((material) => res.json(material))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
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

    Material.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Material was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Material with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Material with id=" + id,
        });
      });
  }
}
module.exports = new MaterialController();
