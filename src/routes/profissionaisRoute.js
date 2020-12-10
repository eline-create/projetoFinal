const express = require("express");
const router = express.Router();
const controller = require("../controller/profissionaisController");

router.post("/", controller.create);
router.get("/", controller.selectAll);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);
router.get("/:id", controller.selectById);
router.get("/name/:name", controller.selectByName);
router.get("/subarea/:subarea", controller.selectBySubarea);
router.get("/city/:city", controller.selectByAddress);
router.get("/admId/:admId", controller.filterAdm);

module.exports = router;
