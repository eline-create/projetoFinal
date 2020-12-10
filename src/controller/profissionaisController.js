const profissionais = require("../models/profissionais");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const { response, request } = require("../app");

// const authorization = (request, response) => {
//   const authHeader = request.get("authorization");
//   if (!authHeader) {
//     return response.status(401).send("Você está autorizado?");
//   }
//   const token = authHeader.split(" ")[1];

//   jwt.verify(token, SECRET, function (error) {
//     if (error) {
//       return response.status(403).send("Você necessita de um token de acesso!");
//     }
//   });
// };

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
  //authorization();
  profissionais.countDocuments((err, count) => {
    if (err) {
      return response.status(500).send({ message: err.message });
    } else {
      const profissional = new profissionais(request.body);
      profissional.id = count + 1;
      profissional.save((error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        } else {
          return response.status(201).send(profissional.toJSON());
        }
      });
    }
  });
};

const updateById = (request, response) => {
  //authorization();
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
  //authorization();
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

const selectById = (request, response) => {
  const id = request.params.id;
  profissionais.find({ id }, (error, profissional) => {
    if (profissionais.length > 0) {
      profissionais.findOne({ id }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        }
        return response.status(200).send(profissional);
      });
    } else {
      return response.status(200).send({
        message: "Não há profissional cadastrado com este id",
      });
    }
  });
};

const selectByName = (request, response) => {
  const name = request.params.name;
  profissionais.find({ name }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.findOne({ name }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        }
        return response.status(200).send(profissional);
      });
    } else {
      return response.status(200).send({
        message: "Não há profissional cadastrado com este nome",
      });
    }
  });
};

const selectBySubarea = (request, response) => {
  const subarea = request.params.subarea;
  profissionais.find(
    { subarea: subarea },
    { name: 1, subarea: 1, city: 1, _id: 0 },
    (error, profissional) => {
      if (profissional.length > 0) {
        profissionais.findOne({ subarea }, (error) => {
          if (error) {
            return response.status(500).send({
              message: error.message,
            });
          }
          return response.status(200).send(profissional);
        });
      } else {
        return response.status(200).send({
          message: "Não há profissional cadastrado nesta subarea",
        });
      }
    }
  );
};

const selectByAddress = (request, response) => {
  const city = request.params.city;
  profissionais.find({ city: city }, (error, profissional) => {
    if (profissional.length > 0) {
      profissionais.findOne({ city }, (error) => {
        if (error) {
          return response.status(500).send({
            message: error.message,
          });
        }
        return response.status(200).send(profissional);
      });
    } else {
      return response.status(200).send({
        message:
          "Não há profissional cadastrado atendendo na cidade pesquisada",
      });
    }
  });
};

const filterAdm = (request, response) => {

}

module.exports = {
  selectAll,
  create,
  updateById,
  deleteById,
  selectById,
  selectByName,
  selectBySubarea,
  selectByAddress,
  filterAdm
};
