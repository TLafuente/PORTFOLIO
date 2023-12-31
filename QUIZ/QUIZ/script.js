const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Highly Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },

];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const timer = document.getElementById("timer");
const timeLeftSpan = document.getElementById("time-left");
const resultContainer = document.querySelector(".result-container");
const finalScoreSpan = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const saveScoreButton = document.getElementById("save-score");
const highScoresContainer = document.querySelector(".high-scores-container");
const highScoresList = document.getElementById("high-scores-list");
const clearScoresButton = document.getElementById("clear-scores");

function startQuiz() {
    startButton.style.display = "none";
    timerInterval = setInterval(function () {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        questionContainer.textContent = question.question;
        optionsContainer.innerHTML = "";
        question.options.forEach(function (option) {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(optionButton);
        });
    } else {
        endQuiz();
    }
}


function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    } else {
        timeLeft -= 10; 
    }
    currentQuestionIndex++;
    displayQuestion();
}


function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.style.display = "none";
    optionsContainer.style.display = "none";
    timer.style.display = "none";
    resultContainer.style.display = "block";
    finalScoreSpan.textContent = score;
}


startButton.addEventListener("click", startQuiz);


saveScoreButton.addEventListener("click", function () {
    const initials = initialsInput.value.trim();
    if (initials !== "") {
        const highScore = { initials, score };
        
        displayHighScores();
    }
});


function displayHighScores() {
    resultContainer.style.display = "none";
    highScoresContainer.style.display = "block";

}

clearScoresButton.addEventListener("click", function () {
    highScoresList.innerHTML = "";
});