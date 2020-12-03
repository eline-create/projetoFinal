const express = require("express");
const router = express.Router();
const controller = require("../controller/administradorasController");

router.get("/", controller.getAllAdministradoras);
router.post("/", controller.createAdministradora);
router.post("/login", controller.loginAdministradora);

module.exports = router;
