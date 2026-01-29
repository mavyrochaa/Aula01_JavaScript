function converterMoeda() {

    const reais = document.getElementById("reais").value;
    const cotacao = document.getElementById("cotacao").value;

    const dolar = parseFloat(reais) / parseFloat(cotacao);

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Valor em Dólar: $" + dolar;
}
