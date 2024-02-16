const { KasRepositories } = require("./repositories")

const KasirServiceCreate = (req)=>{
  
    const kasrepo = KasRepositories(req)
    // const total = TerimaRepositoriesHitungTotal( req.cleanedData.berat)
    // const sisa =TerimaRepositoriesHitungsisa(total, req.cleanedData.uangmuka)
    // return  TerimarepositoriesSetSisadantotal(sisa,total,req)
   return kasrepo
   }   
   module.exports = {
    KasirServiceCreate,
   }