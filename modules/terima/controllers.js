
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Terima } = require("./models");
const { TerimaFilter } = require("./filters");
const { TerimaServiceCreate } = require("./service");
const { KasServiceCreateFromTerima } = require("../kas/services");

const TerimaControllerList =  async (req, res) => {
  try {
 
    const results = Terima.find(TerimaFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TerimaControllerCreate = async (req, res) => {
  try {
    // Your code here
    req.cleanedData = TerimaServiceCreate(req)
    const dataterima = await Terima.create( req.cleanedData)
    res.status(201).json({
     message:"create  data berhasil",
     data: dataterima 
    });

  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}
const TerimaControllerSelesai = async(req, res)=>{
  try {
    const terima = await Terima.findOne({_id:req.params.id})
    if (!terima){
      throw {status:404, message:"not found"}
    }
    if (terima.status !== "diproses"){
      throw {status:403, message:"not access"}
    }

    const result = await Terima.findOneAndUpdate(
      {_id:req.params.id},
      {status:"selesai"},
      {new:true})
    return  res.status(200).json({
      message:"update  data berhasil",
      data: result
     });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}
const TerimaControllerDiambil = async(req,res)=>{
  try {
    const terima = await Terima.findOne({_id:req.params.id})
    if (!terima){
      throw {status:404, message:"not found"}
    }
    if (terima.status !== "selesai"){
      throw {status:403, message:"not access"}
    }

    const result = await Terima.findOneAndUpdate(
      {_id:req.params.id},
      {status:"diambil"},
      {new:true})
    
      KasServiceCreateFromTerima(result, req);
    return  res.status(200).json({
      message:"update  data berhasil",
      data: result
     });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}
const TerimaControllerDetail = async (req, res) => {
  try {
    // Your code here

    const terima = await Terima.findOne({_id:req.params.id})

    res.status(200).json({
      message: "berhasil menampilkan barang",
      data: terima
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TerimaControllerUpdate = async (req, res) => {
  try {
   throw {status:403 , message:"not allowed"}
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const TerimaControllerDelete = async (req, res) => {
  try {
    // Your code here
    throw {status:403 , message:"not allowed"}
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  TerimaControllerList,
  TerimaControllerCreate,
  TerimaControllerDetail,
  TerimaControllerUpdate,
  TerimaControllerDelete,
  TerimaControllerSelesai,
  TerimaControllerDiambil,

};
