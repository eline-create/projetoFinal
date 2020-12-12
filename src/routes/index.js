const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title:
      "Negritude em Ação! - Aqui você pode encontrar profissionais negres de diversas áreas em um só lugar!",
    date: "12/12/2020",
    version: "1.0.0",
  });
});

module.exports = router;
