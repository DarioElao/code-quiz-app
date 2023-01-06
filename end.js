
//set variable to display score
const userInfo = document.getElementById("highscore")

//retrieves data from local storage
let data = localStorage.getItem("highscores");

//shows users score on the page
userInfo.innerHTML = data

//returns to man page when "Go Back" button is clicked
document.getElementById("back").addEventListener("click", () =>
window.location.href="index.html"
)

//clears local storage saved data when "Clear Scores" button is clicked
document.getElementById("clear").addEventListener("click", () =>
localStorage.clear()
)
