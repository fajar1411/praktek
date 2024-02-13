
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

const PemasokMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PemasokMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const PemasokMiddlewareCreate = LibValidationsMiddleware([
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "alamat" }),
  LibValidationFields.CharField({ field: "contact"}),
  /** Your middleware here (validations, sanitizing, etc..) */

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
   *    customs: [BarangValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [BarangSanitizerField4ToHash],
   *  }),
   *  ...
   */

  LibValidationExceptionMiddleware,
]);

const PemasokMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "alamat" }),
  LibValidationFields.CharField({ field: "contact"}),
  LibValidationExceptionMiddleware,
);

const PemasokMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  PemasokMiddlewareCreate ,
  PemasokMiddlewareUpdate,
  PemasokMiddlewareDetail,
  PemasokMiddlewareList,
  PemasokMiddlewareDelete
};
  