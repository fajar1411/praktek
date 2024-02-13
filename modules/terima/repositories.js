const TerimaRepositoriesHitungTotal =(berat)=>{
    const harga = 10000

   return  berat * harga
}

const TerimaRepositoriesHitungsisa=(total , uangmuka)=>{
    if (uangmuka >= total){
        return 0
    }
    return total-uangmuka
}

const TerimarepositoriesSetSisadantotal=(sisa,total,req)=>{
    req.cleanedData.sisa = sisa
    req.cleanedData.total = total
    req.cleanedData.email = req.user.email
    return req.cleanedData
}

module.exports ={
    TerimaRepositoriesHitungTotal ,
    TerimaRepositoriesHitungsisa,
    TerimarepositoriesSetSisadantotal
}
    

