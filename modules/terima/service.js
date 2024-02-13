const { TerimaRepositoriesHitungTotal, TerimaRepositoriesHitungsisa, TerimarepositoriesSetSisadantotal } = require("./repositories")

const TerimaServiceCreate = (req)=>{
   
 const total = TerimaRepositoriesHitungTotal( req.cleanedData.berat)
 const sisa =TerimaRepositoriesHitungsisa(total, req.cleanedData.uangmuka)
 return  TerimarepositoriesSetSisadantotal(sisa,total,req)

}   
module.exports = {
    TerimaServiceCreate,
}