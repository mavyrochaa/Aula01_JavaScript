function alterarTexto(){
    const texto = document.getElementById('texto');
    texto.textContent = "Ola mundo, texto alterado";
}

function calcular(){
    //entrada
    const valor1 = document.getElementById('vl1').value;
    const valor2 = document.getElementById('vl2').value;

    //processamento
    let soma = parseInt(valor1) + parseInt(valor2);

    //saida
    alert(soma);
}

function nome() {
    // entrada
    const nome = document.getElementById('nome').value;
    // processamento
    let mensagem = "Seja bem-vindo " + nome;
    // saída
    alert(mensagem);
}