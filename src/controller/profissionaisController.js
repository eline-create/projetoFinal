const profissionais = require("../models/profissionais");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const { response, request } = require("../app");

const selectAll = (request, response) => {
  profissionais.find((error, profissional) => {
    if (error) {
      return response.status(500).send({ message: error.message });
    } else {
      return response.status(200).send(profissional);
    }
  });
};

const create = (request, response) => {
  const profissional = new profissionais(request.body);
  console.log(request.body);
  profissional.save((error) => {
    if (error) {
      return response.status(500).send({
        message: error.message,
      });
    } else {
      return response.status(201).send(profissional.toJSON());
    }
  });
};

const updateById = (request, response) => {
  const id = request.params.id;

  profissionais.find({ id }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.updateMany({ id }, { $set: request.body }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        }
        return response.status(200).send({
          message: "Registro alterado com sucesso",
        });
      });
    } else {
      return response
        .status(200)
        .send({ message: "Não há registro com esse id para ser atualizado" });
    }
  });
};

const deleteById = (request, response) => {
  const id = request.params.id;
  profissionais.find({ id }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.deleteMany({ id }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        }
        return response.status(200).send({
          message: "Profissional removido com sucesso!",
        });
      });
    } else {
      return response.status(200).send({
        message: "Não há profissional com este id para ser excluído",
      });
    }
  });
};

const selectById = (request, responde) => {

};

const selectByName = (request, response) => {};

const selectByAreaSubarea = (request, response) => {
  profissionais.find({
    nome: true,
    area: true,
    subarea: true,
    _id: false
  }, ((error, profissionais) => {
    return response.status(200).send(profissionais)
  })
}
}

const selectByAddress = (request, response) => {};

const replaceOne = (request, response) => {};



module.exports = {
  selectAll,
  create,
  updateById,
  deleteById,
  selectById,
  selectByName,
  selectByAreaSubarea,
  selectByAddress,
  replaceOne
};
