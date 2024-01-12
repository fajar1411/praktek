
/**
 * These naming rules follow the following pattern:
 * 
 *  PembelianValidator<YourValidationPurpose>
 * 
 * For example:
 *  const PembelianValidationEmailExist = (value, { req }) => {}
 **/

const PembelianValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  PembelianValidator,
};
