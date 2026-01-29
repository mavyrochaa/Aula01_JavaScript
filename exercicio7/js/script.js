function calcularArea() {

    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    const area = parseFloat(base) * parseFloat(altura);

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Área do retângulo: " + area;
}
