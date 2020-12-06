const express = require("express");
const router = express.Router();
const controller = require("../controller/administradorasController");

router.get("/", controller.getAllAdministradoras);
router.post("/", controller.createAdministradora);
router.post("/login", controller.loginAdministradora);
// router.post(":id/profissionais", controller.createProfissional);//Para um Administradora cadastrar um profissional
router.patch("/:id", controller.updateAdministradora);
router.delete("/:id", controller.deleteAdministradora);

module.exports = router;
