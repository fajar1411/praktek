// const KasRepositoriesHitungTotal =(berat)=>{
//     const harga = 10000

//    return  berat * harga
// }

// const KasRepositoriesHitungsisa=(total , uangmuka)=>{
//     if (uangmuka >= total){
//         return 0
//     }
//     return total-uangmuka
// }

// const KasepositoriesSetSisadantotal=(sisa,total,req)=>{
//     req.cleanedData.sisa = sisa
//     req.cleanedData.total = total
//     req.cleanedData.email = req.user.email
//     return req.cleanedData
// }

const KasRepositories =(req)=>{
    const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let res = ""
  
    for (let index = 0; index < karakter.length; index++) {
    
      res += karakter.charAt(Math.floor(Math.random() * karakter.length)); 
    
    }
    req.cleanedData.nomor = res

    let tempsubtotal = 0
    let temptotal = 0
      req.cleanedData.items = req.cleanedData.items.map((val)=>{
            tempsubtotal = val.harga * val.qty
            temptotal += tempsubtotal
            console.log(val.harga, val.qty,temptotal)
           
            return{
               ...val,
               subtotal:  tempsubtotal
            }
       })
       req.cleanedData.total =  temptotal
       
       return req
    }


module.exports ={
    KasRepositories,
}
    

