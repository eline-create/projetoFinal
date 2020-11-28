const profissionais = require("../models/profissionais");

const create = (req, res) => {
  const profissional = new profissionais(req.body);
  profissional.save(function (err) {
    if (err) {
      return res.status(500).send({ message: err.message });
    } else return res.status(201).send(profissional);
  });
};

const readAll = (req, res) => {
    profissionais.find( function (err, profissional) {
        if(err) {
            return res.status(500).send({ message: err.message })
        } else
        return res.status(200).send(profissional);
    })
};




const updateById = (req, res) => {};

const deleteById = (req, res) => {};

module.exports = {
  readAll,
  create,
  updateById,
  deleteById,
};
