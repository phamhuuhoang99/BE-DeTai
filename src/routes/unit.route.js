const express = require("express");
const router = express.Router();
const UnitController = require("../controllers/unit.controller");

router.get("/", UnitController.findAll);
router.post("/create", UnitController.create);
// router.put("/:id", UserController.update);
router.delete("/:id", UnitController.delete);
router.post("/upload", UnitController.upload);
router.post("/delete-image", UnitController.deleteImage);

module.exports = router;
