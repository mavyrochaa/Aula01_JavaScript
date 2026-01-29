function calcularMedia() {

    const n1 = document.getElementById("nota1").value;
    const n2 = document.getElementById("nota2").value;
    const n3 = document.getElementById("nota3").value;

    const media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

    const resultado = document.getElementById("resultado");
    resultado.textContent = "A média final é: " + media;
}
