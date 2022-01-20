// Identifier

/**
 * indentifier adalah penamaan variable, fungsi ataupun parameter
 * karakter pertamanya hanya bisa huruf a-z atau A-Z dan simbol undescore atau dollar
 * tidak boleh menggunakan angka di depan
 * tidak boleh menggunakan bahasa yang sudah ada di js
*/

//Statement
/**
 * statement = suatu pernyataan js yang paling dasar dan memiliki tugas tertentu
*/

// let name = "hello world" //statement dasar / biasa
// console.log(name);

// expression
/**
 * statement merupakan ekspereso kode js yang berfungsi untuk menghasilkan nilai tertentu
*/

// let first =1 ;
// let second = 2
// let result = first + second
// console.log(result)

// if(result>1){
//     console.log("maka dia akan"+ result + "cm")
// }

//scope
/**
 * cakupan kode agar bisa di mengakses atau membatasi
*/

//global scope
/**
 * global scope merupakan cakupan di seluruh file
*/

// var a = "halo rekam rekan"
// function first() {
//     console.log(a)
//     if(true){
//         a = "ini ada yg di paling dalam"
//         console.log(a)
//     }
// }
// first()

// function second() {
//     a = "nilainya sudah di ubah" 
//     console.log(a)
// }

// second()

// const a = "mobil"
// function kendaraan(params) {
//     console.log(a)
//     if(true){
//         const b = "motor"
//         console.log(b)
//     }
//     console.log(a)
// }
// kendaraan()


var mobil = "Mclaren"
function kendaraan() {    
    const motor = "Beat"
    if(true){
        let sepeda = "BMX"
        console.log(sepeda)
    }
    console.log(motor)
}
kendaraan()

console.log(mobil)


