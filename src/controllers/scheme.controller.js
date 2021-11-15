const { Scheme } = require("../models/index.model");

class SchemeController {
  create(req, res) {
    let { name, time_start, note, geom, color_scheme, type_draw } =
      req.body.scheme;
    let planId = req.body.planId;

    Scheme.create({
      name,
      time_start,
      planId,
      note,
      geom,
      color_scheme,
      type_draw,
    })
      .then((scheme) => res.json(scheme))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Scheme.",
        });
      });
  }
  update(req, res) {
    const id = req.params.id;

    //--Code phèn--
    delete req.body.id;
    //---------------

    Scheme.update(req.body, {
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "Scheme was updated successfully.",
          });
        } else {
          res.json({
            message: `Cannot update Scheme with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Scheme with id=" + id,
        });
      });
  }

  findAll(req, res) {
    Scheme.findAll()
      .then((scheme) => {
        res.json(scheme);
      })
      .catch((err) =>
        res.status(500).send({
          message: err,
        })
      );
  }
}

module.exports = new SchemeController();
