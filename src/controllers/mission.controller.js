const Mission = require("../models/mission.model");

class MissionController {
  findAll(req, res) {
    Mission.findAll({
      order: [["createdAt", "DESC"]],
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
}

module.exports = new MissionController();
