const express = require("express");
const router = express.Router();
const SymbolController = require("../controllers/symbol.controller");

router.get("/", SymbolController.findAll);
router.post("/create", SymbolController.create);
// router.put("/:id", UserController.update);
router.delete("/:id", SymbolController.delete);
router.post("/upload", SymbolController.upload);
router.post("/delete-image", SymbolController.deleteImage);

module.exports = router;
