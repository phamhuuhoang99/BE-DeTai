const express = require("express");
const router = express.Router();
const MissionController = require("../controllers/mission.controller");

router.get("/", MissionController.findAll);
router.post("/create", MissionController.create);
// router.get("/:id", UserController.findOne);
// router.put("/:id", UserController.update);
router.delete("/:id", MissionController.delete);

module.exports = router;
