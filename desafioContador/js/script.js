function aumentar() {
    const valor = document.getElementById("numero");
    valor.textContent = parseInt(valor.textContent) + 1;
}

function diminuir() {
    const valor = document.getElementById("numero");
    valor.textContent = parseInt(valor.textContent) - 1;
}

function resetar() {
    const valor = document.getElementById("numero");
    valor.textContent = 0;
}
