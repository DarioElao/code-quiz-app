const startButton = document.getElementById("start-button")
const startHeader = document.getElementById("starter")
const questionContainer = document.getElementById("container")
const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")

const answerEl1 = document.getElementById("answ1")
const answerEl2 = document.getElementById("answ2")
const answerEl3 = document.getElementById("answ3")
const answerEl4 = document.getElementById("answ4")


startButton.addEventListener("click", startGame)

//start quiz app
function startGame(){
 startButton.classList.add("hide")
 startHeader.classList.add("hide")
 questionContainer.classList.remove("hide")
 console.log("ouch")
 showQuestion()
}


//Questions Array
const questions = [
    {
    question: "What tag is used to define a table or image notation (caption)?",
    answer1: "<caption>",
    answer2: "<embed>",
    answer3: "<code>",
    answer4: "<!DOCTYPE>",
    correctAnsw: "<caption>",
    },

    {
    question: "What group of tags are used to define the text headers in the body of the HTML document?",
    answer1: "<h1> to <h6>",
    answer2: "<button>",
    answer3: "<td>",
    answer4: "<footer>",
    correctAnsw: "<h1> to <h6>",    
    },

    {
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answer1: "Arrays",
    answer2: "Functions",
    answer3: "Strings",
    answer4: "Variables",
    correctAnsw: "Strings",
    }

]


console.log(questions)
let currentQuestionIndex = 0 ;
let correctAnswer = questions[currentQuestionIndex];


function showQuestion(){
    questionElement.innerText = questions[currentQuestionIndex].question
    answerEl1.innerText = questions[currentQuestionIndex].answer1;
    answerEl2.innerText = questions[currentQuestionIndex].answer2;
    answerEl3.innerText = questions[currentQuestionIndex].answer3;
    answerEl4.innerText = questions[currentQuestionIndex].answer4;
}

function confirmAnswer(answer){
 console.log('dario')
 if ( answer === questions[currentQuestionIndex].correctAnsw )
 score = score + 5
 currentQuestionIndex++;
 showQuestion()
}



answerButton.addEventListener("click", () => {
    const answer = this.event.target.value
    confirmAnswer(answer)
  })