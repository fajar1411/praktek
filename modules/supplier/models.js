
const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Supplier = mongoose.model("Supplier", SupplierSchema);

module.exports = {
  Supplier,
};
    
