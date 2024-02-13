
/**
 * These naming rules follow the following pattern:
 * 
 *  BarangValidator<YourValidationPurpose>
 * 
 * For example:
 *  const BarangValidationEmailExist = (value, { req }) => {}
 **/

const BarangValidator = (value, { req }) => {
    if (value < req.body.hargabeli) {

      console.log(req.body.hargabeli)
      throw new Error("harga jual lebih besar dari harga beli")
      
    }
    
  return value;
};

module.exports = {
  BarangValidator,
};
