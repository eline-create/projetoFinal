const mongoose = require("mongoose");

const profissionaisSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    about: { type: String },
    occupationArea: { type: String },
    subarea: { type: String },
    serviceType: { type: String },
    local: { type: String },
    contacts: { type: Array },
  },
  {
    versionKey: false,
  }
);

const profissionaisModel = mongoose.model("profissionais", profissionaisSchema);

module.exports = {
  profissionaisModel,
  profissionaisSchema,
};
