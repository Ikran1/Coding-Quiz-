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

var questionContainer= document.getElementById("questions");
var questionH2El = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var endScreen = document.getElementById("end-screen");
var finalScoreEl = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitBtn = document.getElementById("submit");

var currentQuestionIndex = 0;
var timer = 180;
var score = 0;



 



