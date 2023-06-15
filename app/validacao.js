function verificaValor(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML +=  `<div> Valor Invalido</div>`
        return
    } else {
        
    } if ( numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div> Fale um numero entre: ${menorValor}
         e ${maiorValor} </div>`
         return
    } if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você Acertou</h2>
            <h3> O numero secreto era ${numeroSecreto} </h3>
            <button id="btn" class="btn-jogar">Jogar Novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML = ` 
        <div>O numero secreto é menor <i class="fa-solid fa-down"></i></div>
        `
    } 
    else if (numero < numeroSecreto) {
        elementoChute.innerHTML = ` 
        <div>O numero secreto é maior <i class="fa-solid fa-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id === "btn-jogar")  {
        window.location.reload()
    } 
})