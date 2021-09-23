//==Karar Yapıları===

//===IF-ELSE=========

const s1 = prompt("birinci sayi");
const islem = prompt("islem");
const s2 = prompt("ikinci sayi");
let sonuc = 0;
if (islem == "+") {
    sonuc = s1 + s2;
} else if (islem == "-") {
    sonuc = s1 - s2;
} else if (islem == "/") {
    sonuc = s1 / s2;
} else if (islem == "*") {
    sonuc = s1 * s2;
}
console.log(sonuc);