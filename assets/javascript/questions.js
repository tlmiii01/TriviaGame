class Answer {
    constructor(answer, isCorrect) {
        this.answer = answer;
        this.isCorrect = isCorrect;
    }
}

class Question {
    constructor(question, answer1, answer2, answer3, answer4) {
        this.question = question;
        this.answers = [answer1, answer2, answer3, answer4];
    }
}

var questions = [ new Question("What is thy name?",
    new Answer("Arthur, King of the Britians", true),
    new Answer("Sir Robin", false),
    new Answer("Sir Lancelot the Brave", false),
    new Answer("Sir Galahad", false)),

    new Question("What is your favorite color?",
    new Answer("Blue", false),
    new Answer("Yellow", false),
    new Answer("Red", false),
    new Answer("I don't know that...", true))

];

// var questions = new Question("What is thy name?",
// new Answer("Arthur, King of the Britians", true),
// new Answer("Sir Robin", false),
// new Answer("Sir Lancelot the Brave", false),
// new Answer("Sir Galahad", false));



// var question = "What is thy name?";

// var answers = [ new Answer("Arthur, King of the Britians", true ),
//                 new Answer( "Sir Robin", false ),
//                 new Answer( "Sir Lancelot the Brave", false ),
//                 new Answer( "Sir Galahad", false )];


