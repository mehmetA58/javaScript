//==============================
//        GETELEMENTID
const parargaf = document.getElementById("para").style;
parargaf.backgroundColor = "black";
parargaf.color = "white";
parargaf.fontSize = "30px";
const buton = document.getElementById("btn");
buton.style.widt = "100px";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.textContent = "ARA"; //h1'in ici tikla idi ara olarak degistirdik bu method ile yazisini degistirebiliriz
//**********GETELEMENTBYTAGNAME** */
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";
//**GETELEMENTBYCLASSNAME** */
const baslik = document.getElementsByClassName("h1");
baslik[0].style.textAlign = "center";
//*********QUERYSELECTOR*************** */
//! en cok lullanilan cagirma yolu
document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI😁";
document.querySelector("#govde").style.backgroundImage =
    "linear-gradient(green,blue,pink)";
//*****EVENT */
//(onmouseover,)
const h1 = document.querySelector(".h1");

h1.onmouseover = function() {
    h.style.color = "red";
    h.style.backgroundColor = "white";
};
h1.onmuseout = function() {
    h.style.color = "pink";
    h.style.backgroundColor = "yellow";
};
document.querySelector(".bir").onclick = function() {
    document.querySelector(".bir").src = "./img/logo2.png";
    document.querySelector(".iki").src = "./img/js_logo.png";
};