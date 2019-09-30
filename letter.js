function Letter(letter) {
    this.letter = letter ;
    this.userGuess = false;

    this.getChar = function() {
        if(!this.userGuess) {
            return "_";
        }
        else {
            return this.letter;
        }
    }
}