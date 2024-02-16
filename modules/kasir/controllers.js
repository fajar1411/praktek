
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Kas } = require("../kas/models");
const { KasirMiddlewareCreate } = require("./middlewares");
const { Kasir } = require("./models");
const { KasirFilter } = require("./filters");
const { KasirServiceCreate } = require("./service");

const KasirControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);
   
    const results = Kasir.find(KasirFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasirControllerCreate = async (req, res) => {
  try {
    req.cleanedData = KasirServiceCreate(req).cleanedData

    console.log(  req.cleanedData)
    const datakasir = await Kasir.create( req.cleanedData)
    res.status(201).json({
     message:"create  data berhasil",
    
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasirControllerDetail = async (req, res) => {
  try {
    // Your code here
    const kasir= await Kasir.findOne({_id:req.params.id})

    res.status(200).json({
      message: "berhasil menampilkan barang",
      data: kasir
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasirControllerUpdate = async (req, res) => {
  try {
    // Your code here
    const kasir = await Kasir.findOne({_id:req.params.id})
    if (!kasir){
      throw {status:404, message:"not found"}
    }
    if (kasir.ispaid !== false){
      throw {status:403, message:"not access"}
    }

    const result = await Kasir.findOneAndUpdate(
      {_id:req.params.id},
      {ispaid:true},
      {new:true})

      return  res.status(200).json({
      message:"update  data berhasil",
      data: result
     });

  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const KasirControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "KasirControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  KasirControllerList,
  KasirControllerCreate,
  KasirControllerDetail,
  KasirControllerUpdate,
  KasirControllerDelete,
};
