var currentQuestion = questions[1];

function loadCurrentQuestion() {
    $("#question").html("<p>" + currentQuestion.question + "</p>");

    // Dynamically create the answers
    for(let i = 0; i < currentQuestion.answers.length; ++i) {
        $("#answer" + i).html("<p>" + currentQuestion.answers[i].answer + "</p>");
        if (currentQuestion.answers[i].isCorrect) {
            $("#answer" + i).addClass("correct");
        }
    }
}



$(document).ready( function() {
    loadCurrentQuestion();

    $(".answer-list .answers").on("click", function() {
        if ( $(this).hasClass("correct") ) {
            $("#status").html("<p>Correct Answer!!!</p>");
        } else {
            $("#status").html("<p>Wrong Answer!!!</p>");
        }
    })
})