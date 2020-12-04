const jwt = require("jsonwebtoken");
const administradoras = require("../models/administradoras");
const SECRET = process.env.SECRET;
const bcrypt = require("bcrypt");

const createAdministradora = (req, res) => {
  console.log(req.body)
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const administradora = new administradoras(req.body);

  administradora.save(function (err) {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(201).send(administradora.toJSON());
  });
};

const getAllAdministradoras = (req, res) => {
  const authHeader = req.get("authorization");
  if (!authHeader) {
    return res.status(401).send("Você está autorizado?");
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, function (err) {
    if (err) {
      return res.status(403).send("Não foi possível");
    }
  });
  administradoras.find((err, administradoras) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }
    return res.status(200).send(administradoras);
  });
};

const loginAdministradora = (req, res) => {
  administradoras.findOne({ email: req.body.email }, (err, administradora) => {
    if (!administradora) {
      return res
        .status(404)
        .send(`E-mail da Administradora ${req.body.email} não encontrado`);
    }
    const senhaValida = bcrypt.compareSync(
      req.body.senha,
      administradora.senha
    );
    if (!senhaValida) {
      return res.status(403).send("Senha Incorreta");
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

module.exports = {
  getAllAdministradoras,
  createAdministradora,
  loginAdministradora,
};
