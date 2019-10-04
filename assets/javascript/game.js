var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];

var winsText = document.getElementById("#char1");
var lossText = document.getElementById('#char2');
var guessesText = document.getElementById('#char3');

var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];
console.log(computerChoice);

// for (var i = 0; i < alphabet.length; i++) {
//     console.log(alphabet[i]);
// }

document.onkeyup = function () {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    document.querySelector('#char4').textContent = event.key;

    if ((userGuess === computerChoice)) {
        winCount++;
        alert("You win!");
    } else if (userGuess !== computerChoice)

        guessesRemaining--;

    // else((userGuess!--computerChoice)) {
    // guessesRemaining--;
    // rr}








    winsText.textContent = winCount;
    lossText.textContent = lossCount;
    guessesText.textContent = guessesRemaining;


};
// userGuess === computerChoice ? alert('Correct guess!') : console.log('try again');


// var count = 0;
// document.onkeyup = function (event) {
//     if (event.keyCode === 13) {
//         count++;
//         console.log('hit:', count, 'times.');
//     }
//     document.querySelector('#char4').textContent = event.key;
// }