// highscores.js

// Create a function to show the high scores
function showHighscores() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    var olEl = document.getElementById("highscores");
    highscores.forEach(function(score) {
        var liEl = document.createElement("li");
        liEl.textContent = score.name + " - " + score.score;
        olEl.appendChild(liEl);
    });
}

// Creat a function to clear high scores
function clearHighscores() {
    localStorage.removeItem("highscores");
    window.location.reload();
}

// Event listener for the clear button
document.getElementById("clear").addEventListener("click", clearHighscores);

// Call showHighscores function to display high scores 
showHighscores();
