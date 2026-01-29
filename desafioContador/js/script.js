let contador = 0;

function aumentar() {
    contador = contador + 1;
    document.querySelector(".numero").innerText = contador;
    //getElement nao estava funcionando fiz com ele e nao alterava os numeros ai fui testando
}

function diminuir() {
    contador = contador - 1;
    document.querySelector(".numero").innerText = contador;
}

function resetar() {
    contador = 0;
    document.querySelector(".numero").innerText = contador;
}