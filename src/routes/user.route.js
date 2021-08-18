const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get("/", UserController.index);
router.post("/create", UserController.create);

module.exports = router;
