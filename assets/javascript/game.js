var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;


var winsText = document.getElementById("#char1");
var lossText = document.getElementById('#char2');
var guessesText = document.getElementById('#char3');


var randomIndex = Math.floor(Math.random() * abc.length);
var computerChoice = abc[randomIndex];
console.log(computerChoice);

document.onkeyup = function () {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    document.querySelector('#char4').textContent = event.key;


    if ((userGuess === computerChoice)) {
        winCount++;
        alert("You win!");
        randomIndex = Math.floor(Math.random() * abc.length);
        computerChoice = abc[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 10;

    } else if ((userGuess !== computerChoice)) {
        guessesRemaining--;


    }
    if (guessesRemaining === 0) {
        lossCount++;
        alert("You lose!");
        randomIndex = Math.floor(Math.random() * abc.length);
        computerChoice = abc[randomIndex];
        console.log(computerChoice);
        guessesRemaining = 10;
    }

    winsText.textContent = winCount;
    lossText.textContent = lossCount;
    guessesText.textContent = guessesRemaining;
};