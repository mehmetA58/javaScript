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