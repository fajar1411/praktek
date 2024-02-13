
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

const TerimaMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const TerimaMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const TerimaMiddlewareCreate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
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
   *    customs: [TerimaValidatorField3Unique],
   *  }),
   *  LibValidationFields.CharField({
   *    field: "field4",
   *    sanitizers: [TerimaSanitizerField4ToHash],
   *  }),
   *  ...
   */
  // LibValidationFields.CharField({
  //       field: "field3",
  //       customs: [TerimaValidatorField3Unique],
  //    }),

  LibValidationFields.CharField({ field: "nomor",required: true }),

  // LibValidationFields.CharField({ field: "pelanggan" }),
  LibValidationFields.CharField({ field: "pelanggan.nama" }),
  LibValidationFields.CharField({ field: "pelanggan.alamat" }),
  LibValidationFields.CharField({ field: "pelanggan.telepon" }),
  LibValidationFields.NumberField({ field: "berat" }),

  LibValidationFields.NumberField({ field: "uangmuka",required: true }),

  LibValidationFields.ArrayField({ field: "items" }),
  LibValidationExceptionMiddleware,
);

const TerimaMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationExceptionMiddleware,
);

const TerimaMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  TerimaMiddlewareCreate,
  TerimaMiddlewareUpdate,
  TerimaMiddlewareDetail,
  TerimaMiddlewareList,
  TerimaMiddlewareDelete,
};
  