
const mongoose = require("mongoose");

const KasirSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nomor:{ type: String},
    nomorMeja:{ type: Number, default:0},
    created: { type: Date, default: Date.now },
    nama:{ type: String},
    total: { type: Number, default:0},
    ispaid: { type: Boolean, default:false},
    items: [
      {
        nama:{ type: String},
        qty: { type: Number, default:0},
        harga: { type: Number,default:0},
        subtotal:  { type: Number,default:0},
      }
    ],

  },
  { versionKey: false }
);

const Kasir = mongoose.model("Kasir", KasirSchema);

module.exports = {
  Kasir,
};
    
