console.log("-----The Game Begins-----");

var OptionsArray = ["rock", "paper", "scissors"];

// function random(){
// var x = Math.floor(Math.random() * 4);
// return x;
// }
function play() {
    var x = 5; // default value
    var y = 5; // default value
    var playerPoints = 0;
    var computerPoints = 0;
    // Counter Test
    var counter1 = document.getElementById("counter");
    var count = (function () {
        var counter = 0;
    
        return function () {
            counter += 1;
            console.log(counter);
            counter1.innerText = counter;
            return counter;
        };
    })();
    count();
    // Counter Test End
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

    if (x === y) {
        console.log("Draw");
        result.innerHTML = '<span style="color:red">Draw!</span>';
    }
    else if (x === 0 && y === 1) {
        console.log("Player Wins!");
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        console.log(playerPoints);
        return playerPoints;
    }
    else if (x === 0 && y === 2) {
        console.log("Computer Wins!");
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
    }
    else if (x === 1 && y === 0) {
        console.log("Computer Wins!");
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
    }
    else if (x === 1 && y === 2) {
        console.log("Player Wins!");
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        console.log(playerPoints);
        return playerPoints;
    }
    else if (x === 2 && y === 0) {
        console.log("Player Wins!");
        result.innerHTML = '<span style="color:green">Player Wins!</span>';
        playerPoints += 1;
        playerPointsShow.innerText = playerPoints;
        console.log(playerPoints);
        return playerPoints;
    }
    else if (x === 2 && y === 1) {
        console.log("Computer Wins!");
        result.innerHTML = '<span style="color:red">Computer Wins!</span>';
    }
}