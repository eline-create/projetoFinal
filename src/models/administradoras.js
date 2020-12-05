const mongoose = require("mongoose");
const { profissionaisSchema } = require("./profissionais");

const administradorasSchema = new mongoose.Schema(
  {
    id: { type : Number },
    name: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false,
  }
);

const administradorasModel = mongoose.model(
  "administradoras",
  administradorasSchema
);

module.exports = {
  administradorasModel,
  administradorasSchema,
};
