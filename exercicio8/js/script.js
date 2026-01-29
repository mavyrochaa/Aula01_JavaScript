function calcularIdade() {

    let nascimento = document.getElementById("nascimento").value;
    let atual = document.getElementById("atual").value;

    let idade = Number(atual) - Number(nascimento);

    document.getElementById("resultado").innerText =
        "Você tem ou fará " + idade + " anos neste ano.";
}
