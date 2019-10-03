var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 1;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];

var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];
console.log(computerChoice);

for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
}