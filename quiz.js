function creare(tag, text) {
    let elnou = document.createElement(tag);
    let textnou = document.createTextNode(text);
    elnou.appendChild(textnou);
    return elnou;
}

function view_hint(fisier) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("loc_hint").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", fisier, true);
    xhttp.send();
}

window.onload = function () {
        let meniu = document.getElementsByTagName("a");
        let acasa = meniu[0], arhitectura = meniu[1], muzica = meniu[2], quizz = meniu[3];
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
        quizz.onclick = function () {
            window.close();
            window.open("quiz.html");
        }
        quizz.onmouseover = function () {
            quizz.style.cursor = "pointer";
        }

    let quiz = document.getElementById("quiz_part");
    let intrebari = [];
    let checkboxes = [];
    let Intrebare1 = {
        enunt: "Care este tema principală în arta egipteană?",
        raspunsuri: [["religia", true], ["societatea", false]]
    }
    intrebari.push(Intrebare1);

    let Intrebare2 = {
        enunt: "Ce semnificatii erau acordate rosului?",
        raspunsuri: [["culoare negativă", true], ["vitalitate", false], ["era asociată cu zeul Seth", true]]
    }
    intrebari.push(Intrebare2);

    let Intrebare3 = {
        enunt: "Care a fost anul cuceririi romane?",
        raspunsuri: [["29 î.Hr.", false], ["35 î.Hr.", false], ["31 î.Hr.", true]]
    }
    intrebari.push(Intrebare3);

    let Intrebare4 = {
        enunt: "Din ce era altătuit un templu?",
        raspunsuri: [["portă monumentală", true], ["sanctuar", true], ["camera de jertfă", false]]

    }
    intrebari.push(Intrebare4);

    let Intrebare5 = {
        enunt: "Piramidele de la Giza au fost ridicate în timpul căror faraoni?",
        raspunsuri: [["Tutankhamon", false], ["Keops", true], ["Kefren", true]]

    }
    intrebari.push(Intrebare5);

    let Intrebare6 = {
        enunt: "În calendarul egiptean, o săptămână avea:",
        raspunsuri: [["7 zile", false], ["10 zile", true], ["5 zile", false]]

    }
    intrebari.push(Intrebare6);

    let Intrebare7 = {
        enunt: "O lună avea:",
        raspunsuri: [["4 săptămâni", false], ["3 săptămâni", true], ["30 de zile", true]]

    }
    intrebari.push(Intrebare7);

    let Intrebare8 = {
        enunt: "Prima piramidă construită a fost în numele faraonului:",
        raspunsuri: [["Djeser", true], ["Keops", false], ["Kefren", false]]

    }
    intrebari.push(Intrebare8);

    let Intrebare9 = {
        enunt: "Semnul hieroglific pentru muzică este același ca cel pentru:",
        raspunsuri: [["bucurie", true], ["bunăstare", true], ["emoție", false]]

    }
    intrebari.push(Intrebare9);

    let Intrebare10 = {
        enunt: "Primul instrument folosit era:",
        raspunsuri: [["flautul", false], ["harpa", false], ["instrument de percuție", true]]

    }
    intrebari.push(Intrebare10);

    let lista = creare("ol", "");
    for (let i = 0; i < intrebari.length; ++i) {
        let q = creare("li", intrebari[i].enunt);
        lista.appendChild(q);
        for (let j = 0; j < intrebari[i].raspunsuri.length; ++j) {
            let r = creare("p", intrebari[i].raspunsuri[j][0]);
            let buton = creare("input", "");
            buton.type = "checkbox";
            buton.style.display = "inline-block";
            r.style.display = "inline-block";
            checkboxes.push(buton);
            lista.appendChild(buton);
            lista.appendChild(r);
            if (j !== intrebari[i].raspunsuri.length - 1) r.style.paddingBottom = "20px";
            r.style.paddingRight = "10px";
        }
    }
    let autoev = creare("p", "Autoevaluează nota: ");
    let textbox = creare("input", "");
    textbox.type = "text";
    lista.appendChild(autoev);
    lista.appendChild(textbox);
    quiz.appendChild(lista);
    lista.style.lineHeight = "200%";
    lista.style.fontSize = "18px";
    let submit = creare("button", "Submit");
    quiz.appendChild(submit);
    let indice_buton = 0, scor = 0, nota = 0, textrez;
    submit.onclick = function () {
        for (let i = 0; i < checkboxes.length; ++i)
            checkboxes[i].disabled = true;
        textbox.disabled = true;
        for (let i = 0; i < intrebari.length; ++i)
            for (let j = 0; j < intrebari[i].raspunsuri.length; ++j) {
                if (intrebari[i].raspunsuri[j][1] === true && checkboxes[indice_buton].checked === true)
                    scor++;
                indice_buton++;
            }
        nota = Math.round((scor * 10) / 15)
        if (scor !== 1)
            textrez = "Ai obtinut " + scor + " puncte din 15. Nota: " + nota;
        else
            textrez = "Ai obtinut " + scor + " punct din 15. Nota: " + nota;
        let rez = creare("p", textrez);
        quiz.appendChild(rez);
        rez.style.fontSize = "25px";
    }
    let hint = document.getElementById("hint");
    let pisica = document.getElementById("pisica");
    let textp = document.getElementById("indicii_folosite");
    let hint_count, hint_number;
    let hints = [["hint.txt", false], ["hint1.txt", false], ["hint2.txt", false], ["hint3.txt", false], ["hint4.txt", false]];
    pisica.nrclick = 0;
    pisica.onmouseover = function () {
        pisica.style.cursor = "pointer";
    }
    pisica.onclick = function (event) {
        if (pisica.nrclick >= 4)
            event.preventDefault();
        else if (pisica.nrclick === 0) {
            textp.style.visibility = "visible";
            pisica.nrclick++;
            let text = "0/3";
            hint_count = creare("div", text);
            hint.appendChild(hint_count);
        } else {
            textp.style.visibility = "visible";
            pisica.nrclick++;
            let text = pisica.nrclick - 1 + "/3";
            if (pisica.nrclick !== 1) hint.removeChild(hint_count);
            hint_count = creare("div", text);
            hint.appendChild(hint_count);
            hint_number = Math.floor(Math.random() * 5);
            while(hints[hint_number][1] === true)
                hint_number = Math.floor(Math.random() * 5);
            hints[hint_number][1] = true;
            view_hint(hints[hint_number][0]);
        }
    }
    pisica.parentElement.style.lineHeight = "150%";

    let nume = prompt("Cum te numesti?");
    let text = "Salut, " + nume + "!";
    let head = document.getElementsByTagName("head")[0];
    let mesaj = creare("title", text);
    head.appendChild(mesaj);
    window.setTimeout(f, 2000);
    function f() {
        head.removeChild(mesaj);
    }
}