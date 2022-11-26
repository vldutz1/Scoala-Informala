console.log("-----The Game Begins-----");

var OptionsArray = ["rock", "paper", "scissors"];

// function random(){
// var x = Math.floor(Math.random() * 4);
// return x;
// }
var playerPoints = 0;
var computerPoints = 0;

function looseSound() {
    var looseSound = document.getElementById("wrong");
    looseSound.play();
}

function winSound() {
    var winSound = document.getElementById("good");
    winSound.play();
}

function winner() {
    var winner = document.getElementById("game-win");
    winner.play();
}

function looser() {
    var looser = document.getElementById("game-lost");
    looser.play();
}

function play() {
    var x = 5; // default value
    var y = 5; // default value

    if (x === 5) {
        var x = Math.floor(Math.random() * 3);
    }
    var computerChoice = document.getElementById("computer-choice");
    if (x === 0) {
        console.log("Computer's Choice: ", OptionsArray[0]);
        computerChoice.innerText = "Rock"
    }
    else if (x === 1) {
        console.log("Computer's Choice: ", OptionsArray[1]);
        computerChoice.innerText = "Paper"
    }
    else if (x === 2) {
        console.log("Computer's Choice: ", OptionsArray[2]);
        computerChoice.innerText = "Scissors"
    }

    if (y === 5) {
        var y = Math.floor(Math.random() * 3);
    }

    var playerChoice = document.getElementById("player-choice");

    if (y === 0) {
        console.log("Player's Choice: ", OptionsArray[0]);
        playerChoice.innerText = "Rock"
    }
    else if (y === 1) {
        console.log("Player's Choice: ", OptionsArray[1]);
        playerChoice.innerText = "Paper"
    }
    else if (y === 2) {
        console.log("Player's Choice: ", OptionsArray[2]);
        playerChoice.innerText = "Scissors"
    }

    var result = document.getElementById("final-result");
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");

    if (x === y) {
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (x === 0 && y === 1) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (x === 0 && y === 2) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (x === 1 && y === 0) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (x === 1 && y === 2) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (x === 2 && y === 0) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (x === 2 && y === 1) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
}

function playRock() {
    var x = 0;
    var y = 0;
    var playerChoice = document.getElementById("player-choice");
    var computerChoice = document.getElementById("computer-choice");
    var result = document.getElementById("final-result");
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");

    if (x === 0) {
        playerChoice.innerText = "Rock";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:red">Draw!</span>';

    }
    else if (y === 1) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 2) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
}

function playPaper() {
    var x = 0;
    var y = 0;
    var playerChoice = document.getElementById("player-choice");
    var computerChoice = document.getElementById("computer-choice");
    var result = document.getElementById("final-result");
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");

    if (x === 0) {
        playerChoice.innerText = "Paper";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 1) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (y === 2) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
}

function playScissors() {
    var x = 0;
    var y = 0;
    var playerChoice = document.getElementById("player-choice");
    var computerChoice = document.getElementById("computer-choice");
    var result = document.getElementById("final-result");
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");

    if (x === 0) {
        playerChoice.innerText = "Scissors";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 1) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 2) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
}

function endGame() {
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");
    var winnerShow = document.getElementById("winner");

    if (playerPoints === 10) {
        playerPoints = 0;
        computerPoints = 0;
        playerPointsShow.innerText = "0";
        computerPointsShow.innerText = "0";
        winner();
        end();
        winnerShow.innerText = "Player";
    }
    else if (computerPoints === 10) {
        playerPoints = 0;
        computerPoints = 0;
        playerPointsShow.innerText = "0";
        computerPointsShow.innerText = "0";
        looser();
        end();
        winnerShow.innerText = "Computer";
    }
}

function end() {
    var element = document.getElementById("end-result-id");
    element.classList.toggle("hidden");
    var playerChoice = document.getElementById("player-choice");
    var computerChoice = document.getElementById("computer-choice");
    var result = document.getElementById("final-result");
    playerChoice.innerText = "";
    computerChoice.innerText = "";
    result.innerText = "";
  }