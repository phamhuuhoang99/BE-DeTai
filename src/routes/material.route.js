const express = require("express");
const router = express.Router();
const MaterialController = require("../controllers/material.controller");

router.get("/", MaterialController.findAll);
router.post("/create", MaterialController.create);
// router.get("/:id", UserController.findOne);
// router.put("/:id", UserController.update);
router.delete("/:id", MaterialController.delete);
// router.post("/upload", VictimController.upload);
// router.post("/delete-image", VictimController.deleteImage);

module.exports = router;
