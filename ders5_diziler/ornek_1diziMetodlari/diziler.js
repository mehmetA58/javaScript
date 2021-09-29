const yaslar = [5, 10, 28, 42];
const isimler = [
    "Hakan",
    "Alaaddin",
    "Furkan",
    "Dayanch",
    20,
    40,
    true,
    23.5,
    yaslar,
    "Ayse",
];
console.log(isimler);
console.log(isimler[3]);
isimler[3] = "Sadi";
console.log(isimler[3]);
// const degistirilemiyordu ama non-primitive' lerde degistirilebiliyor. Dizi bir adres gosterir isimler gibi,
//o yüzden primitive' den farkli
isimler[isimler.length - 2] = false;
console.log(isimler);
console.log(isimler[isimler.length - 1][1]);

let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
const browser = document.querySelector(".baslik");

//pop() en son elemanı siler.
//meyveler.pop();
console.log(meyveler.pop());

//shift() 0.index elemani siler ve döndürür.
//-->meyveler.shift();
console.log(meyveler.shift());

//push()dizinin sonuna ekler
meyveler.push("Cilek", "Karpuz");

//unshift() 0.index'e eleman ekler
meyveler.unshift("Ayva");
//reverse() dizinin tamamini ters çevirir
//console.log(meyveler.reverse());

//sort() diziyi natural order olarak siralar
meyveler.sort();

//splice()
meyveler.splice(1, 0, "erik");
meyveler.splice(4, 1, "uzum");

//***DİZİ ERİŞİM METODLARI(diziyi değiştirmez) */
const sayilar = [3, 4, 5, 2, "2", "üc", "bes", 5, 2, 7];

browser.textContent = sayilar;
console.log(sayilar);
console.log(sayilar.includes("5")); //false
console.log(sayilar.includes(5)); //True

//indexOf()ilk eşleşen index'i döndürür.
console.log(sayilar.indexOf(2)); //3
console.log(sayilar.lastIndexOf(5)); //7
console.log(sayilar.indexOf(2, 4)); //8
console.log(sayilar.indexOf(5, 3)); //7