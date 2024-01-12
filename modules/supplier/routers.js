
const { LibHTTPRouter } = require("../../libs/https");
const {
  SupplierControllerList,
  SupplierControllerCreate,
  SupplierControllerDetail,
  SupplierControllerUpdate,
  SupplierControllerDelete
} = require("./controllers");
const {
  SupplierMiddlewareCreate,
  SupplierMiddlewareUpdate,
  SupplierMiddlewareList,
  SupplierMiddlewareDetail,
  SupplierMiddlewareDelete
} = require("./middlewares");

const SupplierRouter = LibHTTPRouter();

SupplierRouter.get("", SupplierMiddlewareList, SupplierControllerList);
SupplierRouter.post("", SupplierMiddlewareCreate, SupplierControllerCreate);
SupplierRouter.get("/:id", SupplierMiddlewareDetail, SupplierControllerDetail);
SupplierRouter.put("/:id", SupplierMiddlewareUpdate, SupplierControllerUpdate);
SupplierRouter.delete("/:id", SupplierMiddlewareDelete, SupplierControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { SupplierRouter } = require("./modules/supplier/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "supplier", SupplierRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  SupplierRouter,
};  
