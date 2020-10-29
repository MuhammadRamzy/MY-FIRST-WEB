console.log("Hello Friends")
console.log("I made this game for you")
console.log("Enjoy this game")
console.log("Made by Muhammad Ramzy")

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const winMsg = "YOU WIN ! "
const loseMsg = "YOU LOSE ! "
const drawMsg = "ITS A DRAW ! "
const choiceResult = document.querySelector(".choiceResult");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = winMsg
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_div.innerHTML = loseMsg
}

function draw() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    result_div.innerHTML = drawMsg
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win();
            choiceResult.innerHTML = "You selected " + userChoice + " , Computer selected " + computerChoice;
            break;
        case "ScissorRock":
        case "RockPaper":
        case "PaperScissor":
            lose();
            choiceResult.innerHTML = "You selected " + userChoice + " , Computer selected " + computerChoice;
            break;
        case "ScissorScissor":
        case "RockRock":
        case "PaperPaper":
            draw();
            choiceResult.innerHTML = "You selected " + userChoice + " , Computer selected " + computerChoice;
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("Rock");
    })
    paper_div.addEventListener('click', function () {
        game("Paper");
    })
    scissor_div.addEventListener('click', function () {
        game("Scissor");
    })
}

main();