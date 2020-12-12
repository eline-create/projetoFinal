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
  const passwordHash = bcrypt.hashSync(request.body.password, 10);
  request.body.password = passwordHash;
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
        return response.status(201).send({ message: "Administradora criada com sucesso!" });        
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
      if (error) {
        return response.status(500).send({ message: error.message});
      }
      if (!administradora) {
        return response
          .status(404)
          .send(
            `E-mail de administradora ${request.body.email} não encontrado`
          ); 
      }
      const validPassword = bcrypt.compareSync(
        request.body.password,
        administradora.password
      );
      if (!validPassword) {
        return response.status(403).send("Senha inválida");
      }
      const token = jwt.sign({ email: request.body.email }, SECRET);
      return response.status(200).send(token);
    }
  );
};

const updateAdministradora = (request, response) => {
  authorization(request, response);
  const id = request.params.id;
    administradoras.find({ id }, (error, administradora) => {
    if (administradora.length > 0) {
      administradoras.updateOne({ id }, { $set: request.body }, (error) => {
        if (error) {
          return response.status(500).send({ message: error.message });
        }
        return response
          .status(200)
          .send({ message: "Regitro alterado com sucesso!" });
      });
    } else {
      return response
        .status(200)
        .send({ message: "O id solicitado não está registrado!" });
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
            message: "Administradora removida",
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
