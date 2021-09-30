const { Unit } = require("../models/index.model");
const fs = require("fs");

class UnitController {
  findAll(req, res) {
    Unit.findAll()
      .then((units) => {
        res.json(units);
      })
      .catch((err) =>
        res.status(404).send({
          message: err,
        })
      );
  }
  create(req, res) {
    let { name, number, vehicleNumber, image, typeUnit } = req.body;

    Unit.create({
      name,
      number,
      vehicleNumber,
      image,
      typeUnit,
    })
      .then((victim) => res.json(victim))
      .catch((err) => {
        res.status(400).send({
          message:
            err.message || "Some error occurred while creating the Unit.",
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    Unit.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Unit was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Victim with id=${id}. Maybe Unit was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(404).send({
          message: "Could not delete User with id=" + id,
        });
      });
  }

  upload(req, res) {
    // save file if present
    const file = req.files.file;
    let fileName = file.name;
    // fileName = new Date().toLocaleString() + fileName;
    const fileMovePromise = req.files
      ? new Promise((resolve, reject) => {
          console.log(file);
          file.mv("./src/uploads/units/" + fileName, function (err) {
            if (err) return reject(err);
            resolve();
          });
        })
      : Promise.resolve("No file present");

    fileMovePromise
      .then(() => {
        // do other stuff
        res.status(200).json(fileName);
      })
      .catch((err) => {
        console.log("err");
        res.status(500).json(err);
      });
  }
  deleteImage(req, res) {
    const file = req.body.imageName;
    let filePath = "./src/uploads/units/" + file;
    try {
      fs.unlinkSync(filePath);

      res.status(201).send({ message: "Image deleted" });
    } catch (e) {
      res.status(400).send({
        message: "Error deleting image!",
        error: e.toString(),
        req: req.body,
      });
    }
  }
}
module.exports = new UnitController();
