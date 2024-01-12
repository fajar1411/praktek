
/**
 * These naming rules follow the following pattern:
 * 
 *  SupplierValidator<YourValidationPurpose>
 * 
 * For example:
 *  const SupplierValidationEmailExist = (value, { req }) => {}
 **/

const SupplierValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  SupplierValidator,
};
