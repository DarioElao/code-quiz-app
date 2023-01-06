// set variables
const startButton = document.getElementById("start-button");
const startHeader = document.getElementById("starter");
const questionContainer = document.getElementById("container");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const scoreTotal = document.getElementById("score")
const answerLiBtn = document.querySelectorAll(".answer");
const submitScore = document.getElementById("score-submit")
const showAlert = document.getElementById("alert")
const showUser = document.getElementById("initials")
const showInitials = document.getElementById("submit")


// answer buttons variables
const answerEl1 = document.getElementById("answ1");
const answerEl2 = document.getElementById("answ2");
const answerEl3 = document.getElementById("answ3");
const answerEl4 = document.getElementById("answ4");
let count = document.getElementById("timer");

//variables for tier and questions count
let sore = 0
let time = 60;
let timeInterval;
let currentQuestionIndex = 0;

//Questions Array
let questions = [
  {
    question: "What tag is used to define a table or image notation (caption)?",
    answer1: "<caption>",
    answer2: "<embed>",
    answer3: "<code>",
    answer4: "<!DOCTYPE>",
    correctOption: "<caption>",
  },
  {
    question:"What group of tags are used to define the text headers in the body of the HTML document?",
    answer1: "<h1> to <h6>",
    answer2: "<button>",
    answer3: "<td>",
    answer4: "<footer>",
    correctOption: "<h1> to <h6>",
  },
  {
    question:"In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answer1: "Arrays",
    answer2: "Functions",
    answer3: "Strings",
    answer4: "Variables",
    correctOption: "Strings",
  },
  {
    question:"The link element must go inside the ____ section of an HTML document or page.",
    answer1: "Footer",
    answer2: "Body",
    answer3: "Head",
    answer4: "Paragraph",
    correctOption: "Head",
  },
  {
    question:"What is the CSS property that sets the size of the whitespace outside the borders of the content?",
    answer1: "Spacer",
    answer2: "Line",
    answer3: "Margin",
    answer4: "Block-level",
    correctOption: "Margin",
  }
];

//start timer function 
function startTimer() {
  count.innerHTML = time;

  timeInterval = setInterval(function () {
    time--;
    count.innerHTML = time;

    if (time <= 0) {
      clearInterval(timeInterval);
      time = 0;
      count.innerHTML = time;
    }
  }, 1000);
}

//start quiz app and removes first page content
function startGame() {
  startButton.classList.add("hide");
  startHeader.classList.add("hide");
  questionContainer.classList.remove("hide");
  showQuestion();
}

//function that displays the question
function showQuestion() {
  //if question count reaches its end , endgame ()
  if (currentQuestionIndex === questions.length) {
    endGame()
  } else {
  //if not , keep searching for next question
    questionElement.innerText = questions[currentQuestionIndex].question;
    answerEl1.innerText = questions[currentQuestionIndex].answer1;
    answerEl2.innerText = questions[currentQuestionIndex].answer2;
    answerEl3.innerText = questions[currentQuestionIndex].answer3;
    answerEl4.innerText = questions[currentQuestionIndex].answer4;
  }
}

//confirms correct answer
function confirmAnswer(answer) {
  let rightAnswer = questions[currentQuestionIndex];
  // console.log(this.innerText)

  //if the users picks right answer , display correct message
  if (answer === rightAnswer.correctOption) {
    showAlert.innerHTML = "Previous answer correct!"
    currentQuestionIndex++;
    showQuestion();
    //if not, display incorrect and reduce timer by 10secs.
  } else if (answer !== rightAnswer.correctOption) {
    showAlert.innerHTML = "Previous answer wrong!"
    time = time - 10
    currentQuestionIndex++;
    showQuestion();
  }
}


//event that confirms users input by clicking the right answer
answerLiBtn.forEach(function (btn) {
  // console.log(btn);

  btn.addEventListener("click", (event) => {
    const answer = event.target.innerText;
    console.log(answer);
    confirmAnswer(answer);
      }
    );
  }
);

//function that starts the quiz app and timer when users clicks on the "START" button
startButton.addEventListener("click", function () {
  startGame();
  startTimer();
  }
);


//function that display final page and score
function endGame(){
    questionContainer.classList.add("hide")
      count.classList.add("hide")
      clearInterval(timeInterval)
    const finalScore = document.getElementById("final-score")
      finalScore.innerHTML = "Your final score is " + time
      submitScore.classList.remove("hide")
}

//stores users initials in the local storage once the "SUBMIT" button is clicked
showInitials.addEventListener("click", () => {
    // console.log('clicked')
    const player = document.getElementById("name").value;
    const user = player + " " + time

    //gets data and stores it in local storage
    let highscores = JSON.parse(localStorage.getItem("highscores")) || []
    highscores.push(user)

  localStorage.setItem("highscores", JSON.stringify(highscores))

  window.location.href="highscore.html"
  }
)

