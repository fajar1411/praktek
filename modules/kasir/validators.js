
/**
 * These naming rules follow the following pattern:
 * 
 *  KasirValidator<YourValidationPurpose>
 * 
 * For example:
 *  const KasirValidationEmailExist = (value, { req }) => {}
 **/

const KasirValidator = (value, { req }) => {
  // Your validation here
  return value;
};

module.exports = {
  KasirValidator,
};
