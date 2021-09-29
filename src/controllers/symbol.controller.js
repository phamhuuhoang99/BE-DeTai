const { Symbol } = require("../models/index.model");
const fs = require("fs");
const path = require("path");

class SymbolController {
  findAll(req, res) {
    Symbol.findAll()
      .then((symbols) => {
        res.json(symbols);
      })
      .catch((err) =>
        res.status(404).send({
          message: err,
        })
      );
  }
  create(req, res) {
    let { name, image, type, note } = req.body;

    Symbol.create({
      name,
      image,
      type,
      note,
    })
      .then((symbol) => res.json(symbol))
      .catch((err) => {
        res.status(400).send({
          message:
            err.message || "Some error occurred while creating the Symbol.",
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

    Symbol.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Symbol was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Symbol with id=${id}. Maybe User was not found!`,
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

    const fileMovePromise = req.files
      ? new Promise((resolve, reject) => {
          file.mv(
            path.resolve("./src/uploads/symbols/", fileName),
            function (err) {
              if (err) return reject(err);
              resolve();
            }
          );
        })
      : Promise.resolve("No file present");

    fileMovePromise
      .then(() => {
        // do other stuff
        res.status(200).json(fileName);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
  deleteImage(req, res) {
    const file = req.body.imageName;
    let filePath = "./src/uploads/symbols/" + file;
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
module.exports = new SymbolController();
