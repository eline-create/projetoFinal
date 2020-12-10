const mongoose = require("mongoose");

const profissionaisSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    description: { type: String },
    area: { type: String },
    subarea: { type: String },
    service: { type: String },
    city: { type: String },
    contacts: { type: Array },
    adminId: { type: Number, required:true }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("profissionais", profissionaisSchema);
