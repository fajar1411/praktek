
const mongoose = require("mongoose");

const PembelianSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pembelian = mongoose.model("Pembelian", PembelianSchema);

module.exports = {
  Pembelian,
};
    
