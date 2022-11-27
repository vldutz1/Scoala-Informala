var player1Points = 0;
var player2Points = 0;
var player1Position = 0;
var player2Position = 0;
var dice = 0;
var p1Lucky6 = 0;

function diceRollSound() {
    var diceSound = document.getElementById("dice-sound");
    diceSound.play();
}

function diceRollPlayer1() {
    diceRollSound();
    dice = Math.floor(Math.random() * 7);
    var diceImg = document.getElementById("dice-img");
    diceImg.classList.toggle("dice-roll");
    var rollButton = document.getElementById("rollbtn");
    rollButton.classList.toggle("hidden");
    var rollButtonFake = document.getElementById("rollbtnfake");
    rollButtonFake.classList.toggle("hidden");
    setTimeout(() => {
        var diceShow = document.getElementById("diceResult");
        if (dice === 0) {
            diceShow.innerText = "1";
            dice = 1;
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 1) {
            dice = 1;
            diceShow.innerText = "1";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 2) {
            dice = 2;
            diceShow.innerText = "2";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 3) {
            dice = 3;
            diceShow.innerText = "3";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 4) {
            dice = 4;
            diceShow.innerText = "4";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 5) {
            dice = 5;
            diceShow.innerText = "5";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
        }
        else if (dice === 6) {
            dice = 6;
            diceShow.innerText = "6";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButton.classList.toggle("hidden");
            p1Lucky6 +=1;
            Player1Stats();
        }
        getP1Position();
    }, 2000);
}

var p0 = document.getElementById("p1-0");
var p1 = document.getElementById("p1-1");
var p2 = document.getElementById("p1-2");
var p3 = document.getElementById("p1-3");
var p4 = document.getElementById("p1-4");
var p5 = document.getElementById("p1-5");
var p6 = document.getElementById("p1-6");
var p7 = document.getElementById("p1-7");
var p8 = document.getElementById("p1-8");
var p9 = document.getElementById("p1-9");
var p10 = document.getElementById("p1-10");
var p11 = document.getElementById("p1-11");
var p12 = document.getElementById("p1-12");
var p13 = document.getElementById("p1-13");
var p14 = document.getElementById("p1-14");
var p15 = document.getElementById("p1-15");
var p16 = document.getElementById("p1-16");
var p17 = document.getElementById("p1-17");
var p18 = document.getElementById("p1-18");
var p19 = document.getElementById("p1-19");
var p20 = document.getElementById("p1-20");
var p21 = document.getElementById("p1-21");
var p22 = document.getElementById("p1-22");
var p23 = document.getElementById("p1-23");
var p24 = document.getElementById("p1-24");
var p25 = document.getElementById("p1-25");
var p26 = document.getElementById("p1-26");
var p27 = document.getElementById("p1-27");
var p28 = document.getElementById("p1-28");
var p29 = document.getElementById("p1-29");
var p30 = document.getElementById("p1-30");
var p31 = document.getElementById("p1-31");
var p32 = document.getElementById("p1-32");
var p33 = document.getElementById("p1-33");
var p34 = document.getElementById("p1-34");
var p35 = document.getElementById("p1-35");
var p36 = document.getElementById("p1-36");
var p37 = document.getElementById("p1-37");
var p38 = document.getElementById("p1-38");
var p39 = document.getElementById("p1-39");
var p40 = document.getElementById("p1-40");

