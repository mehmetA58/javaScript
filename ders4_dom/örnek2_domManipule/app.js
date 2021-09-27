//ara butonuna tıklandığında çalan telefon çıksın,zil çalsın
let resim = document.querySelector(".resim"); //resim e ulaştım
let ring = document.querySelector(".ses"); //audio ya ulaştım
//ara butonuna ulaştım
document.querySelector(".on").onclick = function() {
    resim.src = "./img/img.gif"; //resim değiştirdim
    ring.play(); //sesi çalıştırdım play yaptım
};
document.querySelector(".off").onclick = function() {
    resim.src = "./img/telbağla.gif";
    ring.pause();
};

document.querySelector(".speak").onclick = function() {
    resim.src = "./img/telfırlat.gif";
};

//ekle butonuna basıldığında yeni bir li ekle.
const liste = document.querySelector(".liste");
document.querySelector(".ekle").onclick = function() {
    const satır = document.querySelector(".dil");

    liste.innerHTML = liste.innerHTML + `<li>${satır.value}</li>`;
    satır.value = "";
};

document.querySelector(".sil").onclick = function() {
    liste.removeChild(liste.lastChild);
};
const parag = document.querySelector(".forH1");
parag.innerHTML = `<h1>${"Programlama Dilleri"}</h1>`;

document.querySelector(".textbox").onkeyup = function() {
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if (checkbox.checked) {
        textbox.value = textbox.value.toUpperCase();
    } else {
        textbox.value = textbox.value.toLowerCase();
    }
};

resim.onmouseover = function() {
    resim.src = "./img/aslan2.jpeg";
};

resim.onmouseout = function() {
    resim.src = "./img/aslan1.jpeg";
};

document.querySelector(".dil").onkeydown = function(olay) {
    if (olay.keyCode == 13) {
        document.querySelector(".ekle").onclick();
    }
    if (olay.keyCode == 46) {
        document.querySelector(".sil").onclick();
    }
};