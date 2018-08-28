// var currentQuestion = questions[0];
var currentQuestion;
var correctAnswer = "";
var selectedQuestions = [];
var maxQuestions = 10;
var rightAnswerCount = 0;
var wrongAnswerCount = 0;
var maxTimer = 30;
var currentTimer;
var intervalID;

function decrementCounter() {
    currentTimer--;
    $("#timer").html("</p>Time remaining: " + currentTimer + "</p>");

    if (currentTimer === 0) {
        clearInterval(intervalID);
        $("#status").html("</p>Time's Up!!!</p>");
        displayCorrectAnswerOnMiss();
    }
}

function loadCurrentQuestion() {
    $("#question").html("<p>" + currentQuestion.question + "</p>");

    // Dynamically create the answers
    for(let i = 0; i < currentQuestion.answers.length; ++i) {
        $("#answer" + i).html("<p>" + currentQuestion.answers[i].answer + "</p>");
        if (currentQuestion.answers[i].isCorrect) {
            $("#answer" + i).addClass("correct");
            correctAnswer = currentQuestion.answers[i].answer;
        }
    }

    // Turn on the timer
    currentTimer = maxTimer;
    intervalID = setInterval(decrementCounter, 1000);
}

function selectNextQuestion() {
    var questionNumber;
    var isNewQuestion = false;
    do {
        questionNumber = Math.floor(Math.random() * questions.length);
        if (selectedQuestions.indexOf(questionNumber) === -1 ) {
            selectedQuestions.push(questionNumber);
            isNewQuestion = true;
        } 
    } while (!isNewQuestion);

    return questions[questionNumber];
}

function displayCorrectAnswerOnMiss() {
    $("#status").append("<p>Correct answer is: " + correctAnswer + ".</p>");
    wrongAnswerCount++;
}

$(document).ready( function() {
    currentQuestion = selectNextQuestion();
    loadCurrentQuestion();

    $(".answer-list .answers").on("click", function() {
        // Stop the timer
        clearInterval(intervalID);
        if ( $(this).hasClass("correct") ) {
            $("#status").html("<p>Correct Answer!!!</p>");
            rightAnswerCount++;
        } else {
            $("#status").html("<p>Wrong Answer!!!</p>");
            displayCorrectAnswerOnMiss();
        }
    })
})