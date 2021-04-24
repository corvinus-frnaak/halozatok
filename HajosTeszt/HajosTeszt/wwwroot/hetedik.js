var kérdések;
var kérdésSz = 0;
var szinezve = false;
window.onload = function () {
    letöltés(); 
    document.getElementById("vissza").onclick = function () {

        vissza();
        

    }
    document.getElementById("előre").onclick = function () {
        szinezve = true;
        elore();
        
    }
    document.getElementById("válasz1").onclick = function () {
        szinezés("válasz1");
        
    }
    document.getElementById("válasz2").onclick = function () {
        szinezés("válasz2");

    }
    document.getElementById("válasz3").onclick = function () {
        szinezés("válasz3");

    }
};
/*function letöltés() {
    fetch('/questions/1')
        .then(resp => resp.json())
        .then(dat => letöltésBef(dat));

}
function letöltésBef(data) {
    console.log("Sikeres letöltés!")
    kérdések = data
    kérdésMegjelenítés(kérdésSz);
}*/
function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    
var kérdésMegjelenítés = function (kérdésSz) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdésSz].questionText;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSz].image
    document.getElementById("kép1").alt = "kép"
    document.getElementById("válasz1").innerText = kérdések[kérdésSz].answer1
    document.getElementById("válasz2").innerText = kérdések[kérdésSz].answer2
    document.getElementById("válasz3").innerText = kérdések[kérdésSz].answer3

}

function vissza() {
    kérdésSz--
    if (kérdésSz >= 0) {

        kérdésMegjelenítés(kérdésSz)
    }
    else {
        kérdésSz = kérdések.length - 1
    }
    letöltés();
}
function elore() {
    kérdésSz++
    if (kérdésSz <= kérdések.length -1) {

        kérdésMegjelenítés(kérdésSz)
    }
    else {
        kérdésSz = 0
    }
    letöltés();
}
function szinezés(elem) {
    document.getElementById(elem).style.backgroundColor = "lightblue";
    if (szinezve == false) {
        szinezve = true
    }
    else {
        document.getElementById("válasz2").style.backgroundColor = "white";
        document.getElementById("válasz3").style.backgroundColor = "white";
        document.getElementById("válasz1").style.backgroundColor = "white";
        szinezve = false;
    }
}