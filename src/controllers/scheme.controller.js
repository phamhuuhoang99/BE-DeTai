const { Scheme } = require("../models/index.model");

class SchemeController {
  create(req, res) {
    let { name, time_start, note, geom, color_scheme } = req.body.scheme;
    let planId = req.body.planId;

    Scheme.create({
      name,
      time_start,
      planId,
      note,
      geom,
      color_scheme,
    })
      .then((scheme) => res.json(scheme))
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Scheme.",
        });
      });
  }
}

module.exports = new SchemeController();
