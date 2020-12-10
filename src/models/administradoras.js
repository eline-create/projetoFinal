const mongoose = require("mongoose");

const administradorasSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String },
    email: { type: String },
    senha: { type: String },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("administradoras", administradorasSchema);
