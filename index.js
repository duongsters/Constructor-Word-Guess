var inquirer = require("inquirer");
var randomWords = require("./list.js");
var Word = require("./word.js")


var userGuessed= [];
var guessesLeft = 10;

var guessing = [{
    type:"input",
    name:"userGuess",
    message: "Guess a letter..from A to Z!",
}]

function renderGuesses(){
    inquirer.prompt(question).then(function(response){
        if(userGuessed.includes(response.userGuess)){
            console.log("\n---------------------------------------------------------------------\n");
            console.log("You have already guessed the letter: " + response.userGuess + "...try another letter guess!\n");
            console.log("\n---------------------------------------------------------------------\n");
            console.log("\nYou have: " + guessesLeft + "guesses remaining!\n");
            renderGuesses();
        }
        else {
            userGuessed.push(response.userGuess)
            var guess = response.userGuess;
            var correctGuess = word.guess(guess);
            
        }
    })
}

function renderWord() {
    var wordListing = Math.floor(Math.random() * randomWords.length);
    return new Word (randomWords[wordListing]);
}

function renderGame() {
    inquirer.prompt([{
        type: "confirm",
        name: "newGame",
        message: "New game?"
    }])
    .then(function(response){
        if(response.newGame === true) {
            word = renderWord();
            guessesLeft = 10;
            userGuessed = [];
            console.log(word.wordDisplay().join(" "))
            console.log("You have: " + guessesLeft + "guesses remaining!\n");
            renderGuesses();
        }
        else{
            console.log("Good game! Play again?")
        }
    })
}