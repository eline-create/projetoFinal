const profissionais = require("../models/profissionais");
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

const create = (req, res) => {
  const profissional = new profissionais(req.body);
  console.log(req.body);
  profissional.save(function (err) {
    if (err) {
      return res.status(500).send({ message: err.message });
    } else return res.status(201).send(profissional);
  });
};

const readAll = (req, res) => {
  profissionais.find(function (err, profissional) {
    if (err) {
      return res.status(500).send({ message: err.message });
    } else return res.status(200).send(profissional);
  });
};

const updateById = (req, res) => {
  const id = req.params.id;
  profissionais.find({ id }, { $set: req.body }, function (err) {
    if(err) {
      return res.status(500).send( { message: err.message });
    }
     return res.status(200).send({ message: 'Registro alterado com sucesso', status: "Updated"});
  })
}

const deleteById = (req, res) => {
  const _id = req.params.id;
  profissionais.find({ _id }, function (err, profissionais) {
    if (profissionais.length > 0) {
      profissionais.deleteMany({ _id }, function (err) {
        if (err) {
          return res
            .status(500)
            .send({ message: err.message, status: "Falha no código!" });
        }
        return res
          .status(200)
          .send({
            message: "Profissional removido com sucesso!",
            status: "Sucesso!",
          });
      });
    } else {
      return res
        .status(200)
        .send({
          message: "Não há profissionais para excluir",
          status: "Banco de dados vazio",
        });
    }
  });
};

module.exports = {
  readAll,
  create,
  updateById,
  deleteById,
};
