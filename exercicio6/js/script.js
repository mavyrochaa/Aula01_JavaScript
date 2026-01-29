function converterMoeda() {

    let reais = document.getElementById("reais").value;
    let cotacao = document.getElementById("cotacao").value;

    let dolar = Number(reais) / Number(cotacao);

    document.getElementById("resultado").innerText =
        "Valor em Dólar: $" + dolar;
}
