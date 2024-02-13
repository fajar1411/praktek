
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const {  Pemasok } = require("./models");
const { BarangFilter, PemasokFilter } = require("./filters");


const PemasokControllerList =  async (req, res) => {
  try {
  
    const results = Pemasok.find(PemasokFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerCreate = async (req, res) => {
  try {
    // Your code here
    const datapemasok = await Pemasok.create( req.cleanedData)
    res.status(201).json({
     message:"create Pemasok berhasil",
     data: datapemasok
    });

  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}


const PemasokControllerDetail = async (req, res) => {
  try {
    // Your code here
   let resultspemasok = await Pemasok.findOne({_id: req.params.id});

    if (!resultspemasok) {
      throw {status: 404, message:"Not found"}
    }
    res.status(200).json({
      message:"berhasil menampilkan data pemasok",
      data: resultspemasok
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerUpdate = async (req, res) => {
  try {
    
    let resultspemasok = await Pemasok.findOne({_id: req.params.id});
    if (!resultspemasok) {
      throw {status: 404, message:"Not found"}
    }
    let updatedata = await Pemasok.findByIdAndUpdate( resultspemasok._id,req.cleanedData)
    let newdataupdate =  await Pemasok.findOne({_id: updatedata._id});
    res.status(200).json({
      message:"berhasil update data",
      data: newdataupdate
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDelete = async (req, res) => {
  try {
    let resultspemasok = await Pemasok.findOne({_id: req.params.id});
    if (!resultspemasok) {
      throw {status: 404, message:"Not found"}
    }
     await Pemasok.findByIdAndDelete(resultspemasok._id)

     let allpemasok = await Pemasok.find()
     res.status(200).json({
      message:"berhasil menghapus data",
      data:allpemasok
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PemasokControllerList,
  PemasokControllerCreate,
  PemasokControllerDetail,
  PemasokControllerUpdate,
  PemasokControllerDelete
};
