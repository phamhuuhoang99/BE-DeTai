const { Personnel, Unit } = require("../models/index.model");

class PersonnelController {
  findAll(req, res) {
    Personnel.findAll({ include: Unit })
      .then((personnel) => {
        res.json(personnel);
      })
      .catch((err) =>
        res.status(500).send({
          message: err,
        })
      );
  }
  create(req, res) {
    //Get data
    let { name, unitId, position, rank, specialize } = req.body;

    Personnel.create({
      name,
      unitId,
      position,
      rank,
      specialize,
    })
      .then((personnel) => res.json(personnel))
      .catch((personnel) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    Personnel.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Personnel was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Personnel with id=${id}. Maybe User was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Personnel with id=" + id,
        });
      });
  }
}
module.exports = new PersonnelController();
