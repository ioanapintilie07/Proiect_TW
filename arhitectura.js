function creare(tag, text) {
    let elnou = document.createElement(tag);
    let textnou = document.createTextNode(text);
    elnou.appendChild(textnou);
    return elnou;
}

function modificare_sir(sir_init, sir, x) {
    let string1, string2, string3;
    string1 = sir.slice(0, x + 1);
    string2 = sir.slice(sir.length - x - 1, sir.length);
    // string3 = "";
    // for (let i = 1; i <= sir.length - x - 2; ++i)
    //     string3 += "\xa0";
    sir = string1 + string2
    return sir;
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

    var element = document.getElementById("titlu_art");
    element.style.cursor = "pointer";

    element.onclick = function () {
        stil = window.getComputedStyle(element, null);
        element.style.color = "black";
        element.style.fontSize = "35px";
        element.style.fontStyle = "italic";
        element.style.textDecoration = "underline";
        element.style.textDecorationColor = "white";
    }
    element.addEventListener("click", handle1, true);

    function handle1() {
        element.onclick = function () {
            element.style = stil;
            element.style.textDecoration = "underline";
            element.style.textDecorationColor = "black";
        }
    }

    var imagine = document.getElementById("calendar");
    imagine.style.cursor = "pointer";
    imagine.onclick = function () {
        window.setTimeout(f, 3000);

        function f() {
            imagine.src = "calendar2.jpg";
        }
    }
    let titlu = document.getElementById("header");
    let sir = titlu.innerText;
    var sir_init = sir;
    var i = 0;
    aparitie_titlu();

    function aparitie_titlu() {
        var sterge, element;
        if (i <= sir.length / 2 - 1) {
            sterge = document.getElementsByTagName("h1");
            titlu.removeChild(sterge[0]);
            element = creare("h1", modificare_sir(sir, sir, i));
            titlu.appendChild(element);
            i++;
        } else {
            sterge = document.getElementsByTagName("h1");
            titlu.removeChild(sterge[0]);
            element = creare("h1", sir_init);
            titlu.appendChild(element);
        }
        setTimeout(aparitie_titlu, 100);
    }

    var footer = document.getElementsByClassName("footer");
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
    animatie_footer();

    function animatie_footer() {
        var elem = document.getElementById("animate");
        var pozitie = 0;
        var interval = setInterval(avanseaza, 5);

        function avanseaza() {
            if (pozitie === 380) {
                clearInterval(interval);
            } else {
                pozitie++;
                elem.style.left = pozitie + "px";
            }
        }
    }

    let timp_limita = document.getElementById("timp_limita");
    let buton = document.getElementById("am_raspuns");
    let apasat = false, expirat = false;
    buton.onclick = function () {
        apasat = true;
        if(expirat === true)
            timp_limita.innerHTML += "Ai greșit!";
        else
            timp_limita.innerHTML += "Felicitări!";
    }

    timp_limita.style.color = "black";
    timp_limita.onclick = function () {
        setTimeout(f, 3000);
        function f() {
            let textbox = document.getElementsByTagName("input")[0];
            expirat = true;
            if(apasat === false) {
                textbox.disabled = true;
                alert("Timpul a expirat!");
            }
        }
    }
    timp_limita.style.paddingLeft = "40px";

    let ascunde = document.getElementById("ascunde");
    let de_ascuns = document.getElementsByTagName("img");
    let am_ascuns = false, l = de_ascuns.length;
    ascunde.onclick = function () {
        if (am_ascuns === false) {
            am_ascuns = true;
            for (let i = 0; i < l; ++i) {
                de_ascuns[i].style.visibility = "hidden";
            }
            ascunde.innerHTML = "Afiseaza imaginile";
        } else {
            am_ascuns = false;
            for (let i = 0; i < l; ++i) {
                de_ascuns[i].style.visibility = "visible";
            }
            ascunde.innerHTML = "Ascunde imaginile";
        }
    }
}
