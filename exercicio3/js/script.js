function converter() {

    let celsius = document.getElementById("celsius").value;

    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("resultado").innerText =
        "Resultado: " + fahrenheit + " °F";
}
