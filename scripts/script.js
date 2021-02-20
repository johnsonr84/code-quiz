// VARIABLES ===================================================
var startButton = document.getElementById("startBtn")
var quizDiv = document.getElementById("h1");

// BUTTONS =====================================================
document.createElement('button1') = answer1
document.createElement('button2') = answer2
document.createElement('button3') = answer3
document.createElement('button4') = answer4

// START BUTTON EVENT LISTENER	
document.getElementById("startBtn").addEventListener("click")

// QUESTIONS AND ANSWERS CHANGE
// document.createElement('submit') = submit
// if answer === right then next question
// if answer === wrong then count - 5 seconds then next question
// if lastAnswer then allow saving of high score and initials
// SUBMIT NEVER CHANGES 

// TIMER ====================================================
var timeEl = document.querySelector("#timeClock");
// count variable = 75sec
var secondsLeft = 75;
// if count === 0 stop timer(clearInterval()) 
function setTime() {
	var timerInterval = setInterval(function() {
	  secondsLeft--;
	  timeEl.textContent = secondsLeft + " seconds remaining to correctly answer.";
  
	  if(secondsLeft === 0) {
		clearInterval(timerInterval);
		sendMessage();
	  }
  
	}, 7500);
  }

  function sendMessage() {
	timeEl.textContent = " ";
  
	var imgEl = document.createElement("img");
  
	imgEl.setAttribute("src", "images/image_1.jpg");
	mainEl.appendChild(imgEl);
  
  }
  
  setTime();

  test

// then allow them to save initials and score
// initials require input
// localstorage to save initials and score and display initials and score
// when initials and score are saved display initials and score
// button to jump to high scores from start page

// let arrObj = JSON.parse(localStorage.getItem('highScore')) || [];
// count = 75;
// const timer = setInterval(function() {
//     count--
// }, 1000)
// clearInterval(timer)
// let playerScore = {
//     initials: document.getElementById('initials').value,
//     score: count
// };
// arrObj.push(playerScore)
// localStorage.setItem('highScore', JSON.stringify(arrObj))
