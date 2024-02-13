
const mongoose = require("mongoose");

const PemasokSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, required: true },
    alamat: { type: String},
    contact:  { type: String},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pemasok = mongoose.model("pemasok", PemasokSchema );

module.exports = {
  Pemasok,
};
    
