console.log("-----The Game Begins-----");

var OptionsArray = ["rock", "paper", "scissors"];

// function random(){
// var x = Math.floor(Math.random() * 4);
// return x;
// }
var playerPoints = 0;
var computerPoints = 0;
var playerWinnings = 0;
var computerWinnings = 0;
var totalPointsToWin = 10;

var playWithImages = true;

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

function cheatAccess() {
    var cheatAccess = document.getElementById("cheat-zone");
    cheatAccess.play();
}

var playing = false;

function gameMusic() {
    var gameMusic = document.getElementById("game-music");
    var musicBtn = document.getElementById("music-status");
    if (playing === false) {
        playing = true;
        gameMusic.play();
        musicBtn.classList.add("music-btn")
    }
    else if (playing === true) {
        playing = false;
        gameMusic.pause();
        musicBtn.classList.remove("music-btn")
    }
}

function play() {
    var x = 5; // default value
    var y = 5; // default value

    if (x === 5) {
        var x = Math.floor(Math.random() * 3);
    }
    var computerChoice = document.getElementById("computer-choice");
    if (x === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock"
    }
    else if (x === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (x === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper"
    }
    else if (x === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (x === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors"
    }
    else if (x === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
    }

    if (y === 5) {
        var y = Math.floor(Math.random() * 3);
    }

    var playerChoice = document.getElementById("player-choice");

    if (y === 0 && playWithImages === false) {
        playerChoice.innerText = "Rock"
    }
    else if (y === 0 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (y === 1 && playWithImages === false) {
        playerChoice.innerText = "Paper"
    }
    else if (y === 1 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (y === 2 && playWithImages === false) {
        playerChoice.innerText = "Scissors"
    }
    else if (y === 2 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/scissors.png">';
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

    if (x === 0 && playWithImages === true) {
        // playerChoice.innerText = "Rock";
        playerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (x === 0 && playWithImages === false) {
        playerChoice.innerText = "Rock";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0 && playWithImages === true) {
        // computerChoice.innerText = "Rock";
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';

    }
    else if (y === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        // computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';

    }
    else if (y === 1 && playWithImages === true) {
        // computerChoice.innerText = "Paper";
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        // computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 2 && playWithImages === true) {
        // computerChoice.innerText = "Scissors";
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors";
        // computerChoice.innerHTML = '<img src="images/scissors.png">';
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

    if (x === 0 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (x === 0 && playWithImages === false) {
        playerChoice.innerText = "Paper";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    if (y === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (y === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (y === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 2 && playWithImages === false) {
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

    if (x === 0 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/scissors.png">';
    }
    else if (x === 0 && playWithImages === false) {
        playerChoice.innerText = "Scissors";
    }

    if (y === 0) {
        var y = Math.floor(Math.random() * 3);
    }

    if (y === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    if (y === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (y === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (y === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (y === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
}

function endGame() {
    var playerPointsShow = document.getElementById("player-points");
    var computerPointsShow = document.getElementById("computer-points");
    var winnerShow = document.getElementById("winner");
    var playerWinsShow = document.getElementById("player-winnings");
    var computerWinsShow = document.getElementById("computer-winnings");

    if (playerPoints === totalPointsToWin || playerPoints > totalPointsToWin) {
        playerPoints = 0;
        computerPoints = 0;
        playerPointsShow.innerText = "0";
        computerPointsShow.innerText = "0";
        winner();
        end();
        winnerShow.innerHTML = '<span style="color:green">Player</span>';
        playerWinnings += 1;
        playerWinsShow.innerText = playerWinnings;
    }
    else if (computerPoints === totalPointsToWin || computerPoints > totalPointsToWin) {
        playerPoints = 0;
        computerPoints = 0;
        playerPointsShow.innerText = "0";
        computerPointsShow.innerText = "0";
        looser();
        end();
        winnerShow.innerHTML = '<span style="color:red">Computer</span>';
        computerWinnings += 1;
        computerWinsShow.innerText = computerWinnings;
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

function cheatsShow() {
    var cheatList = document.getElementById("cheat-area");
    cheatList.classList.toggle("hidden");
    cheatAccess();
}

function addPointsToPlayer() {
    playerPoints += 9;
    var playerPointsShow = document.getElementById("player-points");
    playerPointsShow.innerText = playerPoints;
    alert("9 Points added to Player")
}

function addPointsToComputer() {
    computerPoints += 9;
    var playerPointsShow = document.getElementById("computer-points");
    playerPointsShow.innerText = computerPoints;
    alert("9 Points added to Computer")
}

function resultsShow() {
    var results = document.getElementById("total-wins");
    results.classList.toggle("hidden");
}

function setMaxPointsToWin5() {
    var setMaxP = document.getElementById("max-points-p");
    var setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 5;
    setMaxP.innerText = "/5";
    setMaxC.innerText = "/5";
    alert("Points to win set to: 5");
}

function setMaxPointsToWin10() {
    var setMaxP = document.getElementById("max-points-p");
    var setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 10;
    setMaxP.innerText = "/10";
    setMaxC.innerText = "/10";
    alert("Points to win set to: 10");
}

function setMaxPointsToWin15() {
    var setMaxP = document.getElementById("max-points-p");
    var setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 15;
    setMaxP.innerText = "/15";
    setMaxC.innerText = "/15";
    alert("Points to win set to: 15");
}

function setMaxPointsToWin20() {
    var setMaxP = document.getElementById("max-points-p");
    var setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 20;
    setMaxP.innerText = "/20";
    setMaxC.innerText = "/20";
    alert("Points to win set to: 20");
}

function animationToggle() {
    var animation = document.getElementById("title");
    animation.classList.toggle("animation");
}

function playWithImagesToggle() {
    if (playWithImages === true) {
        playWithImages = false;
        var imagesStatus = document.getElementById("images-status");
        imagesStatus.innerText = 'Off';
        imagesStatus.style = "color:red";
        var rockBtn = document.getElementById("rock-btn");
        rockBtn.innerHTML = '<span style="color:white">Rock</span>'
        var paperBtn = document.getElementById("paper-btn");
        paperBtn.innerHTML = '<span style="color:white">Paper</span>'
        var scissorsBtn = document.getElementById("scissors-btn");
        scissorsBtn.innerHTML = '<span style="color:white">Scissors</span>'
    }
    else if (playWithImages === false) {
        playWithImages = true;
        var imagesStatus = document.getElementById("images-status");
        imagesStatus.innerText = 'On';
        imagesStatus.style = "color:white";
        var rockBtn = document.getElementById("rock-btn");
        rockBtn.innerHTML = '<img src="images/rock.png">'
        var paperBtn = document.getElementById("paper-btn");
        paperBtn.innerHTML = '<img src="images/paper.png">'
        var scissorsBtn = document.getElementById("scissors-btn");
        scissorsBtn.innerHTML = '<img src="images/scissors.png">'
    }
}
