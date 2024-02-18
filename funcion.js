function Encriptar() {
    let texto = document.getElementById("escribirTexto").value.toLowerCase();
    let resultado = document.getElementById("Desencriptar");
    let txtEncrip = texto.replace(/e/g, "enter")
                              .replace(/o/g, "ober")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/u/g, "ufat");

    resultado.innerHTML = txtEncrip;
}

function Desencriptar() {
    let texto = document.getElementById("escribirTexto").value.toLowerCase();
    let resultado = document.getElementById("Desencriptar");
    let txtEncrip = texto.replace(/enter/g, "e")
                              .replace(/ober/g, "o")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ufat/g, "u");

    resultado.innerHTML = txtEncrip;
}
