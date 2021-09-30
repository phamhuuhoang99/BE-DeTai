const { Victim } = require("../models/index.model");
const fs = require("fs");

class VictimController {
  findAll(req, res) {
    Victim.findAll()
      .then((victims) => {
        res.json(victims);
      })
      .catch((err) =>
        res.status(404).send({
          message: err,
        })
      );
  }
  create(req, res) {
    let { name, birthday, hometown, characteristic, image, missionId } =
      req.body.victim;
    if (birthday === "") birthday = null;

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
          message: "Could not delete Victim with id=" + id,
        });
      });
  }

  upload(req, res) {
    // save file if present
    const file = req.files.file;
    let fileName = file.name;
    const fileMovePromise = req.files
      ? new Promise((resolve, reject) => {
          file.mv("./src/uploads/" + fileName, function (err) {
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
    let filePath = "./src/uploads/" + file;
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
module.exports = new VictimController();
