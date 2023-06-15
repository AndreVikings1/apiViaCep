const elementoChute = document.getElementById('chute')
window.SpeechRecognition =   window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();


recognition.addEventListener('result', onSpeack )

function onSpeack(event) {
  const chute = event.results[0][0].transcript
  exibirChute(chute)
  verificaValor(chute)

}

function exibirChute(chute) {
    elementoChute.innerHTML = `<div>Você disse: </div>
    <span class="box">${chute}</span> 
    `
}

recognition.addEventListener('end', ()=>  recognition.start())