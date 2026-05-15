function hitung(r, cb){
    if(typeof r !== "number"){
        console.log("Eror var R bukan number")
        return
    }
    let phi
    if (r%7 == 0){
        phi = 22/7
    }else{
        phi = 3.14
    }
    cb(r, phi)

}
function luas(r, phi){
    const luas = phi * r * r
    console.log("Luas Lingkaran : ",luas)
}
function keliling(r, phi){
    const kel =2 * phi * r
    console.log("Keliling Lingkaran : ",kel)
}

hitung(34, luas)
hitung(21, keliling)