const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title:
      "Negrxs em Ação! - Aqui você pode encontrar o profissional negre de acordo com a especialidade e localização!",
    date: "28/11/2020",
    version: "1.0.0",
  });
});

module.exports = router;
