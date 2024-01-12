
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const PembelianControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "PembelianControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PembelianControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "PembelianControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PembelianControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PembelianControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PembelianControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "PembelianControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PembelianControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "PembelianControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PembelianControllerList,
  PembelianControllerCreate,
  PembelianControllerDetail,
  PembelianControllerUpdate,
  PembelianControllerDelete,
};
