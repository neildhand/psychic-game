var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//var testArray = ["a","b"];

var wins = 0;
var losses = 0;
var guesses = 10;
var userGuessed = [];



//var answer1 = testArray[Math.floor(Math.random() * 2)-1];
var answer = alphabet[Math.round( Math.random() * (25 - 0) + 0)];
console.log(answer);
 
	document.onkeypress = function(event){
	//var answer = alphabet[Math.round( Math.random() * (25 - 0) + 0)];
	
	var userGuess = event.key;

	userGuessed.push(userGuess);

	if (userGuess === answer) {
		wins++;
		answer = alphabet[Math.round( Math.random() * (25 - 0) + 0)];
		userGuessed = [];
		guesses = 10;
		//resetGame();
	}
	else{
		guesses--;
	}

	if (guesses === 0)
	{
		losses++;
		answer = alphabet[Math.round( Math.random() * (25 - 0) + 0)];
		userGuessed = [];
		guesses = 10;
		//resetGame();
	}

	console.log(answer);
	// console.log(wins);
	// console.log(guesses);
	// console.log(losses);



document.getElementById('wins').innerHTML = "<p>Wins: " + wins + "</p>";
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
document.getElementById('userGuessed').innerHTML = "Guessed Letter: " +  userGuessed.join(', ');

}

function resetGame() {
  guesses = 10;
  userGuessed = [];
  var answer = alphabet[Math.round( Math.random() * (25 - 0) + 0)]; 
}



