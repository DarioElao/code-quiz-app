const startButton = document.getElementById('start-button')
const startHeader = document.getElementById('starter')
const questionContainer = document.getElementById('question')

startButton.addEventListener('click', startGame)

function startGame(){
 startButton.classList.add('hide')
 startHeader.classList.add('hide')
 questionContainer.classList.remove('hide')
 console.log('ouch')
}



function setNextQuestion(){

}

function selectAnswer(){

}