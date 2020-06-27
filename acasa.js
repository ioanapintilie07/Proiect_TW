function functie_tabel() {
    var checkBox = document.getElementById("check");
    var text = document.getElementById("tabel");
    if (checkBox.checked === true) {
        text.style.visibility = "visible";
    } else {
        text.style.visibility = "hidden";
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
    const luni = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    const zile = [" ", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata", "Duminica"];
    footer[0].innerHTML += zile[data.getDay()];
    footer[0].innerHTML += ", ";
    footer[0].innerHTML += data.getDate();
    footer[0].innerHTML += " ";
    footer[0].innerHTML += luni[data.getMonth()];
    footer[0].innerHTML += " ";
    footer[0].innerHTML += data.getFullYear();
    let color_array = ["red", "green", "black", "blue", "yellow", "white"];
    let lista = document.getElementsByTagName("td");
    for (let i = 0; i < lista.length; i += 2) {
        lista[i].className = "culori";
        lista[i].onmouseover = function () {
            lista[i].style.backgroundColor = color_array[i / 2];
            lista[i].style.color = color_array[i / 2];
        }
    }
    let header = document.querySelectorAll(".header")[0];
    document.body.onkeypress = function (event) {
        switch (event.key) {
            case "i":
                header.style.fontStyle = "italic";
                break;
            case "u":
                header.style.textDecoration = "underline";
                break;
            default:
                return;
        }
    }
    let body = document.getElementsByTagName("body")[0];
    body.onclick = function (event) {
        if (event.target.tagName === "P") {
            if (event.target.style.fontStyle === "italic")
                event.target.style.fontStyle = "normal";
            else
                event.target.style.fontStyle = "italic";
        }
    }
}