const express = require("express");
const router = express.Router();
const controller = require("../controller/profissionaisController");

router.post('/', controller.create);
router.get('/', controller.readAll);
router.put('/:id', controller.updateById);
router.delete('/:id', controller.deleteById);

module.exports = router;
