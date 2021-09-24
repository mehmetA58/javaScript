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

const tekCift1 = function(sayi) {
    return sayi % 2 == 0 ? "CİFT" : "TEK";
};

console.log(tekCift1(5));