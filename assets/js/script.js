// Wait for the DOM to finish loading beforee running the game
// Get the benjamin button elements and add event listeners to them!
let yourname = prompt("Hello there, What's your name?");
console.log("Do you wish to play a game, " + yourname + "!"); 

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {

    // Creates two random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in 
 * the returned claculatedCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert(`Heeeeeey! You got it right ${yourname}, Lets add a point to the scoreboard! xD xP`);
        incrementScore();
    } else {
        alert(`Awwww, Nice try ${yourname} you answered ${userAnswer}. 
        The correct answer was ${calculatedAnswer[0]}! 
        you just lost a point! `);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Get the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").textContent = ++oldScore;

}

/**
 * Gets the current score of incorrect answers from the DOM and increments by 1
 */

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").textContent = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}