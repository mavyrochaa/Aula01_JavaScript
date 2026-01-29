function calcularIdade() {

    const nascimento = document.getElementById("nascimento").value;
    const atual = document.getElementById("atual").value;

    const idade = parseInt(atual) - parseInt(nascimento);

    const resultado = document.getElementById("resultado");
    resultado.textContent = "Você tem ou fará " + idade + " anos neste ano.";
}
