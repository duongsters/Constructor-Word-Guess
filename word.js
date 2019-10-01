var Letter = require("./letter.js");

function Word(word) {
    var splitChar = word.split(" ");
    var wordArr = [];

    splitChar.forEach(function(element){

        var char = new Letter(element)
        wordArr.push(letter)
    })
    this.wordStr = word;
    this.word = wordArr;
    this.wordDisplay = function() {
        var wordOutput = [];
        this.word.forEach (function(element){
            wordOutput.push(element.wordOutput())
        })
        return wordOutput;
    }

    this.guess = function(letter) {
        var correctGuess = false;
        this.word.forEach(function(element){
            if(element.check(letter)){
                correctGuess = true;
            }
        })
        return correctGuess;
    }
}
module.exports = Word
