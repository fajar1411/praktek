
const { LibHTTPRouter } = require("../../libs/https");
const {
  
  PemasokControllerCreate, PemasokControllerList, PemasokControllerDetail, PemasokControllerUpdate, PemasokControllerDelete,
 
  
} = require("./controllers");
const {
  PemasokMiddlewareCreate,
   PemasokMiddlewareList,PemasokMiddlewareDetail,
    PemasokMiddlewareUpdate, 
   PemasokMiddlewareDelete
  
} = require("./middlewares");

const PemasokRouter = LibHTTPRouter();

PemasokRouter.get("", PemasokMiddlewareList,PemasokControllerList);
PemasokRouter.post("", PemasokMiddlewareCreate,PemasokControllerCreate);
PemasokRouter.get("/:id", PemasokMiddlewareDetail, PemasokControllerDetail);
PemasokRouter.put("/:id",PemasokMiddlewareUpdate, PemasokControllerUpdate);
PemasokRouter.delete("/:id", PemasokMiddlewareDelete, PemasokControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { BarangRouter } = require("./modules/barang/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "barang", BarangRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  PemasokRouter,
};  
