var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type= 'number']");

var winningScoreDisplay = document.querySelector("#winningScore");
numInput.value = winningScoreDisplay.textContent;
var winningScore = winningScoreDisplay.textContent;
var gameOver = false;

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function () {
	if(gameOver)
		return;

	p1Score++;
	p1Display.textContent = p1Score;
	if(p1Score == winningScore)
	{
		gameOver = true;
		p1Display.classList.add("winner");
	}
});

p2Button.addEventListener("click", function () {
	if(gameOver)
		return;
	p2Score++;
	p2Display.textContent = p2Score;
	if(p2Score == winningScore)
	{
		gameOver = true;
		p2Display.classList.add("winner");
	}
});

resetButton.addEventListener("click", function () {
	reset();
});

numInput.addEventListener("change", function () {
	reset();
	winningScoreDisplay.textContent = numInput.value;
	winningScore = numInput.value;
});

function reset () {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}