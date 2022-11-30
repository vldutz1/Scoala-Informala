let player1Points = 0;
let player2Points = 0;
let player1Position = 0;
let player2Position = 0;
let dice = 0;
let p1Lucky6 = 0;
let p2Lucky6 = 0;
let P1Turn = true;
let P2Turn = false;

function diceRollSound() {
    const diceSound = document.getElementById("dice-sound");
    diceSound.play();
}

function diceRollPlayer1() {
    diceRollSound();
    dice = Math.floor(Math.random() * 7);
    const diceImg = document.getElementById("dice-img");
    diceImg.classList.toggle("dice-roll");
    const rollButton = document.getElementById("rollbtn");
    rollButton.classList.toggle("hidden");
    const rollButtonP2 = document.getElementById("rollbtn2");
    const rollButtonFake = document.getElementById("rollbtnfake");
    rollButtonFake.classList.toggle("hidden");
    setTimeout(() => {
        const diceShow = document.getElementById("diceResult");
        if (dice === 0) {
            diceShow.innerText = "1";
            dice = 1;
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 1) {
            dice = 1;
            diceShow.innerText = "1";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 2) {
            dice = 2;
            diceShow.innerText = "2";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 3) {
            dice = 3;
            diceShow.innerText = "3";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 4) {
            dice = 4;
            diceShow.innerText = "4";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 5) {
            dice = 5;
            diceShow.innerText = "5";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
        }
        else if (dice === 6) {
            dice = 6;
            diceShow.innerText = "6";
            diceImg.classList.toggle("dice-roll");
            rollButtonFake.classList.toggle("hidden");
            rollButtonP2.classList.toggle("hidden");
            p1Lucky6 +=1;
            Player1Stats();
        }
        getP1Position();
    }, 2000);
    P1Turn = false;
    P2Turn = true;
}

function diceRollPlayer2() {
    diceRollSound();
    dice = Math.floor(Math.random() * 7);
    const diceImg = document.getElementById("dice-img");
    diceImg.classList.toggle("dice-roll");
    const rollButton = document.getElementById("rollbtn");
    const rollButtonP2 = document.getElementById("rollbtn2");
    rollButtonP2.classList.toggle("hidden");
    const rollButtonFake = document.getElementById("rollbtnfake");
    rollButtonFake.classList.toggle("hidden");
    setTimeout(() => {
        const diceShow = document.getElementById("diceResult");
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
            p2Lucky6 +=1;
            Player2Stats();
        }
        getP2Position();
    }, 2000);
    P1Turn = true;
    P2Turn = false;
}

let p0 = document.getElementById("p1-0");
let p1 = document.getElementById("p1-1");
let p2 = document.getElementById("p1-2");
let p3 = document.getElementById("p1-3");
let p4 = document.getElementById("p1-4");
let p5 = document.getElementById("p1-5");
let p6 = document.getElementById("p1-6");
let p7 = document.getElementById("p1-7");
let p8 = document.getElementById("p1-8");
let p9 = document.getElementById("p1-9");
let p10 = document.getElementById("p1-10");
let p11 = document.getElementById("p1-11");
let p12 = document.getElementById("p1-12");
let p13 = document.getElementById("p1-13");
let p14 = document.getElementById("p1-14");
let p15 = document.getElementById("p1-15");
let p16 = document.getElementById("p1-16");
let p17 = document.getElementById("p1-17");
let p18 = document.getElementById("p1-18");
let p19 = document.getElementById("p1-19");
let p20 = document.getElementById("p1-20");
let p21 = document.getElementById("p1-21");
let p22 = document.getElementById("p1-22");
let p23 = document.getElementById("p1-23");
let p24 = document.getElementById("p1-24");
let p25 = document.getElementById("p1-25");
let p26 = document.getElementById("p1-26");
let p27 = document.getElementById("p1-27");
let p28 = document.getElementById("p1-28");
let p29 = document.getElementById("p1-29");
let p30 = document.getElementById("p1-30");
let p31 = document.getElementById("p1-31");
let p32 = document.getElementById("p1-32");
let p33 = document.getElementById("p1-33");
let p34 = document.getElementById("p1-34");
let p35 = document.getElementById("p1-35");
let p36 = document.getElementById("p1-36");
let p37 = document.getElementById("p1-37");
let p38 = document.getElementById("p1-38");
let p39 = document.getElementById("p1-39");
let p40 = document.getElementById("p1-40");

