function dragElement(element) {
    var pozitie1 = 0, pozitie2 = 0, pozitie3 = 0, pozitie4 = 0;
    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pozitie3 = e.clientX;
        pozitie4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pozitie1 = pozitie3 - e.clientX;
        pozitie2 = pozitie4 - e.clientY;
        pozitie3 = e.clientX;
        pozitie4 = e.clientY;
        element.style.top = (element.offsetTop - pozitie2) + "px";
        element.style.left = (element.offsetLeft - pozitie1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


window.onload = function () {
    let meniu = document.getElementsByTagName("a");
    let acasa = meniu[0], arhitectura = meniu[1], muzica = meniu[2], quiz = meniu[3];
    acasa.onclick = function () {
        window.close();
        window.open("acasa.html");
    }
    arhitectura.onclick = function () {
        window.close();
        window.open("arhitectura.html");
    }
    arhitectura.onmouseover = function () {
        arhitectura.style.cursor = "pointer";
    }
    muzica.onclick = function () {
        window.close();
        window.open("muzica.html");
    }
    muzica.onmouseover = function () {
        muzica.style.cursor = "pointer";
    }
    quiz.onclick = function () {
        window.close();
        window.open("quiz.html");
    }
    quiz.onmouseover = function () {
        quiz.style.cursor = "pointer";
    }

    const footer = document.getElementsByClassName("footer");
    var data = new Date;
    var luni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    var zile = [" ", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
    footer[0].innerHTML += zile[data.getDay()];
    footer[0].innerHTML += ", ";
    footer[0].innerHTML += data.getDate();
    footer[0].innerHTML += " ";
    footer[0].innerHTML += luni[data.getMonth()];
    footer[0].innerHTML += " ";
    footer[0].innerHTML += data.getFullYear();

    let articol = document.getElementsByTagName("article")[0];
    let mic = document.getElementById("font_mic");
    let mediu = document.getElementById("font_mediu");
    let mare = document.getElementById("font_mare");
    let font_original = articol.style.fontSize;
    mic.onclick = function () {
        window.localStorage.clear();
        window.localStorage.setItem("mic", "true");
        articol.style.fontSize = "10px";
        if (mediu.checked === true)
            mediu.checked = false;
        if (mare.checked === true)
            mare.checked = false;
    }
    mediu.onclick = function () {
        window.localStorage.clear();
        window.localStorage.setItem("mediu", "true");
        articol.style.fontSize = "14px";
        if (mic.checked === true)
            mic.checked = false;
        if (mare.checked === true)
            mare.checked = false;
    }
    mare.onclick = function () {
        window.localStorage.clear();
        window.localStorage.setItem("mare", "true");
        articol.style.fontSize = "18px";
        if (mediu.checked === true)
            mediu.checked = false;
        if (mic.checked === true)
            mic.checked = false;
    }
    if (window.localStorage.getItem("mic") === "true") {
        mic.checked = true;
        articol.style.fontSize = "10px";
    }
    if (window.localStorage.getItem("mediu") === "true") {
        mediu.checked = true;
        articol.style.fontSize = "14px";
    }
    if (window.localStorage.getItem("mare") === "true") {
        mare.checked = true;
        articol.style.fontSize = "18px";
    }
    let reset = document.getElementById("reset");
    reset.onclick = function (event) {
        window.localStorage.clear();
        articol.style.fontSize = font_original;
        if (mediu.checked === true)
            mediu.checked = false;
        if (mic.checked === true)
            mic.checked = false;
        if (mare.checked === true)
            mare.checked = false;
        reset.style.backgroundColor = "mediumaquamarine";
        event.stopPropagation();
    }
    let element = document.getElementById("selectie_font");
    dragElement(element);
    element.onclick = function () {
        element.style.backgroundColor = "mediumaquamarine";
    }

    let text_aici = document.getElementById("adauga");
    let timer;
    let cuvinte = text_aici.innerHTML.split(" ");
    text_aici.innerHTML = "";
    let i = 0, l = cuvinte.length;
    apel();
    function apel() {
        timer = setInterval(afisare_treptata, 300, i);
    }
    function afisare_treptata() {
        if(l > i) {
            text_aici.innerHTML += cuvinte[i] + " ";
            i++;
        }
        else
            clearInterval(timer);
    }

    let timer2;
    let text_aici2 = document.getElementById("titludr");
    let cuvinte2 = text_aici2.innerHTML.split(" ");
    text_aici2.innerHTML = "";
    let j = 0, l2 = cuvinte2.length;
    apel2();
    function apel2() {
        timer2 = setInterval(afisare_treptata2, 300, j);
    }
    function afisare_treptata2() {
        if(l2 > j) {
            text_aici2.innerHTML += cuvinte2[j] + " ";
            j++;
        }
        else
            clearInterval(timer2);
    }

    let timer3;
    let text_aici3 = document.getElementsByTagName("h1")[0];
    let cuvinte3 = text_aici3.innerHTML.split(" ");
    text_aici3.innerHTML = "";
    let k = 0, l3 = cuvinte3.length;
    apel3();
    function apel3() {
        timer3 = setInterval(afisare_treptata3, 300, k);
    }
    function afisare_treptata3() {
        if(l3 > k) {
            text_aici3.innerHTML += cuvinte3[k] + " ";
            k++;
        }
        else
            clearInterval(timer3);
    }
}