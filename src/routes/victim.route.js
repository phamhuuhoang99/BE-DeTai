const express = require("express");
const router = express.Router();
const VictimController = require("../controllers/victim.controller");

// router.get("/", VictimController.findAll);
router.post("/create", VictimController.create);
// router.get("/:id", UserController.findOne);
// router.put("/:id", UserController.update);
// router.delete("/:id", UserController.delete);

module.exports = router;