let p2P0 = document.getElementById("p2-0");
let p2P1 = document.getElementById("p2-1");
let p2P2 = document.getElementById("p2-2");
let p2P3 = document.getElementById("p2-3");
let p2P4 = document.getElementById("p2-4");
let p2P5 = document.getElementById("p2-5");
let p2P6 = document.getElementById("p2-6");
let p2P7 = document.getElementById("p2-7");
let p2P8 = document.getElementById("p2-8");
let p2P9 = document.getElementById("p2-9");
let p2P10 = document.getElementById("p2-10");
let p2P11 = document.getElementById("p2-11");
let p2P12 = document.getElementById("p2-12");
let p2P13 = document.getElementById("p2-13");
let p2P14 = document.getElementById("p2-14");
let p2P15 = document.getElementById("p2-15");
let p2P16 = document.getElementById("p2-16");
let p2P17 = document.getElementById("p2-17");
let p2P18 = document.getElementById("p2-18");
let p2P19 = document.getElementById("p2-19");
let p2P20 = document.getElementById("p2-20");
let p2P21 = document.getElementById("p2-21");
let p2P22 = document.getElementById("p2-22");
let p2P23 = document.getElementById("p2-23");
let p2P24 = document.getElementById("p2-24");
let p2P25 = document.getElementById("p2-25");
let p2P26 = document.getElementById("p2-26");
let p2P27 = document.getElementById("p2-27");
let p2P28 = document.getElementById("p2-28");
let p2P29 = document.getElementById("p2-29");
let p2P30 = document.getElementById("p2-30");
let p2P31 = document.getElementById("p2-31");
let p2P32 = document.getElementById("p2-32");
let p2P33 = document.getElementById("p2-33");
let p2P34 = document.getElementById("p2-34");
let p2P35 = document.getElementById("p2-35");
let p2P36 = document.getElementById("p2-36");
let p2P37 = document.getElementById("p2-37");
let p2P38 = document.getElementById("p2-38");
let p2P39 = document.getElementById("p2-39");
let p2P40 = document.getElementById("p2-40");

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
    moveBack();
}

function getP2Position() {
    if (dice === 1) {
        player2Position += 1;
        console.log("Player2 Position: ", player2Position);
        p2Vanish();
    }
    else if (dice === 2) {
        player2Position += 2;
        console.log("Player2 Position: ", player2Position);
        p2Vanish();
    }
    else if (dice === 3) {
        player2Position += 3;
        console.log("Player2 Position: ", player2Position);
        p2Vanish();
    }
    else if (dice === 4) {
        player2Position += 4;
        console.log("Player2 Position: ", player2Position);
        p2Vanish();
    }
    else if (dice === 5) {
        player2Position += 5;
        console.log("Player Position: ", player2Position);
        p2Vanish();
    }
    else if (dice === 6) {
        player2Position += 6;
        console.log("Player Position: ", player2Position);
        p2Vanish();
    }
    moveP2();
    moveBack();
}

function moveP1() {
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
            decideWinner();
        }
        else if (player1Position > 40) {
            p40.classList.remove("hidden");
            player1Position = 40;
            decideWinner();
        }
}

