const express = require("express");
const router = express.Router();
const PlanController = require("../controllers/plan.controller");

// router.get("/", PlanController.findAll);
router.post("/create", PlanController.create);
router.get("/:id", PlanController.findOne);
// router.put("/:id", UserController.update);
// router.delete("/:id", PlanController.delete);

module.exports = router;
