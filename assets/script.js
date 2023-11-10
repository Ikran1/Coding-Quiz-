// Quiz questions 

var questions = [
    {
        question: "What does the JavaScript === operator do?",
        choices: ["Checks for equality, including data type", "Checks for equality, excluding data type", "Checks for assignment"],
        correctAns: "Checks for equality, including data type"
    },
    {
        question:"How can you add a comment in JavaScript?",
        choices:["<!-- This is a comment -->", "// This is a comment","/* This is a comment */"],
        correctAns: "// This is a comment"
    },

    {
        question:"Which built-in method in JavaScript is used to sort an array?",
        choices:["arr.sort()", "arr.order()","arr.arrange()"],
        correctAns:"arr.sort()"
    },

    {
        question:"What is the purpose of the JSON.parse() method in JavaScript?",
        choices:["To parse a JSON string and convert it to a JavaScript object", "To stringify a JavaScript object into a JSON string"," To format the output of console.log()"],
        correctAns: "To parse a JSON string and convert it to a JavaScript object"
    },

    {
        question:"What does the JavaScript NaN stand for?",
        choices:["Not a Number", "Null and Negative", "No Assignment"],
        correctAns: "Not a Number"
    },
];

//Accessing the DOM 
var questionContainer= document.getElementById("questions");
var questionH2El = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submit");


// Set the timer and score 

var currentQuestionIndex = 0;
var timeLeft = 80;
let timer;
let score = 0


// Create the click event for start button 

startBtn.addEventListener('click', startQuiz);

//Creat the functions for the quiz questions and mltiple choice answer buttons

function startQuiz() {
    startBtn.classList.add("hide");
    questionContainer.classList.remove("hide");
    timer = setInterval(updateTimer, 1000);
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionH2El.innerText = question.question;
    choicesEl.innerHTML = ''; 
    question.choices.forEach(choice => {
      var button = document.createElement("button");
      button.innerText = choice;
      button.classList.add("btn");
      button.addEventListener("click", selectAnswer);
      choicesEl.appendChild(button);
    });
  }

function selectAnswer(event) {
    var selectedButton = event.target;
    var correct = selectedButton.innerText === questions[currentQuestionIndex].correctAns;

    if (correct) {
        score += 10;
    } else {
        timeLeft -= 10;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

  function updateTimer() {
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
    timeLeft--;
  }

  //Create function to end the quiz and clear the timer

  function endQuiz() {
    clearInterval(timer);
    questionContainer.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScoreEl.textContent = score;

  }

//Retrieving and storing the highscores and adding initials of the user
  submitBtn.addEventListener("click", function() {
    var initials = initialsInput.value.trim();
    if (initials !== "") {
      var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
      highscores.push({ name: initials, score: score });
      localStorage.setItem("highscores", JSON.stringify(highscores));
      window.location.href = "highscores.html";
    }
  });