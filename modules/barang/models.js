
const mongoose = require("mongoose");

const BarangSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, required: true },
    merk: { type: String},
    qty:  { type: Number},
    hargajual:{ type: Number,default:0},
    hargabeli:{ type: Number,default:0},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Barang = mongoose.model("Barang", BarangSchema);

module.exports = {
  Barang,
};
    
