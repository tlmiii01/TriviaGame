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

var questions = [ new Question("What did the Knights who say Ni interested in?",
    new Answer("A shrubbery", true),
    new Answer("Artichokes", false),
    new Answer("Polar Bears", false),
    new Answer("Inquisitions", false)),

    new Question("Who thought Camelot was \"a silly place?\"",
    new Answer("Sir Robin", false),
    new Answer("Prince Herbert", false),
    new Answer("Sir Lancelot", false),
    new Answer("King Arthur", true)),
    
    new Question("Which relic was used to destroy the killer bunny?",
    new Answer("The Dagger of Devinity", false),
    new Answer("The Holy Hand Grenade", true),
    new Answer("The Papal Pen of Death", false),
    new Answer("The Spiritual Spike", false)),
    
    new Question("She turned me into a ...?",
    new Answer("Donkey!", false),
    new Answer("Newt!", true),
    new Answer("Horsefly!", false),
    new Answer("Cabbage!", false)),
    
    new Question("Who lost both arms and boths his legs in a sword fight?",
    new Answer("Sir Robin", false),
    new Answer("The Black Knight", true),
    new Answer("King Arthur", false),
    new Answer("The Knight who said Ni", false)),
    
    new Question("What is the name of the bridge they must cross near the end of the movie?",
    new Answer("The Bridge of Terror", false),
    new Answer("The Bridge of Death", true),
    new Answer("The Brodge of Hell", false),
    new Answer("The Bridge of Doom", false)),
    
    new Question("What is the name of the deadly abyss they must cross?",
    new Answer("The Valley of Neverending Torture", false),
    new Answer("The Gorge of Eternal Peril", true),
    new Answer("The Arroyo of Nightmarish Fatigue", false),
    new Answer("The Rift of Heinous Flatulance", false)),
    
    new Question("Who give Arther the quest to seek the Holy Grail",
    new Answer("Merlin", false),
    new Answer("The Knight who said Ni", false),
    new Answer("The Lady of the Lake", false),
    new Answer("God", true)),
    
    new Question("What does Arthur do to try and gain access to the French castle?",
    new Answer("Build a wooden badger", false),
    new Answer("Say \"Ni\"", false),
    new Answer("Dress as women", false),
    new Answer("Build a wooden rabbit", true)),
    
    new Question("How does Arhur and his Knights get past the Black Beast of Aaaargh?",
    new Answer("Taunting", false),
    new Answer("They ran away", false),
    new Answer("THe Holy Hand Grenade of Antioch", false),
    new Answer("Animator suffered a sudden fatal heart attack", true)),
    
    new Question("What does Arthur do to try and gain access to the French castle?",
    new Answer("Build a wooden badger", false),
    new Answer("Say \"Ni\"", false),
    new Answer("Dress as women", false),
    new Answer("Build a wooden rabbit", true)),
    
    new Question("How does one cross the Bridge of Death successfully??",
    new Answer("Correctly answer five questions", false),
    new Answer("Correctly answer three questions", true),
    new Answer("Defeat the Black Knight", false),
    new Answer("Offering up a shrubbery", false)),
    
    new Question("Do King Arthur and his knights ever find the Holy Grail??",
    new Answer("Yes, and they set an example for others.", false),
    new Answer("No, they get arrested at the end of the movie.", true),
    new Answer("No, they only found a model of it.", false),
    new Answer("Yes, but the swallows are carrying it away.", false)),
    
    new Question("Help! I'm being ...",
    new Answer("robbed", false),
    new Answer("repressed", true),
    new Answer("taunted by a weird Frenchman", false),
    new Answer("eaten", false))
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


