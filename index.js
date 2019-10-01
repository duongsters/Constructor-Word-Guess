var inquirer = require("inquirer");
var randomWords = require("./list.js");
var Word = require("./word.js")


var guessing = [{
    type:"input",
    name:"userGuess",
    message: "Type in any letter...from A to Z!",
}]