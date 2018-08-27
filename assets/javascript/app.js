// var currentQuestion = questions[0];
var currentQuestion;
var correctAnswer = "";
var selectedQuestions = [];

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
}

function selectNextQuestion() {
    var questionNumber;
    var isNewQuestion = false;
    do {
        debugger;
        questionNumber = Math.floor(Math.random() * questions.length);
        if (selectedQuestions.indexOf(questionNumber) === -1 ) {
            selectedQuestions.push(questionNumber);
            isNewQuestion = true;
        } 
    } while (!isNewQuestion);

    return questions[questionNumber];
}



$(document).ready( function() {
    currentQuestion = selectNextQuestion();
    loadCurrentQuestion();

    $(".answer-list .answers").on("click", function() {
        if ( $(this).hasClass("correct") ) {
            $("#status").html("<p>Correct Answer!!!</p>");
        } else {
            $("#status").html("<p>Wrong Answer!!!</p>");

            // need to find the right answer
           $("#status").append("<p>Correct answer is: " + correctAnswer + ".</p>");
        }
    })
})