function moveP2() {
        if (player2Position === 0) {
            p2P0.classList.remove("hidden");
        }
        else if (player2Position === 1) {
            p2P1.classList.remove("hidden");
        }
        else if (player2Position === 2) {
            p2P2.classList.remove("hidden");
        }
        else if (player2Position === 3) {
            p3P3.classList.remove("hidden");
        }
        else if (player2Position === 4) {
            p2P4.classList.remove("hidden");
        }
        else if (player2Position === 5) {
            p2P5.classList.remove("hidden");
        }
        else if (player2Position === 6) {
            p2P6.classList.remove("hidden");
        }
        else if (player2Position === 7) {
            p2P7.classList.remove("hidden");
        }
        else if (player2Position === 8) {
            p2P8.classList.remove("hidden");
        }
        else if (player2Position === 9) {
            p2P9.classList.remove("hidden");
        }
        else if (player2Position === 10) {
            p2P10.classList.remove("hidden");
        }
        else if (player2Position === 11) {
            p2P11.classList.remove("hidden");
        }
        else if (player2Position === 12) {
            p2P12.classList.remove("hidden");
        }
        else if (player2Position === 13) {
            p2P13.classList.remove("hidden");
        }
        else if (player2Position === 14) {
            p2P14.classList.remove("hidden");
        }
        else if (player2Position === 15) {
            p2P15.classList.remove("hidden");
        }
        else if (player2Position === 16) {
            p2P16.classList.remove("hidden");
        }
        else if (player2Position === 17) {
            p2P17.classList.remove("hidden");
        }
        else if (player2Position === 18) {
            p2P18.classList.remove("hidden");
        }
        else if (player2Position === 19) {
            p2P19.classList.remove("hidden");
        }
        else if (player2Position === 20) {
            p2P20.classList.remove("hidden");
        }
        else if (player2Position === 21) {
            p2P21.classList.remove("hidden");
        }
        else if (player2Position === 22) {
            p2P22.classList.remove("hidden");
        }
        else if (player2Position === 23) {
            p2P23.classList.remove("hidden");
        }
        else if (player2Position === 24) {
            p2P24.classList.remove("hidden");
        }
        else if (player2Position === 25) {
            p2P25.classList.remove("hidden");
        }
        else if (player2Position === 26) {
            p2P26.classList.remove("hidden");
        }
        else if (player2Position === 27) {
            p2P27.classList.remove("hidden");
        }
        else if (player2Position === 28) {
            p2P28.classList.remove("hidden");
        }
        else if (player2Position === 29) {
            p2P29.classList.remove("hidden");
        }
        else if (player2Position === 30) {
            p2P30.classList.remove("hidden");
        }
        else if (player2Position === 31) {
            p2P31.classList.remove("hidden");
        }
        else if (player2Position === 32) {
            p2P32.classList.remove("hidden");
        }
        else if (player2Position === 33) {
            p2P33.classList.remove("hidden");
        }
        else if (player2Position === 34) {
            p2P34.classList.remove("hidden");
        }
        else if (player2Position === 35) {
            p2P35.classList.remove("hidden");
        }
        else if (player2Position === 36) {
            p2P36.classList.remove("hidden");
        }
        else if (player2Position === 37) {
            p2P37.classList.remove("hidden");
        }
        else if (player2Position === 38) {
            p2P38.classList.remove("hidden");
        }
        else if (player2Position === 39) {
            p2P39.classList.remove("hidden");
        }
        else if (player2Position === 40) {
            p2P40.classList.remove("hidden");
            decideWinner();
        }
        else if (player2Position > 40) {
            p2P40.classList.remove("hidden");
            player2Position = 40;
            decideWinner();
        }
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

function p2Vanish() {
    p2P0.classList.add("hidden");
    p2P1.classList.add("hidden");
    p2P2.classList.add("hidden");
    p2P3.classList.add("hidden");
    p2P4.classList.add("hidden");
    p2P5.classList.add("hidden");
    p2P6.classList.add("hidden");
    p2P7.classList.add("hidden");
    p2P8.classList.add("hidden");
    p2P9.classList.add("hidden");
    p2P10.classList.add("hidden");
    p2P11.classList.add("hidden");
    p2P12.classList.add("hidden");
    p2P13.classList.add("hidden");
    p2P14.classList.add("hidden");
    p2P15.classList.add("hidden");
    p2P16.classList.add("hidden");
    p2P17.classList.add("hidden");
    p2P18.classList.add("hidden");
    p2P19.classList.add("hidden");
    p2P20.classList.add("hidden");
    p2P21.classList.add("hidden");
    p2P22.classList.add("hidden");
    p2P23.classList.add("hidden");
    p2P24.classList.add("hidden");
    p2P25.classList.add("hidden");
    p2P26.classList.add("hidden");
    p2P27.classList.add("hidden");
    p2P28.classList.add("hidden");
    p2P29.classList.add("hidden");
    p2P30.classList.add("hidden");
    p2P31.classList.add("hidden");
    p2P32.classList.add("hidden");
    p2P33.classList.add("hidden");
    p2P34.classList.add("hidden");
    p2P35.classList.add("hidden");
    p2P36.classList.add("hidden");
    p2P37.classList.add("hidden");
    p2P38.classList.add("hidden");
    p2P39.classList.add("hidden");
    p2P40.classList.add("hidden");
}

function Player1Stats(){
    const p1Lucky6Show = document.getElementById("p1-lucky6-points");
    p1Lucky6Show.innerText = p1Lucky6;
}

function Player2Stats() {
    const p2Lucky6Show = document.getElementById("p2-lucky6-points");
    p2Lucky6Show.innerText = p2Lucky6;
}

function winnerWindow() {
    const winWindow = document.getElementById("win-container");
    winWindow.classList.toggle("hidden");
}

function decideWinner() {
    const winAudio = document.getElementById("win-sound");
    if (player1Position === 40 || player1Position > 40) {
        winnerWindow();
        winAudio.play();
        const P1Won = document.getElementById("who-wins");
        P1Won.innerText = "1";
    }
    else if (player2Position === 40 || player2Position > 40) {
        winnerWindow();
        winAudio.play();
        const P2Won = document.getElementById("who-wins");
        P2Won.innerText = "2";
    }
}

function moveBack() {
    if (player1Position === 6) {
        setTimeout(() => {
            player1Position = 2;
        }, 2000);
        getP1Position();    
    }
    else if (player2Position === 6) {
        setTimeout(() => {
            player2Position = 2;
        }, 2000);
        getP2Position(); 
    }
}