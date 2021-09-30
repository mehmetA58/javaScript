// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//  ana programa döndürecek fonksiyonu yaziniz. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.

const hayvanlar = [
    "aslan",
    "fil",
    "kartal",
    "kanarya",
    "aslan",
    "aslan",
    "timsah",
];
const ara = prompt("sayısını merak ettiğin hayvanın adını yaz");
const bulDondur = function(ara) {
    let hayvanSayısı = 0;
    for (let i in hayvanlar) {
        if (hayvanlar[i] == ara) hayvanSayısı++;
    }
    hayvanSayısı == 0 ?
        alert("aradıgınız hayvandan bulunamadı") :
        alert(`aradıgınız ${ara} hayvanından ${hayvanSayısı} tane bulunmaktadır`);
};
bulDondur(ara);

//*******************FOR OF DONGUSU******************** */
// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
//Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

let arabalar = ["BMW", "Volvo", "Mini"];
for (let i of arabalar) {
    console.log(i);
}
//****FOREACH METODU************************* */
//! foreach metodu orjinal diziyi bozmaz
let ogrenciler = ["Onur", "Hakan", "Furkan"];
ogrenciler.forEach((x) => console.log(x));

//ornek:bütün elemanların 3 katını alınız

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
console.log(rakamlar.map((x) => x * 3));
console.log(
    rakamlar.map((x, index) => `${index + 1}.elemanin 3 katı ${x * 3}`)
);
const isimler = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
];

const buyuk = isimler.map((isim) => isim.toUpperCase());
console.log(buyuk);

document.querySelector(".baslık").textContent = buyuk.join("->");

//**********FİLTER METODU*********************** */
//ornek
//fiyatlar dizisindeki 250 den büyük fiyatları yazdır.

const fiyatlar = [120, 260, 300, 322.5, 400, 768];

console.log(fiyatlar.filter((t) => t > 250)); //250'den buyuk olanlar
//-------------- ÖRNEK -------------------
// maası 4000 $’dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

console.log(maaslar.filter((a) => a < 4000).map((t) => t * 1.5));

//-------------- ÖRNEK -------------------
const adlar = [
    "Samet",
    "Hakkı",
    "Duygu",
    "Emrullah",
    "Bilal",
    "Ali",
    "Ahmet",
    "Hasan",
    "Defne",
    "Serdar",
];
//ilk harfi A olanlar
adlar.filter((x) => x.startsWith("A")).forEach((x) => console.log(x));

//*********REDUCE METODU */
//!reduce çıkış metodudur,reduceden sonra foreach çalışmaz
const maaslarım = [3000, 5000, 4000, 2000, 1000];

console.log(maaslarım.reduce((x, y) => x + y, 0));