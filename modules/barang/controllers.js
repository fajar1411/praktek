
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");
const { Barang } = require("./models");
const { BarangFilter } = require("./filters");


const BarangControllerList =  async (req, res) => {
  try {
  
    const results = Barang.find(BarangFilter(req));
    return LibPaginationResponse(req, res, results);
    
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerCreate = async (req, res) => {
  try {
    // Your code here
    const databarang = await Barang.create( req.cleanedData)
    res.status(201).json({
     message:"create barang berhasil",
     data: databarang
    });

  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}


const BarangControllerDetail = async (req, res) => {
  try {
    // Your code here
   let resultsbarang = await Barang.findOne({_id: req.params.id});

    if (!resultsbarang) {
      throw {status: 404, message:"Not found"}
    }
    res.status(200).json({
      message:"berhasil menampilkan data barang",
      data: resultsbarang
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerUpdate = async (req, res) => {
  try {
    
    let resultsbarang = await Barang.findOne({_id: req.params.id});
    if (!resultsbarang) {
      throw {status: 404, message:"Not found"}
    }
    let updatedata = await Barang.findByIdAndUpdate(resultsbarang._id,req.cleanedData)
    let newdataupdate =  await Barang.findOne({_id: updatedata._id});
    res.status(200).json({
      message:"berhasil update data",
      data: newdataupdate
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerDelete = async (req, res) => {
  try {
    let resultsbarang = await Barang.findOne({_id: req.params.id});
    if (!resultsbarang) {
      throw {status: 404, message:"Not found"}
    }
     await Barang.findByIdAndDelete(resultsbarang._id)

     let allbarang = await Barang.find()
     res.status(200).json({
      message:"berhasil menghapus data",
      data:allbarang
    })
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  BarangControllerList,
  BarangControllerCreate,
  BarangControllerDetail,
  BarangControllerUpdate,
  BarangControllerDelete,
};
