
const { LibAuthenticationMiddleware } = require("../../libs/authentications");
const {
  LibValidationExceptionMiddleware,
  LibValidationFields,
  LibValidationsMiddleware,
} = require("../../libs/validations");
const { BarangValidator } = require("./validators");

/**
 * If you want to remove JWT authentication, 
 * you can remove 'LibAuthenticationMiddleware' from your middleware list.
 */

const BarangMiddlewareList = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const BarangMiddlewareDetail = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

const BarangMiddlewareCreate = LibValidationsMiddleware([
  LibAuthenticationMiddleware,
  LibValidationFields.CharField({ field: "nama" }),
  LibValidationFields.CharField({ field: "merk" }),
  LibValidationFields.CharField({ field: "qty"}),
  LibValidationFields.NumberField({
    field: "hargajual",
    minLength:1,
    maxLength:20000000,
    customs:[BarangValidator]
  }),
  LibValidationFields.NumberField({
    minLength:1,
    maxLength:20000000,
    field: "hargabeli",
   
  }),
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

const BarangMiddlewareUpdate = LibValidationsMiddleware(
  LibAuthenticationMiddleware,
  /** Your middleware here (validations, sanitizing, etc..) */
  LibValidationFields.CharField({ field: "nama",required:true}),
  LibValidationFields.CharField({ field: "merk",required:false}),
  LibValidationFields.CharField({ field: "qty",required:false}),
  
  
  LibValidationExceptionMiddleware,
);

const BarangMiddlewareDelete = LibValidationsMiddleware(
  LibAuthenticationMiddleware
);

module.exports = {
  BarangMiddlewareCreate,
  BarangMiddlewareUpdate,
  BarangMiddlewareDetail,
  BarangMiddlewareList,
  BarangMiddlewareDelete,
};
  