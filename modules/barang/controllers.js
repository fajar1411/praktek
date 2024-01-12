
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const BarangControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "BarangControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "BarangControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "BarangControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "BarangControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const BarangControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "BarangControllerDelete",
      params: req.params
    });
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
