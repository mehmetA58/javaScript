const maaslar = [4000, 5000, 3500, 2850, 5000, 7500];

const liste = document.querySelector(".liste-ul");
for (let i in maaslar) {
    liste.innerHTML = liste.innerHTML + `<li>${maaslar[i]}</li>`;
}