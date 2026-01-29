function calcularArea() {

    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    let area = Number(base) * Number(altura);

    document.getElementById("resultado").innerText =
        "Área do retângulo: " + area;
}
