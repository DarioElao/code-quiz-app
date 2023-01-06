
const userInfo = document.getElementById("highscore")


let data = localStorage.getItem("highscores");

userInfo.innerHTML = data


document.getElementById("back").addEventListener("click", () =>
window.location.href="index.html"
)

document.getElementById("clear").addEventListener("click", () =>
localStorage.clear()
)
