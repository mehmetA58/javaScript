//==============================
//Fonksiyonlar
//==========================
//!1.yöntem:declaration
function yazdirAd() {
    console.log("Hakan");
}
//fonksiyonun çağrılmasi
yazdirAd(); //hakan
//ornek:kalvyeden girilen sayinin tek mi çift mi?
const sayiniz = prompt("Sayi giriniz");

function tekCift(sayiniz) {
    return sayiniz % 2 == 0 ? `${sayimiz}çifttir` : `${sayimiz} tektir`;
}
//!2.Yöntem:Function Expression
//örnek1
const tekCift1 = function(sayi) {
    return sayi % 2 == 0 ? "CİFT" : "TEK";
};

console.log(tekCift1(5));

// ornek2 verilen 3 sayidan en büyük sayıyı bulma
let buyukBul = function(a, b, c) {
    let enBuyuk;
    if (a > b && a > c) {
        enBuyuk = a;
    } else if (b > c && b > a) {
        enBuyuk = b;
    } else {
        enBuyuk = c;
    }
    return enBuyuk;
};
console.log(buyukBul(5, 8, 9));