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
var gamesPlayed = 0;
var inActiveGame = false;

function decrementCounter() {
    currentTimer--;
    // $("#timer").html('</p id="timer">Time remaining: ' + currentTimer + "</p>");
    $("#timer").text("Time remaining: " + currentTimer);

    if (currentTimer === 0) {
        clearInterval(intervalID);
        $("#status").html("</p>Time's Up!!!</p>");
        displayCorrectAnswerOnMiss();
        // setTimeout(nextQuestion, 3000);
        checkEndOfGame();
    }
}

function loadCurrentQuestion() {
    $("#question").html("<p>" + currentQuestion.question + "</p>");

    // Dynamically create the answers
    for (let i = 0; i < currentQuestion.answers.length; ++i) {
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

    $("#status").empty();

    do {
        questionNumber = Math.floor(Math.random() * questions.length);
        if (selectedQuestions.indexOf(questionNumber) === -1) {
            selectedQuestions.push(questionNumber);
            isNewQuestion = true;
        }
    } while (!isNewQuestion);

    return questions[questionNumber];
}

function displayCorrectAnswerOnMiss() {
    $("#status").append("<p>Correct answer is: " + correctAnswer + ".</p>");
    wrongAnswerCount++;
    gamesPlayed++;

}

function nextQuestion() {
    $(".answers").removeClass("correct");
    currentQuestion = selectNextQuestion();
    loadCurrentQuestion();
}

function startGame() {
    var newButton = $("<button>");
    newButton.text("Start Game");
    newButton.attr("id", "startButton")

    $("#status").append(newButton);
}

function checkEndOfGame() {
    if (gamesPlayed === maxQuestions) {
        inActiveGame = false;
        //Display stats for a little while then reset
        $("#status").append("<p>Game Over</p>")
        $("#status").append("<p>You guessed " + rightAnswerCount + " of " + maxQuestions + " correctly.</p>");
        $("#status").append("<p>A new game will begin in 5 seconds...</p>");

        setTimeout(resetGame, 5000);
    } else {
        setTimeout(nextQuestion, 3000);
    }
}

function resetGame() {
    console.log("Resetting game");
    selectedQuestions.length = 0;
    rightAnswerCount = 0;
    wrongAnswerCount = 0;
    gamesPlayed = 0;

    inActiveGame = true;
    nextQuestion();
}

$(document).ready(function () {

    startGame();


    $("#status").on("click", "#startButton", function () {
        currentQuestion = selectNextQuestion();
        loadCurrentQuestion();
        inActiveGame = true;
    });



    $(".answer-list .answers").on("click", function () {
        if (inActiveGame) {
            // Stop the timer
            clearInterval(intervalID);

            if ($(this).hasClass("correct")) {
                $("#status").html("<p>Correct Answer!!!</p>");
                rightAnswerCount++;
                gamesPlayed++;
                // setTimeout(nextQuestion, 3000);
                checkEndOfGame();
            } else {
                $("#status").html("<p>Wrong Answer!!!</p>");
                displayCorrectAnswerOnMiss();
                // setTimeout(nextQuestion, 3000);
                checkEndOfGame();
            }

        }
    })

})