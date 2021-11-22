const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

const passport = require("passport");
require("../middlewares/passport");

router.get("/", UserController.findAll);
router.get(
  "/secret",
  passport.authenticate("jwt", { session: false }),
  UserController.secret
);
router.post("/logout", UserController.logout);
router.post("/create", UserController.create);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  UserController.signIn
);
router.get("/:id", UserController.findOne);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router;
