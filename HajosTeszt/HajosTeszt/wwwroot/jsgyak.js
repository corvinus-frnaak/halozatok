var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}
function pascalizator(n, k) {
    return faktoriálisR(n) / (faktoriálisR(k) * faktoriálisR(n - k));
}

window.onload = function () {
    for (var sor = 0; sor < 10; sor++) {
        var újsor = document.createElement("div");
        document.getElementById("pascal").appendChild(újsor);
        újsor.classList.add("sor");
        újsor.id = "sor" + sor;
        //új div osztálylistájához add hozzá a "sor"-t
        //új div-et add hozzá a "pascal" gyermekeihez
        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var újoszlop = document.createElement("div");
            document.getElementById("sor"+ sor).appendChild(újoszlop);
            újoszlop.classList.add("elem");
            újoszlop.id = sor + "." + oszlop + "." + "elem";
            document.getElementById(sor + "." + oszlop + "." + "elem").innerText = `${pascalizator(sor, oszlop)}`;

        }
        //document.getElementById("sor" + sor).style.marginLeft = (100 - sor * 13).toString() + "px";
    }
}