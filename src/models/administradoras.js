const mongoose =  require("mongoose");

const administradorasSchema =  new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    senha: { type: String}
 },
 {
     versionKey: false
 });

 module.exports = mongoose.model("administradoras", administradorasSchema);