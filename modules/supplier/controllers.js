
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const SupplierControllerList =  async (req, res) => {
  try {
    // Your code here

    // example:
    // const results = YourModel.find(YourFilter(req));
    // return LibPaginationResponse(req, res, results);


    res.status(201).json({
      controller: "SupplierControllerList",
      query: req.query
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const SupplierControllerCreate = async (req, res) => {
  try {
    // Your code here
    res.status(201).json({
      controller: "SupplierControllerCreate",
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const SupplierControllerDetail = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "SupplierControllerDetail",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const SupplierControllerUpdate = async (req, res) => {
  try {
    // Your code here
    res.status(200).json({
      controller: "SupplierControllerUpdate",
      params: req.params,
      body: req.body
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const SupplierControllerDelete = async (req, res) => {
  try {
    // Your code here
    res.status(204).json({
      controller: "SupplierControllerDelete",
      params: req.params
    });
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  SupplierControllerList,
  SupplierControllerCreate,
  SupplierControllerDetail,
  SupplierControllerUpdate,
  SupplierControllerDelete,
};
