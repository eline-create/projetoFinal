const express = require("express");
const router = express.Router();
const controller = require("../controller/profissionaisController");

router.post("/", controller.create);
router.get("/", controller.selectAll);
router.put("/:id", controller.updateById);
router.delete("/:id", controller.deleteById);
router.get("/:id", controller.selectById);
router.get("/:name", controller.selectByName);
router.get("/:area", controller.selectBySubarea);
router.get("/:address", controller.selectByAddress);
router.patch("/:id", controller.replaceOne);

module.exports = router;

