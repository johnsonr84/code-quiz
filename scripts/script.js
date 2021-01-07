// Code Questions

const questions = [
	{
		question: 'Commonly used data types DO NOT Include ____________ .',
		options: [ 'A) strings', 'B) booleans', 'C) alerts', 'D) numbers' ],
		answer: 2
	},
	{
		question: 'The condition in an if / else statement is enclosed within __________ .',
		options: [ 'A) quotes', 'B) curly brackets', 'C) parenthesis', 'D) square brackets' ],
		answer: 2
	},
	{
		question: 'Arrays in JavaScript can store __________ .',
		options: [ 'A) numbers and strings', 'B) other Arrays', 'C) booleans', 'D) all of the above' ],
		answer: 3
    },
    {
		question: 'String values must be enclosed within __________ when being assigned to variables.',
		options: [ 'A) commas', 'B) curly brackets', 'C) quotes', 'D) parenthesis' ],
		answer: 1
    },
    {
		question: 'A very useful tool used during development and debugging for printing content to the debugger is __________ .',
		options: [ 'A) JavaScript', 'B) terminal / bash', 'C) for loops', 'D) console.log' ],
		answer: 3
    },
];


// add event listener on start 
// document.createElement('h1') = question1
// document.createElement('button1') = answer1
// document.createElement('button2') = answer2
// document.createElement('button3') = answer3
// document.createElement('button4') = answer4
// QUESTIONS AND ANSWERS CHANGE
// document.createElement('submit') = submit
// if answer === right then next question
// if answer === wrong then count - 5 seconds then next question
// if lastAnswer then allow saving of high score and initials
// SUBMIT NEVER CHANGES 
// timer
// count variable = 75sec
// if count === 0 stop timer(clearInterval()) 
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
