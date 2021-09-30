const express = require("express");
const router = express.Router();
const PersonnelController = require("../controllers/personnel.controller");

router.get("/", PersonnelController.findAll);
router.post("/create", PersonnelController.create);
// router.put("/:id", UserController.update);
router.delete("/:id", PersonnelController.delete);

module.exports = router;
