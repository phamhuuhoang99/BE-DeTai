const { Plan } = require("../models/index.model");

class PlanController {
  create(req, res) {
    let { name, description } = req.body.plan;
    let missionId = req.body.missionId;

    Plan.create({
      name,
      description,
      missionId,
    })
      .then((plan) => res.json(plan))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
  findOne(req, res) {
    const id = req.params.id;

    Plan.findByPk(id, { include: ["schemes"] })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id,
        });
      });
  }
  // delete(req, res) {
  //   const id = req.params.id;

  //   Plan.destroy({
  //     where: { id: id },
  //   })
  //     .then((num) => {
  //       if (num == 1) {
  //         res.send({
  //           message: "Plan was deleted successfully!",
  //         });
  //       } else {
  //         res.send({
  //           message: `Cannot delete Plan with id=${id}. Maybe User was not found!`,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.status(500).send({
  //         message: "Could not delete Plan with id=" + id,
  //       });
  //     });
  // }
}

module.exports = new PlanController();
