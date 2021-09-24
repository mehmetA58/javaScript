//==============================
// //Fonksiyonlar
// //==========================
// //!1.yöntem:declaration
// function yazdirAd() {
//     console.log("Hakan");
// }
// //fonksiyonun çağrılmasi
// yazdirAd(); //hakan
// //ornek:kalvyeden girilen sayinin tek mi çift mi?
// const sayiniz = prompt("Sayi giriniz");

// function tekCift(sayiniz) {
//     return sayiniz % 2 == 0 ? `${sayimiz}çifttir` : `${sayimiz} tektir`;
// }
// //!2.Yöntem:Function Expression
// //örnek1
// const tekCift1 = function(sayi) {
//     return sayi % 2 == 0 ? "CİFT" : "TEK";
// };

// console.log(tekCift1(5));

// ornek2 verilen 3 sayidan en büyük sayıyı bulma
// let buyukBul = function(a, b, c) {
//     let enBuyuk;
//     if (a > b && a > c) {
//         enBuyuk = a;
//     } else if (b > c && b > a) {
//         enBuyuk = b;
//     } else {
//         enBuyuk = c;
//     }
//     return enBuyuk;
// };
// console.log(buyukBul(5, 8, 9));

// //!3.Yöntem:Function ARROW(ok)
// const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);

// console.log(ciftMi(7));
//ornek3 üstalma
const taban = prompt("taban gir");
const us = prompt("us giriniz");

const ustAl = (taban, us) => taban ** us;

console.log(ustAl(taban, us));