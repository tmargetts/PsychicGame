alert("Guess what letter I'm thinking of.")

var playerChoiceSpan = document.getElementById("playerChoice");
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var guessesLeftSpan = document.getElementById("guessesLeft");
var myGuessesSpan = document.getElementById("myGuesses");
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.onkeyup = function (event) {
    var playerChoice = event.key;
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(event.key);
    if (playerChoice === computerChoice) {
        wins++;
        winsSpan.innerText = wins;
        guessesLeft = 10;
        myGuessesSpan.innerText = " ";
        alert("You guessed correctly. You must be psychic!");
    } else if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        lossesSpan.innerText = losses;
        guessesLeftSpan.innerText = guessesLeft;
        myGuessesSpan.innerText = " ";
        alert("You lost. It's ok, computers are gonna take over for a reason.")
    } else {
        guessesLeft--;
        guessesLeftSpan.innerText = guessesLeft;
        myGuessesSpan.innerText += (playerChoice + ", ");
    } 

    
}
