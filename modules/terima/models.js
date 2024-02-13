
const mongoose = require("mongoose");

const TerimaSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nomor: { type: String, unique: true, required: true },
    tanggal: { type: Date, default: Date.now },
    pelanggan:{
      nama: { type: String, required: true },
      alamat:  { type: String,required: true },
      telepon: { type: String,required: true }
    },
    berat: { type:Number,default: 0 },
    total: { type:Number,default:0 },
    uangmuka: { type:Number ,required: true,default:0 },
    sisa:{ type:Number ,required: true,default:0 },
    status:{type: String, enum:["diproses","Selesai"],default:"diproses"},
    email: {type: String},
    items: [
      {
        nama: {type: String}
      }
    ],
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Terima = mongoose.model("Terima", TerimaSchema);

module.exports = {
  Terima,
};
    
