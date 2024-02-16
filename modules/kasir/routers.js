
const { LibHTTPRouter } = require("../../libs/https");
const {
  KasirControllerList,
  KasirControllerCreate,
  KasirControllerDetail,
  KasirControllerUpdate,
  KasirControllerDelete
} = require("./controllers");
const {
  KasirMiddlewareCreate,
  KasirMiddlewareUpdate,
  KasirMiddlewareList,
  KasirMiddlewareDetail,
  KasirMiddlewareDelete
} = require("./middlewares");

const KasirRouter = LibHTTPRouter();

KasirRouter.get("", KasirMiddlewareList, KasirControllerList);
KasirRouter.post("", KasirMiddlewareCreate, KasirControllerCreate);
KasirRouter.get("/:id", KasirMiddlewareDetail, KasirControllerDetail);
KasirRouter.put("/:id/ispaids", KasirMiddlewareDetail, KasirControllerUpdate);
KasirRouter.delete("/:id", KasirMiddlewareDelete, KasirControllerDelete);

/**
 * You need to register your application in the index.js file 
 * so that it can be accessed and used as an API, as in the following example:
 *  
 *  // ...
 *  const { KasirRouter } = require("./modules/kasir/routers");
 *  
 *  // ...
 *  LibModuleRegister(app, "kasir", KasirRouter);
 * 
 * Copy and paste the registration code above inside your index.js file.
 * Run the application and try accessing your API with a client tool such as postman.
 */

module.exports = {
  KasirRouter,
};  
