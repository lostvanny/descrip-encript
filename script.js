const btncod = document.querySelector("#btnCod");
btncod.addEventListener("click", function() {

    let text = document.querySelector("#textBox");
    text = text.value

    let changeWordCod = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };

    let textNew = text.replace(/a|e|i|o|u/g, function (ocorrencia) {

        return changeWordCod[ocorrencia];

    });

    document.getElementById("resultBox").innerText = textNew;

    document.getElementById("textBox").value = '';
});

const btndec = document.querySelector("#btnDec");
btndec.addEventListener("click", function() {

    let text = document.querySelector("#textBox");
    text = text.value

    let changeWordDec = { ai: "a", enter: "e", imes: "i", ober: "o", ufat: "u" };

    let textNew = text.replace(/ai|enter|imes|ober|ufat/g, function (ocorrencia) {

        return changeWordDec[ocorrencia];

    });

    document.getElementById("resultBox").innerText = textNew;

    document.getElementById("textBox").value = '';

});

const btncopy = document.querySelector("#btnCopy");
btncopy.addEventListener("click", function() {

    let textRecorded = document.getElementById("resultBox").textContent;
    navigator.clipboard.writeText(textRecorded);
    console.log(textRecorded)
});
