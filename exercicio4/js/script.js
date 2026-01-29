function calcularMedia() {

    let n1 = document.getElementById("nota1").value;
    let n2 = document.getElementById("nota2").value;
    let n3 = document.getElementById("nota3").value;

    let media = (Number(n1) + Number(n2) + Number(n3)) / 3;

    document.getElementById("resultado").innerText =
        "A média final é: " + media;
}
