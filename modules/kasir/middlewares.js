
const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");

/**
 * If you want to remove JWT authentication, 
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const KasirMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KasirMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const KasirMiddlewareCreate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationFields.NumberField({ field: "nomorMeja" }),
  LibValidationFields.CharField({ field: "nama" }),
   LibValidationFields.ArrayField({ field: "items" }),
  LibValidationFields.CharField({ field: "items.*.nama" }),
  LibValidationFields.NumberField({ field: "items.*.harga" }),
  LibValidationFields.NumberField({ field: "items.*.qty" }),
  
  /**
   * "LibValidationExceptionMiddleware" is suitable for validating data sent by the client in body. 
   * If you have your own handler, you can replace it.
   * 
   * For example:
   *  ...
   *  LibValidationFields.CharField({ field: "field1" }),
   *  LibValidationFields.CharField({ field: "field2" }),
   *  LibValidationFields.CharField({
   *    field: "field3",
   *    customs: [KasirValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [KasirSanitizerField4ToHash],
   *  }),
   *  ...
   */

  LibValidationExceptionMiddleware,
);

const KasirMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const KasirMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  KasirMiddlewareCreate,
  KasirMiddlewareUpdate,
  KasirMiddlewareDetail,
  KasirMiddlewareList,
  KasirMiddlewareDelete,
};
  