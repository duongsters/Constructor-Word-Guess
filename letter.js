function Letter(letter) {
    this.letter = letter ;
    this.userGuess = false;

    this.display = function() {
        if(!this.userGuess) {
            return "_";
        }
        else {
            return this.letter;
        }
    }
    this.check = function(response) {
        if(response === this.letter) {
            this.userGuess = true;
            return true;
        }
    }
}
module.export = Letter;
