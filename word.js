var Letter = require("./letter.js");

function Word(word) {
    var splitChar = word.split(" ");
    var wordArr = [];

    splitChar.forEach(function(response){

        var char = new Letter(response)
        wordArr.push(letter)
    })
    this.wordStr = word;
    this.word = wordArr;
    this.wordDisplay = function() {
        var wordOutput = [];
        this.word.forEach (function(response{
            wordOutput.push(response.wordOutput())
        })
        return wordOutput;
    }


    this.renderLetters=
}

