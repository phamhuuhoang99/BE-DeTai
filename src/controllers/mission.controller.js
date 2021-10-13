const { Mission, Plan, Victim, Material } = require("../models/index.model");
class MissionController {
  findAll(req, res) {
    Mission.findAll({
      order: [["createdAt", "DESC"]],
      include: Plan,
      include: Victim,
      include: Material,
    })
      .then((missions) => {
        res.json(missions);
      })
      .catch((err) =>
        res.status(500).send({
          message: err,
        })
      );
  }
  create(req, res) {
    //Get data
    let { name, start_date, end_date, location, description } = req.body;

    Mission.create({
      name,
      start_date,
      end_date,
      location,
      description,
    })
      .then((mission) => res.json(mission))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    Mission.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Mission was deleted successfully!",
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
  update(req, res) {
    const id = req.params.id;

    //--Code phèn--
    delete req.body.id;
    //---------------

    Mission.update(req.body, {
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
}

module.exports = new MissionController();
