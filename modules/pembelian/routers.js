
const { LibHTTPRouter } = require("../../libs/https");
const {
  PembelianControllerList,
  PembelianControllerCreate,
  PembelianControllerDetail,
  PembelianControllerUpdate,
  PembelianControllerDelete
} = require("./controllers");
const {
  PembelianMiddlewareCreate,
  PembelianMiddlewareUpdate,
  PembelianMiddlewareList,
  PembelianMiddlewareDetail,
  PembelianMiddlewareDelete
} = require("./middlewares");

const PembelianRouter = LibHTTPRouter();

PembelianRouter.get("", PembelianMiddlewareList, PembelianControllerList);
PembelianRouter.post("", PembelianMiddlewareCreate, PembelianControllerCreate);
PembelianRouter.get("/:id", PembelianMiddlewareDetail, PembelianControllerDetail);
PembelianRouter.put("/:id", PembelianMiddlewareUpdate, PembelianControllerUpdate);
PembelianRouter.delete("/:id", PembelianMiddlewareDelete, PembelianControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { PembelianRouter } = require("./modules/pembelian/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "pembelian", PembelianRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PembelianRouter,
};  
