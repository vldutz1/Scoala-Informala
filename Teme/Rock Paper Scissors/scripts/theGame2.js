console.log("-----The Game Begins-----");

const OptionsArray = ["rock", "paper", "scissors"];

let playerPoints = 0;
let computerPoints = 0;
let playerWinnings = 0;
let computerWinnings = 0;
let totalPointsToWin = 10;

let playWithImages = true;

function looseSound() {
    const looseSound = document.getElementById("wrong");
    looseSound.play();
}

function winSound() {
    const winSound = document.getElementById("good");
    winSound.play();
}

function winner() {
    const winner = document.getElementById("game-win");
    winner.play();
}

function looser() {
    const looser = document.getElementById("game-lost");
    looser.play();
}

function cheatAccess() {
    const cheatAccess = document.getElementById("cheat-zone");
    cheatAccess.play();
}

let playing = false;

function gameMusic() {
    const gameMusic = document.getElementById("game-music");
    const musicBtn = document.getElementById("music-status");
    if (playing === false) {
        playing = true;
        gameMusic.play();
        musicBtn.classList.add("music-btn");
    }
    else if (playing === true) {
        playing = false;
        gameMusic.pause();
        musicBtn.classList.remove("music-btn");
    }
}

function play() {
    let computerRandomChoice = Math.floor(Math.random() * 3);
    const computerChoice = document.getElementById("computer-choice");
    if (computerRandomChoice === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock"
    }
    else if (computerRandomChoice === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (computerRandomChoice === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper"
    }
    else if (computerRandomChoice === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (computerRandomChoice === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors"
    }
    else if (computerRandomChoice === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
    }
        let playerRandomChoice = Math.floor(Math.random() * 3);

    const playerChoice = document.getElementById("player-choice");

    if (playerRandomChoice === 0 && playWithImages === false) {
        playerChoice.innerText = "Rock"
    }
    else if (playerRandomChoice === 0 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (playerRandomChoice === 1 && playWithImages === false) {
        playerChoice.innerText = "Paper"
    }
    else if (playerRandomChoice === 1 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (playerRandomChoice === 2 && playWithImages === false) {
        playerChoice.innerText = "Scissors"
    }
    else if (playerRandomChoice === 2 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/scissors.png">';
    }

    let result = document.getElementById("final-result");
    let playerPointsShow = document.getElementById("player-points");
    let computerPointsShow = document.getElementById("computer-points");

    if (computerRandomChoice === playerRandomChoice) {
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (computerRandomChoice === 0 && playerRandomChoice === 1) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (computerRandomChoice === 0 && playerRandomChoice === 2) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (computerRandomChoice === 1 && playerRandomChoice === 0) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (computerRandomChoice === 1 && playerRandomChoice === 2) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (computerRandomChoice === 2 && playerRandomChoice === 0) {
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (computerRandomChoice === 2 && playerRandomChoice === 1) {
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
}

function playRock() {
    let playerChoiceRock = 0;
    let ComputerChoices = Math.floor(Math.random() * 3);
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");
    const result = document.getElementById("final-result");
    const playerPointsShow = document.getElementById("player-points");
    const computerPointsShow = document.getElementById("computer-points");

    if (playerChoiceRock === 0 && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/rock.png">';
    }
    else if (playerChoiceRock === 0 && playWithImages === false) {
        playerChoice.innerText = "Rock";
    }

    if (ComputerChoices === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';

    }
    else if (ComputerChoices === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:red">Draw!</span>';

    }
    else if (ComputerChoices === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (ComputerChoices === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (ComputerChoices === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (ComputerChoices === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
}

function playPaper() {
    let PlayerChoicePaper = true;
    let ComputerChoices = Math.floor(Math.random() * 3);
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");
    const result = document.getElementById("final-result");
    const playerPointsShow = document.getElementById("player-points");
    const computerPointsShow = document.getElementById("computer-points");

    if (PlayerChoicePaper === true && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/paper.png">';
    }
    else if (PlayerChoicePaper === true && playWithImages === false) {
        playerChoice.innerText = "Paper";
    }

    if (ComputerChoices === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    if (ComputerChoices === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (ComputerChoices === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (ComputerChoices === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (ComputerChoices === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (ComputerChoices === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
}

function playScissors() {
    let PlayerChoiceScissors = true;
    let ComputerChoices = Math.floor(Math.random() * 3);
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");
    const result = document.getElementById("final-result");
    const playerPointsShow = document.getElementById("player-points");
    const computerPointsShow = document.getElementById("computer-points");

    if (PlayerChoiceScissors === true && playWithImages === true) {
        playerChoice.innerHTML = '<img src="images/scissors.png">';
    }
    else if (PlayerChoiceScissors === true && playWithImages === false) {
        playerChoice.innerText = "Scissors";
    }

    if (ComputerChoices === 0 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/rock.png">';
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    if (ComputerChoices === 0 && playWithImages === false) {
        computerChoice.innerText = "Rock";
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
        computerPoints += 1;
        computerPointsShow.innerText = computerPoints;
        looseSound();
        endGame();
    }
    else if (ComputerChoices === 1 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/paper.png">';
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (ComputerChoices === 1 && playWithImages === false) {
        computerChoice.innerText = "Paper";
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        winSound();
        endGame();
    }
    else if (ComputerChoices === 2 && playWithImages === true) {
        computerChoice.innerHTML = '<img src="images/scissors.png">';
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (ComputerChoices === 2 && playWithImages === false) {
        computerChoice.innerText = "Scissors";
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
}

function endGame() {
    const playerPointsShow = document.getElementById("player-points");
    const computerPointsShow = document.getElementById("computer-points");
    const winnerShow = document.getElementById("winner");
    const playerWinsShow = document.getElementById("player-winnings");
    const computerWinsShow = document.getElementById("computer-winnings");

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
    const element = document.getElementById("end-result-id");
    element.classList.toggle("hidden");
    const playerChoice = document.getElementById("player-choice");
    const computerChoice = document.getElementById("computer-choice");
    const result = document.getElementById("final-result");
    playerChoice.innerText = "";
    computerChoice.innerText = "";
    result.innerText = "";
}

function cheatsShow() {
    const cheatList = document.getElementById("cheat-area");
    cheatList.classList.toggle("hidden");
    cheatAccess();
}

function addPointsToPlayer() {
    playerPoints += 5;
    const playerPointsShow = document.getElementById("player-points");
    playerPointsShow.innerText = playerPoints;
    alert("5 Points added to Player")
}

function addPointsToComputer() {
    computerPoints += 5;
    const playerPointsShow = document.getElementById("computer-points");
    playerPointsShow.innerText = computerPoints;
    alert("5 Points added to Computer")
}

function resultsShow() {
    const results = document.getElementById("total-wins");
    results.classList.toggle("hidden");
}

function setMaxPointsToWin5() {
    const setMaxP = document.getElementById("max-points-p");
    const setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 5;
    setMaxP.innerText = "/5";
    setMaxC.innerText = "/5";
    alert("Points to win set to: 5");
}

function setMaxPointsToWin10() {
    const setMaxP = document.getElementById("max-points-p");
    const setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 10;
    setMaxP.innerText = "/10";
    setMaxC.innerText = "/10";
    alert("Points to win set to: 10");
}

function setMaxPointsToWin15() {
    const setMaxP = document.getElementById("max-points-p");
    const setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 15;
    setMaxP.innerText = "/15";
    setMaxC.innerText = "/15";
    alert("Points to win set to: 15");
}

function setMaxPointsToWin20() {
    const setMaxP = document.getElementById("max-points-p");
    const setMaxC = document.getElementById("max-points-c");
    totalPointsToWin = 20;
    setMaxP.innerText = "/20";
    setMaxC.innerText = "/20";
    alert("Points to win set to: 20");
}

function animationToggle() {
    const animation = document.getElementById("title");
    animation.classList.toggle("animation");
}

function playWithImagesToggle() {
    if (playWithImages === true) {
        playWithImages = false;
        const imagesStatus = document.getElementById("images-status");
        imagesStatus.innerText = 'Off';
        imagesStatus.style = "color:red";
        const rockBtn = document.getElementById("rock-btn");
        rockBtn.innerHTML = '<span style="color:white">Rock</span>'
        const paperBtn = document.getElementById("paper-btn");
        paperBtn.innerHTML = '<span style="color:white">Paper</span>'
        const scissorsBtn = document.getElementById("scissors-btn");
        scissorsBtn.innerHTML = '<span style="color:white">Scissors</span>'
    }
    else if (playWithImages === false) {
        playWithImages = true;
        const imagesStatus = document.getElementById("images-status");
        imagesStatus.innerText = 'On';
        imagesStatus.style = "color:white";
        const rockBtn = document.getElementById("rock-btn");
        rockBtn.innerHTML = '<img src="images/rock.png">'
        const paperBtn = document.getElementById("paper-btn");
        paperBtn.innerHTML = '<img src="images/paper.png">'
        const scissorsBtn = document.getElementById("scissors-btn");
        scissorsBtn.innerHTML = '<img src="images/scissors.png">'
    }
}