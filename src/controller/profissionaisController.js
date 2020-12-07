const profissionais = require("../models/profissionais");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const getAll = (request, response) => {
  profissionais.find((error, profissional) => {
    if (error) {
      return response.status(500).send({ message: error.message });
    } else {
      return response.status(200).send(profissional);
    }
  });
};

const create = (request, response) => {
  const profissional = new profissionais (request.body);
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
      profissionais.updateMany(
        { id },
        { $set: request.body },
        (error) => {
          if (error) {
            return response.status(500).send({
              message: error.message,
            });
          }
          return response.status(200).send({
            message: "Registro alterado com sucesso"            
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
  profissionais.find({ id }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.deleteMany({ id }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message
          });
        }
        return response.status(200).send({
          message: "Profissional removido com sucesso!"        
        });
      });
    } else {
      return response.status(200).send({
        message: "Não há profissionais com este para ser excluído"
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
