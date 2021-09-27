const sw1 = document.getElementById("switch1");
sw1.onclick = () => {
    if (sw1.firstChild.className == "switcher") {
        document.body.className = "lightmode";
        sw1.innerHTML = `<button class="darker"><i class="fas fa-moon"></i></button>`;
    }
};