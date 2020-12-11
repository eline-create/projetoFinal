const administradoras = require("../models/administradoras");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const bcrypt = require("bcrypt");

const authorization = (request, response) => {
  const authHeader = request.get("authorization");
  if (!authHeader) {
    return response.status(401).send("Você está autorizado?");
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET, function (error) {
    if (error) {
      return response.status(403).send("Você necessita de um token de acesso!");
    }
  });
};

const createAdministradora = (request, response) => {
  const passWithHash = bcrypt.hashSync(request.body.password, 10);
  request.body.password = passWithHash;
  administradoras.countDocuments((err, count) => {
    if (err) {
      return response.status(500).send({ message: err.message });
    } else {
      const administradora = new administradoras(request.body);
      administradora.id = count + 1;
      administradora.save((error) => {
        if (error) {
          return response.status(500).send({ message: error.message });
        }
        return response.status(201).send(administradora.toJSON());
      });
    }
  });
};

const getAllAdministradoras = (request, response) => {
  authorization(request, response);
  administradoras.find((error, administradoras) => {
    if (error) {
      return response.status(500).send({ message: error.message });
    }
    return response.status(200).send(administradoras);
  });
};

const loginAdministradora = (request, response) => {
  administradoras.findOne(
    { email: request.body.email },
    (error, administradora) => {
      if (!administradora) {
        return response
          .status(404)
          .send(
            `E-mail da Administradora ${request.body.email} não encontrado`
          );
      }
      const senhaValida = bcrypt.compareSync(
        request.body.senha,
        administradora.senha
      );
      if (!senhaValida) {
        return response.status(403).send("Senha Incorreta");
      }
      const token = jwt.sign({ email: request.body.email }, SECRET);
      return response.status(200).send(token);
    }
  );
};

const updateAdministradora = (request, response) => {
  authorization(request, response);
  const id = request.params.id;
  const updateAdmin = request.body;
  updateAdmin.password = bcrypt.hashSync(request.body.password, 10);
  administradoras.find({ id }, (error, administradora) => {
    if (administradora.length > 0) {
      administradoras.updateOne({ id }, { $set: request.body }, (error) => {
        if (error) {
          return response.status(500).send({ message: error.message });
        }
        return response
          .status(200)
          .send({ message: "Registro alterado com sucesso" });
      });
    } else {
      return response
        .status(200)
        .send({ message: "Esse id não possui registro para ser atualizado" });
    }
  });
};












const deleteAdministradora = (request, response) => {
  authorization(request, response);
  const id = request.params.id;
  administradoras.find({ id }, (error, administradora) => {
    if (administradora.length > 0) {
      administradoras.deleteMany({ id }, (error) => {
        if (error) {
          response.status(500).send({
            message: error.message,
          });
        } else
          response.status(200).send({
            message: "Removed Admin",
          });
      });
    }
  });
};

module.exports = {
  createAdministradora,
  getAllAdministradoras,
  loginAdministradora,
  updateAdministradora,
  deleteAdministradora,
};