function getP1Position() {
    if (dice === 1) {
        player1Position += 1;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    else if (dice === 2) {
        player1Position += 2;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    else if (dice === 3) {
        player1Position += 3;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    else if (dice === 4) {
        player1Position += 4;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    else if (dice === 5) {
        player1Position += 5;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    else if (dice === 6) {
        player1Position += 6;
        console.log("Player Position: ", player1Position);
        p1Vanish();
    }
    moveP1();
}

function moveP1() {
    // setTimeout(() => {
        if (player1Position === 0) {
            p0.classList.remove("hidden");
        }
        else if (player1Position === 1) {
            p1.classList.remove("hidden");
        }
        else if (player1Position === 2) {
            p2.classList.remove("hidden");
        }
        else if (player1Position === 3) {
            p3.classList.remove("hidden");
        }
        else if (player1Position === 4) {
            p4.classList.remove("hidden");
        }
        else if (player1Position === 5) {
            p5.classList.remove("hidden");
        }
        else if (player1Position === 6) {
            p6.classList.remove("hidden");
        }
        else if (player1Position === 7) {
            p7.classList.remove("hidden");
        }
        else if (player1Position === 8) {
            p8.classList.remove("hidden");
        }
        else if (player1Position === 9) {
            p9.classList.remove("hidden");
        }
        else if (player1Position === 10) {
            p10.classList.remove("hidden");
        }
        else if (player1Position === 11) {
            p11.classList.remove("hidden");
        }
        else if (player1Position === 12) {
            p12.classList.remove("hidden");
        }
        else if (player1Position === 13) {
            p13.classList.remove("hidden");
        }
        else if (player1Position === 14) {
            p14.classList.remove("hidden");
        }
        else if (player1Position === 15) {
            p15.classList.remove("hidden");
        }
        else if (player1Position === 16) {
            p16.classList.remove("hidden");
        }
        else if (player1Position === 17) {
            p17.classList.remove("hidden");
        }
        else if (player1Position === 18) {
            p18.classList.remove("hidden");
        }
        else if (player1Position === 19) {
            p19.classList.remove("hidden");
        }
        else if (player1Position === 20) {
            p20.classList.remove("hidden");
        }
        else if (player1Position === 21) {
            p21.classList.remove("hidden");
        }
        else if (player1Position === 22) {
            p22.classList.remove("hidden");
        }
        else if (player1Position === 23) {
            p23.classList.remove("hidden");
        }
        else if (player1Position === 24) {
            p24.classList.remove("hidden");
        }
        else if (player1Position === 25) {
            p25.classList.remove("hidden");
        }
        else if (player1Position === 26) {
            p26.classList.remove("hidden");
        }
        else if (player1Position === 27) {
            p27.classList.remove("hidden");
        }
        else if (player1Position === 28) {
            p28.classList.remove("hidden");
        }
        else if (player1Position === 29) {
            p29.classList.remove("hidden");
        }
        else if (player1Position === 30) {
            p30.classList.remove("hidden");
        }
        else if (player1Position === 31) {
            p31.classList.remove("hidden");
        }
        else if (player1Position === 32) {
            p32.classList.remove("hidden");
        }
        else if (player1Position === 33) {
            p33.classList.remove("hidden");
        }
        else if (player1Position === 34) {
            p34.classList.remove("hidden");
        }
        else if (player1Position === 35) {
            p35.classList.remove("hidden");
        }
        else if (player1Position === 36) {
            p36.classList.remove("hidden");
        }
        else if (player1Position === 37) {
            p37.classList.remove("hidden");
        }
        else if (player1Position === 38) {
            p38.classList.remove("hidden");
        }
        else if (player1Position === 39) {
            p39.classList.remove("hidden");
        }
        else if (player1Position === 40) {
            p40.classList.remove("hidden");
        }
        else if (player1Position > 40) {
            p40.classList.remove("hidden");
            player1Position = 40;
        }
    // }, 1000);
}

function p1Vanish() {
    p0.classList.add("hidden");
    p1.classList.add("hidden");
    p2.classList.add("hidden");
    p3.classList.add("hidden");
    p4.classList.add("hidden");
    p5.classList.add("hidden");
    p6.classList.add("hidden");
    p7.classList.add("hidden");
    p8.classList.add("hidden");
    p9.classList.add("hidden");
    p10.classList.add("hidden");
    p11.classList.add("hidden");
    p12.classList.add("hidden");
    p13.classList.add("hidden");
    p14.classList.add("hidden");
    p15.classList.add("hidden");
    p16.classList.add("hidden");
    p17.classList.add("hidden");
    p18.classList.add("hidden");
    p19.classList.add("hidden");
    p20.classList.add("hidden");
    p21.classList.add("hidden");
    p22.classList.add("hidden");
    p23.classList.add("hidden");
    p24.classList.add("hidden");
    p25.classList.add("hidden");
    p26.classList.add("hidden");
    p27.classList.add("hidden");
    p28.classList.add("hidden");
    p29.classList.add("hidden");
    p30.classList.add("hidden");
    p31.classList.add("hidden");
    p32.classList.add("hidden");
    p33.classList.add("hidden");
    p34.classList.add("hidden");
    p35.classList.add("hidden");
    p36.classList.add("hidden");
    p37.classList.add("hidden");
    p38.classList.add("hidden");
    p39.classList.add("hidden");
    p40.classList.add("hidden");
}

function Player1Stats(){
    var p1Lucky6Show = document.getElementById("p1-lucky6-points");
    p1Lucky6Show.innerText = p1Lucky6;
}