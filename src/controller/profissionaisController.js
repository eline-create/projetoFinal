const profissionais = require("../models/profissionais");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const getAll = (request, response) => {
  profissionais.profissionaisModel.find((error, profissional) => {
    if (error) {
      return response.status(500).send({ message: error.message });
    } else {
      return response.status(200).send(profissional);
    }
  });
};

const create = (request, response) => {
  const profissional = new profissionais.profissionaisModel(request.body);
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

  profissionais.profissionaisModel.find({ id }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.profissionaisModel.updateMany(
        { id },
        { $set: request.body },
        (error) => {
          if (error) {
            return response.status(500).send({
              message: error.message,
            });
          }
          return response.status(200).send({
            message: "Registro alterado com sucesso",
            status: "Updated",
          });
        }
      );
    } else {
      return response
        .status(200)
        .send({ message: "Não registros com esse id para serem atualizados" });
    }
  });
};

const deleteById = (request, response) => {
  const id = request.params.id;
  profissionais.profissionaisModel.find({ id }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.profissionaisModel.deleteMany({ id }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
            status: "Falha no código!",
          });
        }
        return response.status(200).send({
          message: "Profissional removido com sucesso!",
          status: "Sucesso!",
        });
      });
    } else {
      return response.status(200).send({
        message: "Não há profissionais para excluir",
        status: "Banco de dados vazio",
      });
    }
  });
};

module.exports = {
  getAll,
  create,
  updateById,
  deleteById,
};
