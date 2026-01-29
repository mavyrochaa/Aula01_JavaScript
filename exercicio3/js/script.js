function converterTemp() {

    const celsius = document.getElementById("celsius").value;

    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Resultado: " + fahrenheit + " °F";
}

