//============================================
//KONSOL
console.log("Hello javascript");
//alert("dikkat");
console.warn("bu bir uyarıdır");
console.error("bu bir hatadır :D");
//prompt("adiniz giriniz");

//===değişken tanımlama===========
//======VAR=======================
// ? Ancak, modern JS var keyword’unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.
var isim = "ipek";
console.log(typeof isim);
isim = 3.14;
console.log(typeof isim);

//======================================
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword’leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitiveler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.
const piSayisi = 3.14;
//piSayisi = 3;
const isim1 = "Osman";
console.log(typeof isim1);
//const number;hatalı yazım
//number=4;

//======================================LET
// ? Eğerki değişkenimizin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
fiyat = 10;
console.log(typeof fiyat);
fiyat = "Erdem";
console.log(fiyat);

//string tanımlamak için 3 farklı karakter kullanibi
let name1 = "Allattin";
let name2 = "Faruk";
let name3 = `Oguzhan`;
console.log(name3);

//Aritmetik operatolar
const kola = 5;
const cips = 6;
const ekmek = 2;
console.log(kola + cips + ekmek);
console.log("toplam fiyat", kola + cips + ekmek);

const ad = "can";
const soyad = "canan";
console.log(ad + soyad);

const s1 = 7;
let s2 = "7";
console.log(s1 + s2);

console.log("benim adım " + ad + " " + "benim yaşım " + s1);
//!Template literal====
console.log(`benim adım ${ad} yasım ${s1}`);
//üs alma
const taban = 2;
const us = 3;
console.log(taban ** us); //2*2*2

//mod alma
const sayi = 123;
const birler = 123 % 10;
console.log(birler);
//karsilaştırma ooperatörleri...
const s3 = 5;
const s4 = "5";
console.log(s3 == s4); //true
console.log(s3 === s4); //false

//todo TİP Değişimleri
const para = "100";
console.log(para + 15); //10015
console.log(Number(para) + 15); //115

const sayi5 = 56;
console.log(String(sayi5) + sayi5); //5656
console.log(typeof sayi5); //number