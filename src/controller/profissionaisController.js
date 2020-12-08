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
          message: "Profissional removido com sucesso!"
        });
      });
    } else {
      return response.status(200).send({
        message: "Não há profissional com este id para ser excluído",
      });
    }
  });
};

//Subrotas

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

  //TESTAR A PARTIR DAQUI

const selectByName = (request, response) => {
  const name = request.params.name;
    profissionais.find({ name }, (error, profissional) => {
      if (profissional.length > 0) {
        profissionais.findOne({ name }, {area:true, contacts: true, _id: false }, (error) => {
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
  // const profissionais = request.params.subarea
  // profissionais.find({ subarea: true },
  // {
  //   nome: true,
  //   area: true,
  //   subarea: true,
  //   _id: false
  // }, ((error, profissional) => {
  //   if(error) {
  //     return response.status(500).send({
  //       message: error.message,
  //     });
  //   } else {
  //     return response.status(200).send({message: `${req.body} é o que você procura` })
  //   }    
  // })
  };


const selectByAddress = (request, response) => {
  
};

const replaceOne = (request, response) => {
    // const id = request.params.id;
    // try {
    //   const profissionalAModificar = profissionais.find((profissional) => profissional.id === id);
    //   const profissionalAtualizado = req.body;
    //   const index = profissional.indexOf(profissionalAModificar);
    //   profissional.splice(index, 1, profissionalAtualizado);
    //   {
    //     if (error) {
    //       return response.status(424).send({
    //         message: error.message
    //       });
    //     }
    //     console.log("Registro Atualizado!")
    //   }
    //   return response.status(200).send(profissionais)
  
    //   }catch (err) {
    //   return response.status(424).send({
    //     message: err,
    //   });
    // }
  };




module.exports = {
  selectAll,
  create,
  updateById,
  deleteById,
  selectById,
  selectByName,
  selectBySubarea,
  selectByAddress,
  replaceOne
};
