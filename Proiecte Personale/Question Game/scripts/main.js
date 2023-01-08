const questionArea = document.getElementById("question-container");
let option1Box = document.getElementById("option1");
let option2Box = document.getElementById("option2");
let option3Box = document.getElementById("option3");
let option4Box = document.getElementById("option4");

const optionsArray = [option1Box, option2Box, option3Box, option4Box];
const moneylvl0 = document.getElementById("0");
const moneylvl1 = document.getElementById("100");
const moneylvl2 = document.getElementById("250");
const moneylvl3 = document.getElementById("500");
const moneylvl4 = document.getElementById("1k");
const moneylvl5 = document.getElementById("2500");
const moneylvl6 = document.getElementById("5k");
const moneylvl7 = document.getElementById("10k");
const moneylvl8 = document.getElementById("15k");
const moneylvl9 = document.getElementById("25k");
const moneylvl10 = document.getElementById("50k");
const moneylvl11 = document.getElementById("75k");
const moneylvl12 = document.getElementById("100k");
const moneylvl13 = document.getElementById("125k");
const moneylvl14 = document.getElementById("250k");
const moneylvl15 = document.getElementById("500k");
const moneylvl16 = document.getElementById("750k");
const moneylvl17 = document.getElementById("1mil");

const levelShow = document.getElementById("level-container");



function startGame() {
        document.getElementById("game-start-window").classList.toggle("hidden");
        moneylvl0.style.color = "green";
        levelShow.innerText = "Level 1";
        let random = Math.floor(Math.random() * 5);
        questionArea.innerText = questionsLvl1[random];
        if (questionArea.innerText === questionsLvl1[0]) {
            option1Box.innerText = l1Q1Answers[0]; // right
            option2Box.innerText = l1Q1Answers[1];
            option3Box.innerText = l1Q1Answers[2];
            option4Box.innerText = l1Q1Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[1]) {
            option1Box.innerText = l1Q2Answers[0];
            option2Box.innerText = l1Q2Answers[1];
            option3Box.innerText = l1Q2Answers[2];
            option4Box.innerText = l1Q2Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[2]) {
            option1Box.innerText = l1Q3Answers[0];
            option2Box.innerText = l1Q3Answers[1];
            option3Box.innerText = l1Q3Answers[2];
            option4Box.innerText = l1Q3Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[3]) {
            option1Box.innerText = l1Q4Answers[0];
            option2Box.innerText = l1Q4Answers[1];
            option3Box.innerText = l1Q4Answers[2];
            option4Box.innerText = l1Q4Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[4]) {
            option1Box.innerText = l1Q5Answers[0];
            option2Box.innerText = l1Q5Answers[1];
            option3Box.innerText = l1Q5Answers[2];
            option4Box.innerText = l1Q5Answers[3];
        }
}


function level2() {
    levelShow.innerText = "Level 2";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl2[random];
    if (questionArea.innerText === questionsLvl2[0]) {
        option1Box.innerText = l2Q1Answers[0]; // right
        option2Box.innerText = l2Q1Answers[1];
        option3Box.innerText = l2Q1Answers[2];
        option4Box.innerText = l2Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[1]) {
        option1Box.innerText = l2Q2Answers[0];
        option2Box.innerText = l2Q2Answers[1];
        option3Box.innerText = l2Q2Answers[2];
        option4Box.innerText = l2Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[2]) {
        option1Box.innerText = l2Q3Answers[0];
        option2Box.innerText = l2Q3Answers[1];
        option3Box.innerText = l2Q3Answers[2];
        option4Box.innerText = l2Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[3]) {
        option1Box.innerText = l2Q4Answers[0];
        option2Box.innerText = l2Q4Answers[1];
        option3Box.innerText = l2Q4Answers[2];
        option4Box.innerText = l2Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[4]) {
        option1Box.innerText = l2Q5Answers[0];
        option2Box.innerText = l2Q5Answers[1];
        option3Box.innerText = l2Q5Answers[2];
        option4Box.innerText = l2Q5Answers[3];
    }
}

function level3() {
    levelShow.innerText = "Level 3";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl3[random];
    if (questionArea.innerText === questionsLvl3[0]) {
        option1Box.innerText = l3Q1Answers[0];
        option2Box.innerText = l3Q1Answers[1];
        option3Box.innerText = l3Q1Answers[2];
        option4Box.innerText = l3Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[1]) {
        option1Box.innerText = l3Q2Answers[0];
        option2Box.innerText = l3Q2Answers[1];
        option3Box.innerText = l3Q2Answers[2];
        option4Box.innerText = l3Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[2]) {
        option1Box.innerText = l3Q3Answers[0];
        option2Box.innerText = l3Q3Answers[1];
        option3Box.innerText = l3Q3Answers[2];
        option4Box.innerText = l3Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[3]) {
        option1Box.innerText = l3Q4Answers[0];
        option2Box.innerText = l3Q4Answers[1];
        option3Box.innerText = l3Q4Answers[2];
        option4Box.innerText = l3Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[4]) {
        option1Box.innerText = l3Q5Answers[0];
        option2Box.innerText = l3Q5Answers[1];
        option3Box.innerText = l3Q5Answers[2];
        option4Box.innerText = l3Q5Answers[3];
    }
}

function level4() {
    levelShow.innerText = "Level 4";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl4[random];
    if (questionArea.innerText === questionsLvl4[0]) {
        option1Box.innerText = l4Q1Answers[0]; // right
        option2Box.innerText = l4Q1Answers[1];
        option3Box.innerText = l4Q1Answers[2];
        option4Box.innerText = l4Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl4[1]) {
        option1Box.innerText = l4Q2Answers[0];
        option2Box.innerText = l4Q2Answers[1];
        option3Box.innerText = l4Q2Answers[2]; // right
        option4Box.innerText = l4Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl4[2]) {
        option1Box.innerText = l4Q3Answers[0];
        option2Box.innerText = l4Q3Answers[1]; // right
        option3Box.innerText = l4Q3Answers[2];
        option4Box.innerText = l4Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl4[3]) {
        option1Box.innerText = l4Q4Answers[0];
        option2Box.innerText = l4Q4Answers[1];
        option3Box.innerText = l4Q4Answers[2];
        option4Box.innerText = l4Q4Answers[3];// right
    }
    else if (questionArea.innerText === questionsLvl4[4]) {
        option1Box.innerText = l4Q5Answers[0]; // right
        option2Box.innerText = l4Q5Answers[1];
        option3Box.innerText = l4Q5Answers[2];
        option4Box.innerText = l4Q5Answers[3];
    }
}

function level5() {
    levelShow.innerText = "Level 5";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl5[random];
    if (questionArea.innerText === questionsLvl5[0]) {
        option1Box.innerText = l5Q1Answers[0]; // right
        option2Box.innerText = l5Q1Answers[1];
        option3Box.innerText = l5Q1Answers[2];
        option4Box.innerText = l5Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl5[1]) {
        option1Box.innerText = l5Q2Answers[0];
        option2Box.innerText = l5Q2Answers[1];
        option3Box.innerText = l5Q2Answers[2];
        option4Box.innerText = l5Q2Answers[3]; // right 
    }
    else if (questionArea.innerText === questionsLvl5[2]) {
        option1Box.innerText = l5Q3Answers[0]; // right
        option2Box.innerText = l5Q3Answers[1];
        option3Box.innerText = l5Q3Answers[2];
        option4Box.innerText = l5Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl5[3]) {
        option1Box.innerText = l5Q4Answers[0];
        option2Box.innerText = l5Q4Answers[1];
        option3Box.innerText = l5Q4Answers[2]; // right
        option4Box.innerText = l5Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl5[4]) {
        option1Box.innerText = l5Q5Answers[0];
        option2Box.innerText = l5Q5Answers[1];
        option3Box.innerText = l5Q5Answers[2];
        option4Box.innerText = l5Q5Answers[3]; // right
    }
}

function level6() {
    levelShow.innerText = "Level 6";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl6[random];
    if (questionArea.innerText === questionsLvl6[0]) {
        option1Box.innerText = l6Q1Answers[0];
        option2Box.innerText = l6Q1Answers[1];
        option3Box.innerText = l6Q1Answers[2];
        option4Box.innerText = l6Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl6[1]) {
        option1Box.innerText = l6Q2Answers[0];
        option2Box.innerText = l6Q2Answers[1];
        option3Box.innerText = l6Q2Answers[2];
        option4Box.innerText = l6Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl6[2]) {
        option1Box.innerText = l6Q3Answers[0];
        option2Box.innerText = l6Q3Answers[1];
        option3Box.innerText = l6Q3Answers[2];
        option4Box.innerText = l6Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl6[3]) {
        option1Box.innerText = l6Q4Answers[0];
        option2Box.innerText = l6Q4Answers[1];
        option3Box.innerText = l6Q4Answers[2];
        option4Box.innerText = l6Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl6[4]) {
        option1Box.innerText = l6Q5Answers[0];
        option2Box.innerText = l6Q5Answers[1];
        option3Box.innerText = l6Q5Answers[2];
        option4Box.innerText = l6Q5Answers[3];
    }
}

function level7() {
    levelShow.innerText = "Level 7";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl7[random];
    if (questionArea.innerText === questionsLvl7[0]) {
        option1Box.innerText = l7Q1Answers[0];
        option2Box.innerText = l7Q1Answers[1];
        option3Box.innerText = l7Q1Answers[2];
        option4Box.innerText = l7Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl7[1]) {
        option1Box.innerText = l7Q2Answers[0];
        option2Box.innerText = l7Q2Answers[1];
        option3Box.innerText = l7Q2Answers[2];
        option4Box.innerText = l7Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl7[2]) {
        option1Box.innerText = l7Q3Answers[0];
        option2Box.innerText = l7Q3Answers[1];
        option3Box.innerText = l7Q3Answers[2];
        option4Box.innerText = l7Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl7[3]) {
        option1Box.innerText = l7Q4Answers[0];
        option2Box.innerText = l7Q4Answers[1];
        option3Box.innerText = l7Q4Answers[2];
        option4Box.innerText = l7Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl7[4]) {
        option1Box.innerText = l7Q5Answers[0];
        option2Box.innerText = l7Q5Answers[1];
        option3Box.innerText = l7Q5Answers[2];
        option4Box.innerText = l7Q5Answers[3];
    }
}

function level8() {
    levelShow.innerText = "Level 8";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl8[random];
    if (questionArea.innerText === questionsLvl8[0]) {
        option1Box.innerText = l8Q1Answers[0];
        option2Box.innerText = l8Q1Answers[1];
        option3Box.innerText = l8Q1Answers[2];
        option4Box.innerText = l8Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl8[1]) {
        option1Box.innerText = l8Q2Answers[0];
        option2Box.innerText = l8Q2Answers[1];
        option3Box.innerText = l8Q2Answers[2];
        option4Box.innerText = l8Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl8[2]) {
        option1Box.innerText = l8Q3Answers[0];
        option2Box.innerText = l8Q3Answers[1];
        option3Box.innerText = l8Q3Answers[2];
        option4Box.innerText = l8Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl8[3]) {
        option1Box.innerText = l8Q4Answers[0];
        option2Box.innerText = l8Q4Answers[1];
        option3Box.innerText = l8Q4Answers[2];
        option4Box.innerText = l8Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl8[4]) {
        option1Box.innerText = l8Q5Answers[0];
        option2Box.innerText = l8Q5Answers[1];
        option3Box.innerText = l8Q5Answers[2];
        option4Box.innerText = l8Q5Answers[3];
    }
}

function level9() {
    levelShow.innerText = "Level 9";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl9[random];
    if (questionArea.innerText === questionsLvl9[0]) {
        option1Box.innerText = l9Q1Answers[0];
        option2Box.innerText = l9Q1Answers[1];
        option3Box.innerText = l9Q1Answers[2];
        option4Box.innerText = l9Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl9[1]) {
        option1Box.innerText = l9Q2Answers[0];
        option2Box.innerText = l9Q2Answers[1];
        option3Box.innerText = l9Q2Answers[2];
        option4Box.innerText = l9Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl9[2]) {
        option1Box.innerText = l9Q3Answers[0];
        option2Box.innerText = l9Q3Answers[1];
        option3Box.innerText = l9Q3Answers[2];
        option4Box.innerText = l9Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl9[3]) {
        option1Box.innerText = l9Q4Answers[0];
        option2Box.innerText = l9Q4Answers[1];
        option3Box.innerText = l9Q4Answers[2];
        option4Box.innerText = l9Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl9[4]) {
        option1Box.innerText = l9Q5Answers[0];
        option2Box.innerText = l9Q5Answers[1];
        option3Box.innerText = l9Q5Answers[2];
        option4Box.innerText = l9Q5Answers[3];
    }
}

function level10() {
    levelShow.innerText = "Level 10";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl10[random];
    if (questionArea.innerText === questionsLvl10[0]) {
        option1Box.innerText = l10Q1Answers[0];
        option2Box.innerText = l10Q1Answers[1];
        option3Box.innerText = l10Q1Answers[2];
        option4Box.innerText = l10Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl10[1]) {
        option1Box.innerText = l10Q2Answers[0];
        option2Box.innerText = l10Q2Answers[1];
        option3Box.innerText = l10Q2Answers[2];
        option4Box.innerText = l10Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl10[2]) {
        option1Box.innerText = l10Q3Answers[0];
        option2Box.innerText = l10Q3Answers[1];
        option3Box.innerText = l10Q3Answers[2];
        option4Box.innerText = l10Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl10[3]) {
        option1Box.innerText = l10Q4Answers[0];
        option2Box.innerText = l10Q4Answers[1];
        option3Box.innerText = l10Q4Answers[2];
        option4Box.innerText = l10Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl10[4]) {
        option1Box.innerText = l10Q5Answers[0];
        option2Box.innerText = l10Q5Answers[1];
        option3Box.innerText = l10Q5Answers[2];
        option4Box.innerText = l10Q5Answers[3];
    }
}

function level11() {
    levelShow.innerText = "Level 11";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl11[random];
    if (questionArea.innerText === questionsLvl11[0]) {
        option1Box.innerText = l11Q1Answers[0];
        option2Box.innerText = l11Q1Answers[1];
        option3Box.innerText = l11Q1Answers[2];
        option4Box.innerText = l11Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl11[1]) {
        option1Box.innerText = l11Q2Answers[0];
        option2Box.innerText = l11Q2Answers[1];
        option3Box.innerText = l11Q2Answers[2];
        option4Box.innerText = l11Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl11[2]) {
        option1Box.innerText = l11Q3Answers[0];
        option2Box.innerText = l11Q3Answers[1];
        option3Box.innerText = l11Q3Answers[2];
        option4Box.innerText = l11Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl11[3]) {
        option1Box.innerText = l11Q4Answers[0];
        option2Box.innerText = l11Q4Answers[1];
        option3Box.innerText = l11Q4Answers[2];
        option4Box.innerText = l11Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl11[4]) {
        option1Box.innerText = l11Q5Answers[0];
        option2Box.innerText = l11Q5Answers[1];
        option3Box.innerText = l11Q5Answers[2];
        option4Box.innerText = l11Q5Answers[3];
    }
}

function level12() {
    levelShow.innerText = "Level 12";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl12[random];
    if (questionArea.innerText === questionsLvl12[0]) {
        option1Box.innerText = l12Q1Answers[0];
        option2Box.innerText = l12Q1Answers[1];
        option3Box.innerText = l12Q1Answers[2];
        option4Box.innerText = l12Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl12[1]) {
        option1Box.innerText = l12Q2Answers[0];
        option2Box.innerText = l12Q2Answers[1];
        option3Box.innerText = l12Q2Answers[2];
        option4Box.innerText = l12Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl12[2]) {
        option1Box.innerText = l12Q3Answers[0];
        option2Box.innerText = l12Q3Answers[1];
        option3Box.innerText = l12Q3Answers[2];
        option4Box.innerText = l12Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl12[3]) {
        option1Box.innerText = l12Q4Answers[0];
        option2Box.innerText = l12Q4Answers[1];
        option3Box.innerText = l12Q4Answers[2];
        option4Box.innerText = l12Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl12[4]) {
        option1Box.innerText = l12Q5Answers[0];
        option2Box.innerText = l12Q5Answers[1];
        option3Box.innerText = l12Q5Answers[2];
        option4Box.innerText = l12Q5Answers[3];
    }
}

function level13() {
    levelShow.innerText = "Level 13";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl13[random];
    if (questionArea.innerText === questionsLvl13[0]) {
        option1Box.innerText = l13Q1Answers[0];
        option2Box.innerText = l13Q1Answers[1];
        option3Box.innerText = l13Q1Answers[2];
        option4Box.innerText = l13Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl13[1]) {
        option1Box.innerText = l13Q2Answers[0];
        option2Box.innerText = l13Q2Answers[1];
        option3Box.innerText = l13Q2Answers[2];
        option4Box.innerText = l13Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl13[2]) {
        option1Box.innerText = l13Q3Answers[0];
        option2Box.innerText = l13Q3Answers[1];
        option3Box.innerText = l13Q3Answers[2];
        option4Box.innerText = l13Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl13[3]) {
        option1Box.innerText = l13Q4Answers[0];
        option2Box.innerText = l13Q4Answers[1];
        option3Box.innerText = l13Q4Answers[2];
        option4Box.innerText = l13Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl13[4]) {
        option1Box.innerText = l13Q5Answers[0];
        option2Box.innerText = l13Q5Answers[1];
        option3Box.innerText = l13Q5Answers[2];
        option4Box.innerText = l13Q5Answers[3];
    }
}

function level14() {
    levelShow.innerText = "Level 14";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl14[random];
    if (questionArea.innerText === questionsLvl14[0]) {
        option1Box.innerText = l14Q1Answers[0];
        option2Box.innerText = l14Q1Answers[1];
        option3Box.innerText = l14Q1Answers[2];
        option4Box.innerText = l14Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl14[1]) {
        option1Box.innerText = l14Q2Answers[0];
        option2Box.innerText = l14Q2Answers[1];
        option3Box.innerText = l14Q2Answers[2];
        option4Box.innerText = l14Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl14[2]) {
        option1Box.innerText = l14Q3Answers[0];
        option2Box.innerText = l14Q3Answers[1];
        option3Box.innerText = l14Q3Answers[2];
        option4Box.innerText = l14Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl14[3]) {
        option1Box.innerText = l14Q4Answers[0];
        option2Box.innerText = l14Q4Answers[1];
        option3Box.innerText = l14Q4Answers[2];
        option4Box.innerText = l14Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl14[4]) {
        option1Box.innerText = l14Q5Answers[0];
        option2Box.innerText = l14Q5Answers[1];
        option3Box.innerText = l14Q5Answers[2];
        option4Box.innerText = l14Q5Answers[3];
    }
}

function level15() {
    levelShow.innerText = "Level 15";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl15[random];
    if (questionArea.innerText === questionsLvl15[0]) {
        option1Box.innerText = l15Q1Answers[0];
        option2Box.innerText = l15Q1Answers[1];
        option3Box.innerText = l15Q1Answers[2];
        option4Box.innerText = l15Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl15[1]) {
        option1Box.innerText = l15Q2Answers[0];
        option2Box.innerText = l15Q2Answers[1];
        option3Box.innerText = l15Q2Answers[2];
        option4Box.innerText = l15Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl15[2]) {
        option1Box.innerText = l15Q3Answers[0];
        option2Box.innerText = l15Q3Answers[1];
        option3Box.innerText = l15Q3Answers[2];
        option4Box.innerText = l15Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl15[3]) {
        option1Box.innerText = l15Q4Answers[0];
        option2Box.innerText = l15Q4Answers[1];
        option3Box.innerText = l15Q4Answers[2];
        option4Box.innerText = l15Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl15[4]) {
        option1Box.innerText = l15Q5Answers[0];
        option2Box.innerText = l15Q5Answers[1];
        option3Box.innerText = l15Q5Answers[2];
        option4Box.innerText = l15Q5Answers[3];
    }
}

function level16() {
    levelShow.innerText = "Level 16";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl16[random];
    if (questionArea.innerText === questionsLvl16[0]) {
        option1Box.innerText = l16Q1Answers[0];
        option2Box.innerText = l16Q1Answers[1];
        option3Box.innerText = l16Q1Answers[2];
        option4Box.innerText = l16Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl16[1]) {
        option1Box.innerText = l16Q2Answers[0];
        option2Box.innerText = l16Q2Answers[1];
        option3Box.innerText = l16Q2Answers[2];
        option4Box.innerText = l16Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl16[2]) {
        option1Box.innerText = l16Q3Answers[0];
        option2Box.innerText = l16Q3Answers[1];
        option3Box.innerText = l16Q3Answers[2];
        option4Box.innerText = l16Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl16[3]) {
        option1Box.innerText = l16Q4Answers[0];
        option2Box.innerText = l16Q4Answers[1];
        option3Box.innerText = l16Q4Answers[2];
        option4Box.innerText = l16Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl16[4]) {
        option1Box.innerText = l16Q5Answers[0];
        option2Box.innerText = l16Q5Answers[1];
        option3Box.innerText = l16Q5Answers[2];
        option4Box.innerText = l16Q5Answers[3];
    }
}

function level17() {
    levelShow.innerText = "Level 17";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl17[random];
    if (questionArea.innerText === questionsLvl17[0]) {
        option1Box.innerText = l17Q1Answers[0];
        option2Box.innerText = l17Q1Answers[1];
        option3Box.innerText = l17Q1Answers[2];
        option4Box.innerText = l17Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl17[1]) {
        option1Box.innerText = l17Q2Answers[0];
        option2Box.innerText = l17Q2Answers[1];
        option3Box.innerText = l17Q2Answers[2];
        option4Box.innerText = l17Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl17[2]) {
        option1Box.innerText = l17Q3Answers[0];
        option2Box.innerText = l17Q3Answers[1];
        option3Box.innerText = l17Q3Answers[2];
        option4Box.innerText = l17Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl17[3]) {
        option1Box.innerText = l17Q4Answers[0];
        option2Box.innerText = l17Q4Answers[1];
        option3Box.innerText = l17Q4Answers[2];
        option4Box.innerText = l17Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl17[4]) {
        option1Box.innerText = l17Q5Answers[0];
        option2Box.innerText = l17Q5Answers[1];
        option3Box.innerText = l17Q5Answers[2];
        option4Box.innerText = l17Q5Answers[3];
    }
}

function selectOption1() {
    if (questionArea.innerText === questionsLvl1[0] && option1Box.innerText === l1Q1Right
        || questionArea.innerText === questionsLvl1[1] && option1Box.innerText === l1Q2Right
        || questionArea.innerText === questionsLvl1[2] && option1Box.innerText === l1Q3Right
        || questionArea.innerText === questionsLvl1[3] && option1Box.innerText === l1Q4Right
        || questionArea.innerText === questionsLvl1[4] && option1Box.innerText === l1Q5Right) {
        level2();
        setMoneyWhite();
        moneylvl1.style.color = "green";
        alert("correct - go to level 2");

    }
    else if (questionArea.innerText === questionsLvl2[0] && option1Box.innerText === l2Q1Right
        || questionArea.innerText === questionsLvl2[1] && option1Box.innerText === l2Q2Right
        || questionArea.innerText === questionsLvl2[2] && option1Box.innerText === l2Q3Right
        || questionArea.innerText === questionsLvl2[3] && option1Box.innerText === l2Q4Right
        || questionArea.innerText === questionsLvl2[4] && option1Box.innerText === l2Q5Right) { //lvl 2
        level3();
        setMoneyWhite();
        moneylvl2.style.color = "green";
        alert("Correct - Go to Level 3");
    }
    else if (questionArea.innerText === questionsLvl3[0] && option1Box.innerText === l3Q1Right
        || questionArea.innerText === questionsLvl3[1] && option1Box.innerText === l3Q2Right
        || questionArea.innerText === questionsLvl3[2] && option1Box.innerText === l3Q3Right
        || questionArea.innerText === questionsLvl3[3] && option1Box.innerText === l3Q4Right
        || questionArea.innerText === questionsLvl3[4] && option1Box.innerText === l3Q5Right) { //lvl 3
        level4();
        setMoneyWhite();
        moneylvl3.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl4[0] && option1Box.innerText === l4Q1Right
        || questionArea.innerText === questionsLvl4[1] && option1Box.innerText === l4Q2Right
        || questionArea.innerText === questionsLvl4[2] && option1Box.innerText === l4Q3Right
        || questionArea.innerText === questionsLvl4[3] && option1Box.innerText === l4Q4Right
        || questionArea.innerText === questionsLvl4[4] && option1Box.innerText === l4Q5Right) { //op 1 lvl 4
        level5();
        setMoneyWhite();
        moneylvl4.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl5[0] && option1Box.innerText === l5Q1Right
        || questionArea.innerText === questionsLvl5[1] && option1Box.innerText === l5Q2Right
        || questionArea.innerText === questionsLvl5[2] && option1Box.innerText === l5Q3Right
        || questionArea.innerText === questionsLvl5[3] && option1Box.innerText === l5Q4Right
        || questionArea.innerText === questionsLvl5[4] && option1Box.innerText === l5Q5Right) { //op 1 lvl 5
        level6();
        setMoneyWhite();
        moneylvl5.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl6[0] && option1Box.innerText === l6Q1Right
        || questionArea.innerText === questionsLvl6[1] && option1Box.innerText === l6Q2Right
        || questionArea.innerText === questionsLvl6[2] && option1Box.innerText === l6Q3Right
        || questionArea.innerText === questionsLvl6[3] && option1Box.innerText === l6Q4Right
        || questionArea.innerText === questionsLvl6[4] && option1Box.innerText === l6Q5Right) { //op 1 lvl 6
        level7();
        setMoneyWhite();
        moneylvl6.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl7[0] && option1Box.innerText === l7Q1Right
        || questionArea.innerText === questionsLvl7[1] && option1Box.innerText === l7Q2Right
        || questionArea.innerText === questionsLvl7[2] && option1Box.innerText === l7Q3Right
        || questionArea.innerText === questionsLvl7[3] && option1Box.innerText === l7Q4Right
        || questionArea.innerText === questionsLvl7[4] && option1Box.innerText === l7Q5Right) { //op 1 lvl 7
        level8();
        setMoneyWhite();
        moneylvl7.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl8[0] && option1Box.innerText === l8Q1Right
        || questionArea.innerText === questionsLvl8[1] && option1Box.innerText === l8Q2Right
        || questionArea.innerText === questionsLvl8[2] && option1Box.innerText === l8Q3Right
        || questionArea.innerText === questionsLvl8[3] && option1Box.innerText === l8Q4Right
        || questionArea.innerText === questionsLvl8[4] && option1Box.innerText === l8Q5Right) { //op 1 lvl 8
        level9();
        setMoneyWhite();
        moneylvl8.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl9[0] && option1Box.innerText === l9Q1Right
        || questionArea.innerText === questionsLvl9[1] && option1Box.innerText === l9Q2Right
        || questionArea.innerText === questionsLvl9[2] && option1Box.innerText === l9Q3Right
        || questionArea.innerText === questionsLvl9[3] && option1Box.innerText === l9Q4Right
        || questionArea.innerText === questionsLvl9[4] && option1Box.innerText === l9Q5Right) { //op 1 lvl 9
        level10();
        setMoneyWhite();
        moneylvl9.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl10[0] && option1Box.innerText === l10Q1Right
        || questionArea.innerText === questionsLvl10[1] && option1Box.innerText === l10Q2Right
        || questionArea.innerText === questionsLvl10[2] && option1Box.innerText === l10Q3Right
        || questionArea.innerText === questionsLvl10[3] && option1Box.innerText === l10Q4Right
        || questionArea.innerText === questionsLvl10[4] && option1Box.innerText === l10Q5Right) { //op 1 lvl 10
        level11();
        setMoneyWhite();
        moneylvl10.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl11[0] && option1Box.innerText === l11Q1Right
        || questionArea.innerText === questionsLvl11[1] && option1Box.innerText === l11Q2Right
        || questionArea.innerText === questionsLvl11[2] && option1Box.innerText === l11Q3Right
        || questionArea.innerText === questionsLvl11[3] && option1Box.innerText === l11Q4Right
        || questionArea.innerText === questionsLvl11[4] && option1Box.innerText === l11Q5Right) { //op 1 lvl 11
        level12();
        setMoneyWhite();
        moneylvl11.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl12[0] && option1Box.innerText === l12Q1Right
        || questionArea.innerText === questionsLvl12[1] && option1Box.innerText === l12Q2Right
        || questionArea.innerText === questionsLvl12[2] && option1Box.innerText === l12Q3Right
        || questionArea.innerText === questionsLvl12[3] && option1Box.innerText === l12Q4Right
        || questionArea.innerText === questionsLvl12[4] && option1Box.innerText === l12Q5Right) { //op 1 lvl 12
        level13();
        setMoneyWhite();
        moneylvl12.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl13[0] && option1Box.innerText === l13Q1Right
        || questionArea.innerText === questionsLvl13[1] && option1Box.innerText === l13Q2Right
        || questionArea.innerText === questionsLvl13[2] && option1Box.innerText === l13Q3Right
        || questionArea.innerText === questionsLvl13[3] && option1Box.innerText === l13Q4Right
        || questionArea.innerText === questionsLvl13[4] && option1Box.innerText === l13Q5Right) { //op 1 lvl 13
        level14();
        setMoneyWhite();
        moneylvl13.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl14[0] && option1Box.innerText === l14Q1Right
        || questionArea.innerText === questionsLvl14[1] && option1Box.innerText === l14Q2Right
        || questionArea.innerText === questionsLvl14[2] && option1Box.innerText === l14Q3Right
        || questionArea.innerText === questionsLvl14[3] && option1Box.innerText === l14Q4Right
        || questionArea.innerText === questionsLvl14[4] && option1Box.innerText === l14Q5Right) { //op 1 lvl 14
        level15();
        setMoneyWhite();
        moneylvl14.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl15[0] && option1Box.innerText === l15Q1Right
        || questionArea.innerText === questionsLvl15[1] && option1Box.innerText === l15Q2Right
        || questionArea.innerText === questionsLvl15[2] && option1Box.innerText === l15Q3Right
        || questionArea.innerText === questionsLvl15[3] && option1Box.innerText === l15Q4Right
        || questionArea.innerText === questionsLvl15[4] && option1Box.innerText === l15Q5Right) { //op 1 lvl 15
        level16();
        setMoneyWhite();
        moneylvl15.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl16[0] && option1Box.innerText === l16Q1Right
        || questionArea.innerText === questionsLvl16[1] && option1Box.innerText === l16Q2Right
        || questionArea.innerText === questionsLvl16[2] && option1Box.innerText === l16Q3Right
        || questionArea.innerText === questionsLvl16[3] && option1Box.innerText === l16Q4Right
        || questionArea.innerText === questionsLvl16[4] && option1Box.innerText === l16Q5Right) { //op 1 lvl 16
        level17();
        setMoneyWhite();
        moneylvl16.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl17[0] && option1Box.innerText === l17Q1Right
        || questionArea.innerText === questionsLvl17[1] && option1Box.innerText === l17Q2Right
        || questionArea.innerText === questionsLvl17[2] && option1Box.innerText === l17Q3Right
        || questionArea.innerText === questionsLvl17[3] && option1Box.innerText === l17Q4Right
        || questionArea.innerText === questionsLvl17[4] && option1Box.innerText === l17Q5Right) { //op 1 lvl 17
        setMoneyWhite();
        moneylvl17.style.color = "green";
        alert("Correct");
    }
    else {
        wrongAnswer();
    }
}

function selectOption2() {
    if (questionArea.innerText === questionsLvl1[0] && option2Box.innerText === l1Q1Right
        || questionArea.innerText === questionsLvl1[1] && option2Box.innerText === l1Q2Right
        || questionArea.innerText === questionsLvl1[2] && option2Box.innerText === l1Q3Right
        || questionArea.innerText === questionsLvl1[3] && option2Box.innerText === l1Q4Right
        || questionArea.innerText === questionsLvl1[4] && option2Box.innerText === l1Q5Right) {//lvl 1
        level2();
        setMoneyWhite();
        moneylvl1.style.color = "green";
        alert("Correct - Go to Level 2");
    }
    else if (questionArea.innerText === questionsLvl2[0] && option2Box.innerText === l2Q1Right
        || questionArea.innerText === questionsLvl2[1] && option2Box.innerText === l2Q2Right
        || questionArea.innerText === questionsLvl2[2] && option2Box.innerText === l2Q3Right
        || questionArea.innerText === questionsLvl2[3] && option2Box.innerText === l2Q4Right
        || questionArea.innerText === questionsLvl2[4] && option2Box.innerText === l2Q5Right) { //lvl 2
        level3();
        setMoneyWhite();
        moneylvl2.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl3[0] && option2Box.innerText === l3Q1Right
        || questionArea.innerText === questionsLvl3[1] && option2Box.innerText === l3Q2Right
        || questionArea.innerText === questionsLvl3[2] && option2Box.innerText === l3Q3Right
        || questionArea.innerText === questionsLvl3[3] && option2Box.innerText === l3Q4Right
        || questionArea.innerText === questionsLvl3[4] && option2Box.innerText === l3Q5Right) { //lvl 3
        level4();
        setMoneyWhite();
        moneylvl3.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl4[0] && option2Box.innerText === l4Q1Right
        || questionArea.innerText === questionsLvl4[1] && option2Box.innerText === l4Q2Right
        || questionArea.innerText === questionsLvl4[2] && option2Box.innerText === l4Q3Right
        || questionArea.innerText === questionsLvl4[3] && option2Box.innerText === l4Q4Right
        || questionArea.innerText === questionsLvl4[4] && option2Box.innerText === l4Q5Right) { //lvl 4
        level5();
        setMoneyWhite();
        moneylvl4.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl5[0] && option2Box.innerText === l5Q1Right
        || questionArea.innerText === questionsLvl5[1] && option2Box.innerText === l5Q2Right
        || questionArea.innerText === questionsLvl5[2] && option2Box.innerText === l5Q3Right
        || questionArea.innerText === questionsLvl5[3] && option2Box.innerText === l5Q4Right
        || questionArea.innerText === questionsLvl5[4] && option2Box.innerText === l5Q5Right) { //lvl 5
        level6();
        setMoneyWhite();
        moneylvl5.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl6[0] && option2Box.innerText === l6Q1Right
        || questionArea.innerText === questionsLvl6[1] && option2Box.innerText === l6Q2Right
        || questionArea.innerText === questionsLvl6[2] && option2Box.innerText === l6Q3Right
        || questionArea.innerText === questionsLvl6[3] && option2Box.innerText === l6Q4Right
        || questionArea.innerText === questionsLvl6[4] && option2Box.innerText === l6Q5Right) { //op 2 lvl 6
        level7();
        setMoneyWhite();
        moneylvl6.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl7[0] && option2Box.innerText === l7Q1Right
        || questionArea.innerText === questionsLvl7[1] && option2Box.innerText === l7Q2Right
        || questionArea.innerText === questionsLvl7[2] && option2Box.innerText === l7Q3Right
        || questionArea.innerText === questionsLvl7[3] && option2Box.innerText === l7Q4Right
        || questionArea.innerText === questionsLvl7[4] && option2Box.innerText === l7Q5Right) { //op 2 lvl 7
        level8();
        setMoneyWhite();
        moneylvl7.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl8[0] && option2Box.innerText === l8Q1Right
        || questionArea.innerText === questionsLvl8[1] && option2Box.innerText === l8Q2Right
        || questionArea.innerText === questionsLvl8[2] && option2Box.innerText === l8Q3Right
        || questionArea.innerText === questionsLvl8[3] && option2Box.innerText === l8Q4Right
        || questionArea.innerText === questionsLvl8[4] && option2Box.innerText === l8Q5Right) { //op 2 lvl 8
        level9();
        setMoneyWhite();
        moneylvl8.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl9[0] && option2Box.innerText === l9Q1Right
        || questionArea.innerText === questionsLvl9[1] && option2Box.innerText === l9Q2Right
        || questionArea.innerText === questionsLvl9[2] && option2Box.innerText === l9Q3Right
        || questionArea.innerText === questionsLvl9[3] && option2Box.innerText === l9Q4Right
        || questionArea.innerText === questionsLvl9[4] && option2Box.innerText === l9Q5Right) { //op 2 lvl 9
        level10();
        setMoneyWhite();
        moneylvl9.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl10[0] && option2Box.innerText === l10Q1Right
        || questionArea.innerText === questionsLvl10[1] && option2Box.innerText === l10Q2Right
        || questionArea.innerText === questionsLvl10[2] && option2Box.innerText === l10Q3Right
        || questionArea.innerText === questionsLvl10[3] && option2Box.innerText === l10Q4Right
        || questionArea.innerText === questionsLvl10[4] && option2Box.innerText === l10Q5Right) { //op 2 lvl 10
        level11();
        setMoneyWhite();
        moneylvl10.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl11[0] && option2Box.innerText === l11Q1Right
        || questionArea.innerText === questionsLvl11[1] && option2Box.innerText === l11Q2Right
        || questionArea.innerText === questionsLvl11[2] && option2Box.innerText === l11Q3Right
        || questionArea.innerText === questionsLvl11[3] && option2Box.innerText === l11Q4Right
        || questionArea.innerText === questionsLvl11[4] && option2Box.innerText === l11Q5Right) { //op 2 lvl 11
        level12();
        setMoneyWhite();
        moneylvl11.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl12[0] && option2Box.innerText === l12Q1Right
        || questionArea.innerText === questionsLvl12[1] && option2Box.innerText === l12Q2Right
        || questionArea.innerText === questionsLvl12[2] && option2Box.innerText === l12Q3Right
        || questionArea.innerText === questionsLvl12[3] && option2Box.innerText === l12Q4Right
        || questionArea.innerText === questionsLvl12[4] && option2Box.innerText === l12Q5Right) { //op 2 lvl 12
        level13();
        setMoneyWhite();
        moneylvl12.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl13[0] && option2Box.innerText === l13Q1Right
        || questionArea.innerText === questionsLvl13[1] && option2Box.innerText === l13Q2Right
        || questionArea.innerText === questionsLvl13[2] && option2Box.innerText === l13Q3Right
        || questionArea.innerText === questionsLvl13[3] && option2Box.innerText === l13Q4Right
        || questionArea.innerText === questionsLvl13[4] && option2Box.innerText === l13Q5Right) { //op 2 lvl 13
        level14();
        setMoneyWhite();
        moneylvl13.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl14[0] && option2Box.innerText === l14Q1Right
        || questionArea.innerText === questionsLvl14[1] && option2Box.innerText === l14Q2Right
        || questionArea.innerText === questionsLvl14[2] && option2Box.innerText === l14Q3Right
        || questionArea.innerText === questionsLvl14[3] && option2Box.innerText === l14Q4Right
        || questionArea.innerText === questionsLvl14[4] && option2Box.innerText === l14Q5Right) { //op 2 lvl 14
        level15();
        setMoneyWhite();
        moneylvl14.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl15[0] && option2Box.innerText === l15Q1Right
        || questionArea.innerText === questionsLvl15[1] && option2Box.innerText === l15Q2Right
        || questionArea.innerText === questionsLvl15[2] && option2Box.innerText === l15Q3Right
        || questionArea.innerText === questionsLvl15[3] && option2Box.innerText === l15Q4Right
        || questionArea.innerText === questionsLvl15[4] && option2Box.innerText === l15Q5Right) { //op 2 lvl 15
        level16();
        setMoneyWhite();
        moneylvl15.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl16[0] && option2Box.innerText === l16Q1Right
        || questionArea.innerText === questionsLvl16[1] && option2Box.innerText === l16Q2Right
        || questionArea.innerText === questionsLvl16[2] && option2Box.innerText === l16Q3Right
        || questionArea.innerText === questionsLvl16[3] && option2Box.innerText === l16Q4Right
        || questionArea.innerText === questionsLvl16[4] && option2Box.innerText === l16Q5Right) { //op 2 lvl 16
        level17();
        setMoneyWhite();
        moneylvl16.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl17[0] && option2Box.innerText === l17Q1Right
        || questionArea.innerText === questionsLvl17[1] && option2Box.innerText === l17Q2Right
        || questionArea.innerText === questionsLvl17[2] && option2Box.innerText === l17Q3Right
        || questionArea.innerText === questionsLvl17[3] && option2Box.innerText === l17Q4Right
        || questionArea.innerText === questionsLvl17[4] && option2Box.innerText === l17Q5Right) { //op 2 lvl 17
        setMoneyWhite();
        moneylvl17.style.color = "green";
        alert("Correct");
    }
    else {
        wrongAnswer();
    }

}

function selectOption3() {
    if (questionArea.innerText === questionsLvl1[0] && option3Box.innerText === l1Q1Right
        || questionArea.innerText === questionsLvl1[1] && option3Box.innerText === l1Q2Right
        || questionArea.innerText === questionsLvl1[2] && option3Box.innerText === l1Q3Right
        || questionArea.innerText === questionsLvl1[3] && option3Box.innerText === l1Q3Right
        || questionArea.innerText === questionsLvl1[4] && option3Box.innerText === l1Q4Right
        || questionArea.innerText === questionsLvl1[5] && option3Box.innerText === l1Q5Right) {
        level2();
        setMoneyWhite();
        moneylvl1.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl2[0] && option3Box.innerText === l2Q1Right
        || questionArea.innerText === questionsLvl2[1] && option3Box.innerText === l2Q2Right
        || questionArea.innerText === questionsLvl2[2] && option3Box.innerText === l2Q3Right
        || questionArea.innerText === questionsLvl2[3] && option3Box.innerText === l2Q4Right
        || questionArea.innerText === questionsLvl2[4] && option3Box.innerText === l2Q5Right) { //lvl 2
        level3();
        setMoneyWhite();
        moneylvl2.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl3[0] && option3Box.innerText === l3Q1Right
        || questionArea.innerText === questionsLvl3[1] && option3Box.innerText === l3Q2Right
        || questionArea.innerText === questionsLvl3[2] && option3Box.innerText === l3Q3Right
        || questionArea.innerText === questionsLvl3[3] && option3Box.innerText === l3Q4Right
        || questionArea.innerText === questionsLvl3[4] && option3Box.innerText === l3Q5Right) { //lvl 3
        level4();
        setMoneyWhite();
        moneylvl3.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl4[0] && option3Box.innerText === l4Q1Right
        || questionArea.innerText === questionsLvl4[1] && option3Box.innerText === l4Q2Right
        || questionArea.innerText === questionsLvl4[2] && option3Box.innerText === l4Q3Right
        || questionArea.innerText === questionsLvl4[3] && option3Box.innerText === l4Q4Right
        || questionArea.innerText === questionsLvl4[4] && option3Box.innerText === l4Q5Right) { //lvl 4
        level5();
        setMoneyWhite();
        moneylvl4.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl5[0] && option3Box.innerText === l5Q1Right
        || questionArea.innerText === questionsLvl5[1] && option3Box.innerText === l5Q2Right
        || questionArea.innerText === questionsLvl5[2] && option3Box.innerText === l5Q3Right
        || questionArea.innerText === questionsLvl5[3] && option3Box.innerText === l5Q4Right
        || questionArea.innerText === questionsLvl5[4] && option3Box.innerText === l5Q5Right) { //lvl 5
        level6();
        setMoneyWhite();
        moneylvl5.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl6[0] && option3Box.innerText === l6Q1Right
        || questionArea.innerText === questionsLvl6[1] && option3Box.innerText === l6Q2Right
        || questionArea.innerText === questionsLvl6[2] && option3Box.innerText === l6Q3Right
        || questionArea.innerText === questionsLvl6[3] && option3Box.innerText === l6Q4Right
        || questionArea.innerText === questionsLvl6[4] && option3Box.innerText === l6Q5Right) { //op 3 lvl 6
        level7();
        setMoneyWhite();
        moneylvl6.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl7[0] && option3Box.innerText === l7Q1Right
        || questionArea.innerText === questionsLvl7[1] && option3Box.innerText === l7Q2Right
        || questionArea.innerText === questionsLvl7[2] && option3Box.innerText === l7Q3Right
        || questionArea.innerText === questionsLvl7[3] && option3Box.innerText === l7Q4Right
        || questionArea.innerText === questionsLvl7[4] && option3Box.innerText === l7Q5Right) { //op 3 lvl 7
        level8();
        setMoneyWhite();
        moneylvl7.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl8[0] && option3Box.innerText === l8Q1Right
        || questionArea.innerText === questionsLvl8[1] && option3Box.innerText === l8Q2Right
        || questionArea.innerText === questionsLvl8[2] && option3Box.innerText === l8Q3Right
        || questionArea.innerText === questionsLvl8[3] && option3Box.innerText === l8Q4Right
        || questionArea.innerText === questionsLvl8[4] && option3Box.innerText === l8Q5Right) { //op 3 lvl 8
        level9();
        setMoneyWhite();
        moneylvl8.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl9[0] && option3Box.innerText === l9Q1Right
        || questionArea.innerText === questionsLvl9[1] && option3Box.innerText === l9Q2Right
        || questionArea.innerText === questionsLvl9[2] && option3Box.innerText === l9Q3Right
        || questionArea.innerText === questionsLvl9[3] && option3Box.innerText === l9Q4Right
        || questionArea.innerText === questionsLvl9[4] && option3Box.innerText === l9Q5Right) { //op 3 lvl 9
        level10();
        setMoneyWhite();
        moneylvl9.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl10[0] && option3Box.innerText === l10Q1Right
        || questionArea.innerText === questionsLvl10[1] && option3Box.innerText === l10Q2Right
        || questionArea.innerText === questionsLvl10[2] && option3Box.innerText === l10Q3Right
        || questionArea.innerText === questionsLvl10[3] && option3Box.innerText === l10Q4Right
        || questionArea.innerText === questionsLvl10[4] && option3Box.innerText === l10Q5Right) { //op 3 lvl 10
        level11();
        setMoneyWhite();
        moneylvl10.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl11[0] && option3Box.innerText === l11Q1Right
        || questionArea.innerText === questionsLvl11[1] && option3Box.innerText === l11Q2Right
        || questionArea.innerText === questionsLvl11[2] && option3Box.innerText === l11Q3Right
        || questionArea.innerText === questionsLvl11[3] && option3Box.innerText === l11Q4Right
        || questionArea.innerText === questionsLvl11[4] && option3Box.innerText === l11Q5Right) { //op 3 lvl 11
        level12();
        setMoneyWhite();
        moneylvl11.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl12[0] && option3Box.innerText === l12Q1Right
        || questionArea.innerText === questionsLvl12[1] && option3Box.innerText === l12Q2Right
        || questionArea.innerText === questionsLvl12[2] && option3Box.innerText === l12Q3Right
        || questionArea.innerText === questionsLvl12[3] && option3Box.innerText === l12Q4Right
        || questionArea.innerText === questionsLvl12[4] && option3Box.innerText === l12Q5Right) { //op 3 lvl 12
        level13();
        setMoneyWhite();
        moneylvl12.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl13[0] && option3Box.innerText === l13Q1Right
        || questionArea.innerText === questionsLvl13[1] && option3Box.innerText === l13Q2Right
        || questionArea.innerText === questionsLvl13[2] && option3Box.innerText === l13Q3Right
        || questionArea.innerText === questionsLvl13[3] && option3Box.innerText === l13Q4Right
        || questionArea.innerText === questionsLvl13[4] && option3Box.innerText === l13Q5Right) { //op 3 lvl 13
        level14();
        setMoneyWhite();
        moneylvl13.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl14[0] && option3Box.innerText === l14Q1Right
        || questionArea.innerText === questionsLvl14[1] && option3Box.innerText === l14Q2Right
        || questionArea.innerText === questionsLvl14[2] && option3Box.innerText === l14Q3Right
        || questionArea.innerText === questionsLvl14[3] && option3Box.innerText === l14Q4Right
        || questionArea.innerText === questionsLvl14[4] && option3Box.innerText === l14Q5Right) { //op 3 lvl 14
        level15();
        setMoneyWhite();
        moneylvl14.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl15[0] && option3Box.innerText === l15Q1Right
        || questionArea.innerText === questionsLvl15[1] && option3Box.innerText === l15Q2Right
        || questionArea.innerText === questionsLvl15[2] && option3Box.innerText === l15Q3Right
        || questionArea.innerText === questionsLvl15[3] && option3Box.innerText === l15Q4Right
        || questionArea.innerText === questionsLvl15[4] && option3Box.innerText === l15Q5Right) { //op 3 lvl 15
        level16();
        setMoneyWhite();
        moneylvl15.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl16[0] && option3Box.innerText === l16Q1Right
        || questionArea.innerText === questionsLvl16[1] && option3Box.innerText === l16Q2Right
        || questionArea.innerText === questionsLvl16[2] && option3Box.innerText === l16Q3Right
        || questionArea.innerText === questionsLvl16[3] && option3Box.innerText === l16Q4Right
        || questionArea.innerText === questionsLvl16[4] && option3Box.innerText === l16Q5Right) { //op 3 lvl 16
        level17();
        setMoneyWhite();
        moneylvl16.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl17[0] && option3Box.innerText === l17Q1Right
        || questionArea.innerText === questionsLvl17[1] && option3Box.innerText === l17Q2Right
        || questionArea.innerText === questionsLvl17[2] && option3Box.innerText === l17Q3Right
        || questionArea.innerText === questionsLvl17[3] && option3Box.innerText === l17Q4Right
        || questionArea.innerText === questionsLvl17[4] && option3Box.innerText === l17Q5Right) { //op 3 lvl 17
        setMoneyWhite();
        moneylvl17.style.color = "green";
        alert("Correct");
    }
    else {
        wrongAnswer();
    }
}
function selectOption4() {
    if (questionArea.innerText === questionsLvl1[0] && option4Box.innerText === l1Q1Right
        || questionArea.innerText === questionsLvl1[1] && option4Box.innerText === l1Q2Right
        || questionArea.innerText === questionsLvl1[2] && option4Box.innerText === l1Q3Right
        || questionArea.innerText === questionsLvl1[3] && option4Box.innerText === l1Q4Right
        || questionArea.innerText === questionsLvl1[4] && option4Box.innerText === l1Q5Right) {
        level2();
        setMoneyWhite();
        moneylvl1.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl2[0] && option4Box.innerText === l2Q1Right
        || questionArea.innerText === questionsLvl2[1] && option4Box.innerText === l2Q2Right
        || questionArea.innerText === questionsLvl2[2] && option4Box.innerText === l2Q3Right
        || questionArea.innerText === questionsLvl2[3] && option4Box.innerText === l2Q4Right
        || questionArea.innerText === questionsLvl2[4] && option4Box.innerText === l2Q5Right) { //lvl 2
        level3();
        setMoneyWhite();
        moneylvl2.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl3[0] && option4Box.innerText === l3Q1Right
        || questionArea.innerText === questionsLvl3[1] && option4Box.innerText === l3Q2Right
        || questionArea.innerText === questionsLvl3[2] && option4Box.innerText === l3Q3Right
        || questionArea.innerText === questionsLvl3[3] && option4Box.innerText === l3Q4Right
        || questionArea.innerText === questionsLvl3[4] && option4Box.innerText === l3Q5Right) { //lvl 3
        level4();
        setMoneyWhite();
        moneylvl3.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl4[0] && option4Box.innerText === l4Q1Right
        || questionArea.innerText === questionsLvl4[1] && option4Box.innerText === l4Q2Right
        || questionArea.innerText === questionsLvl4[2] && option4Box.innerText === l4Q3Right
        || questionArea.innerText === questionsLvl4[3] && option4Box.innerText === l4Q4Right
        || questionArea.innerText === questionsLvl4[4] && option4Box.innerText === l4Q5Right) { //lvl 4
        level5();
        setMoneyWhite();
        moneylvl4.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl5[0] && option4Box.innerText === l5Q1Right
        || questionArea.innerText === questionsLvl5[1] && option4Box.innerText === l5Q2Right
        || questionArea.innerText === questionsLvl5[2] && option4Box.innerText === l5Q3Right
        || questionArea.innerText === questionsLvl5[3] && option4Box.innerText === l5Q4Right
        || questionArea.innerText === questionsLvl5[4] && option4Box.innerText === l5Q5Right) { //op 4 lvl 5
        level6();
        setMoneyWhite();
        moneylvl5.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl6[0] && option4Box.innerText === l6Q1Right
        || questionArea.innerText === questionsLvl6[1] && option4Box.innerText === l6Q2Right
        || questionArea.innerText === questionsLvl6[2] && option4Box.innerText === l6Q3Right
        || questionArea.innerText === questionsLvl6[3] && option4Box.innerText === l6Q4Right
        || questionArea.innerText === questionsLvl6[4] && option4Box.innerText === l6Q5Right) { //op 4 lvl 6
        level7();
        setMoneyWhite();
        moneylvl6.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl7[0] && option4Box.innerText === l7Q1Right
        || questionArea.innerText === questionsLvl7[1] && option4Box.innerText === l7Q2Right
        || questionArea.innerText === questionsLvl7[2] && option4Box.innerText === l7Q3Right
        || questionArea.innerText === questionsLvl7[3] && option4Box.innerText === l7Q4Right
        || questionArea.innerText === questionsLvl7[4] && option4Box.innerText === l7Q5Right) { //op 4 lvl 7
        level8();
        setMoneyWhite();
        moneylvl7.style.color = "green";
        alert("correct");
    }
    else if (questionArea.innerText === questionsLvl8[0] && option4Box.innerText === l8Q1Right
        || questionArea.innerText === questionsLvl8[1] && option4Box.innerText === l8Q2Right
        || questionArea.innerText === questionsLvl8[2] && option4Box.innerText === l8Q3Right
        || questionArea.innerText === questionsLvl8[3] && option4Box.innerText === l8Q4Right
        || questionArea.innerText === questionsLvl8[4] && option4Box.innerText === l8Q5Right) { //op 4 lvl 8
        level9();
        setMoneyWhite();
        moneylvl8.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl9[0] && option4Box.innerText === l9Q1Right
        || questionArea.innerText === questionsLvl9[1] && option4Box.innerText === l9Q2Right
        || questionArea.innerText === questionsLvl9[2] && option4Box.innerText === l9Q3Right
        || questionArea.innerText === questionsLvl9[3] && option4Box.innerText === l9Q4Right
        || questionArea.innerText === questionsLvl9[4] && option4Box.innerText === l9Q5Right) { //op 4 lvl 9
        level10();
        setMoneyWhite();
        moneylvl9.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl10[0] && option4Box.innerText === l10Q1Right
        || questionArea.innerText === questionsLvl10[1] && option4Box.innerText === l10Q2Right
        || questionArea.innerText === questionsLvl10[2] && option4Box.innerText === l10Q3Right
        || questionArea.innerText === questionsLvl10[3] && option4Box.innerText === l10Q4Right
        || questionArea.innerText === questionsLvl10[4] && option4Box.innerText === l10Q5Right) { //op 4 lvl 10
        level11();
        setMoneyWhite();
        moneylvl10.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl11[0] && option4Box.innerText === l11Q1Right
        || questionArea.innerText === questionsLvl11[1] && option4Box.innerText === l11Q2Right
        || questionArea.innerText === questionsLvl11[2] && option4Box.innerText === l11Q3Right
        || questionArea.innerText === questionsLvl11[3] && option4Box.innerText === l11Q4Right
        || questionArea.innerText === questionsLvl11[4] && option4Box.innerText === l11Q5Right) { //op 4 lvl 11
        level12();
        setMoneyWhite();
        moneylvl11.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl12[0] && option4Box.innerText === l12Q1Right
        || questionArea.innerText === questionsLvl12[1] && option4Box.innerText === l12Q2Right
        || questionArea.innerText === questionsLvl12[2] && option4Box.innerText === l12Q3Right
        || questionArea.innerText === questionsLvl12[3] && option4Box.innerText === l12Q4Right
        || questionArea.innerText === questionsLvl12[4] && option4Box.innerText === l12Q5Right) { //op 4 lvl 12
        level13();
        setMoneyWhite();
        moneylvl12.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl13[0] && option4Box.innerText === l13Q1Right
        || questionArea.innerText === questionsLvl13[1] && option4Box.innerText === l13Q2Right
        || questionArea.innerText === questionsLvl13[2] && option4Box.innerText === l13Q3Right
        || questionArea.innerText === questionsLvl13[3] && option4Box.innerText === l13Q4Right
        || questionArea.innerText === questionsLvl13[4] && option4Box.innerText === l13Q5Right) { //op 4 lvl 13
        level14();
        setMoneyWhite();
        moneylvl13.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl14[0] && option4Box.innerText === l14Q1Right
        || questionArea.innerText === questionsLvl14[1] && option4Box.innerText === l14Q2Right
        || questionArea.innerText === questionsLvl14[2] && option4Box.innerText === l14Q3Right
        || questionArea.innerText === questionsLvl14[3] && option4Box.innerText === l14Q4Right
        || questionArea.innerText === questionsLvl14[4] && option4Box.innerText === l14Q5Right) { //op 4 lvl 14
        level15();
        setMoneyWhite();
        moneylvl14.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl15[0] && option4Box.innerText === l15Q1Right
        || questionArea.innerText === questionsLvl15[1] && option4Box.innerText === l15Q2Right
        || questionArea.innerText === questionsLvl15[2] && option4Box.innerText === l15Q3Right
        || questionArea.innerText === questionsLvl15[3] && option4Box.innerText === l15Q4Right
        || questionArea.innerText === questionsLvl15[4] && option4Box.innerText === l15Q5Right) { //op 4 lvl 15
        level16();
        setMoneyWhite();
        moneylvl15.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl16[0] && option4Box.innerText === l16Q1Right
        || questionArea.innerText === questionsLvl16[1] && option4Box.innerText === l16Q2Right
        || questionArea.innerText === questionsLvl16[2] && option4Box.innerText === l16Q3Right
        || questionArea.innerText === questionsLvl16[3] && option4Box.innerText === l16Q4Right
        || questionArea.innerText === questionsLvl16[4] && option4Box.innerText === l16Q5Right) { //op 4 lvl 16
        level17();
        setMoneyWhite();
        moneylvl16.style.color = "green";
        alert("Correct");
    }
    else if (questionArea.innerText === questionsLvl17[0] && option4Box.innerText === l17Q1Right
        || questionArea.innerText === questionsLvl17[1] && option4Box.innerText === l17Q2Right
        || questionArea.innerText === questionsLvl17[2] && option4Box.innerText === l17Q3Right
        || questionArea.innerText === questionsLvl17[3] && option4Box.innerText === l17Q4Right
        || questionArea.innerText === questionsLvl17[4] && option4Box.innerText === l17Q5Right) { //op 4 lvl 17
        setMoneyWhite();
        moneylvl17.style.color = "green";
        alert("Correct");
    }
    else {
        wrongAnswer();
    }

}

function setMoneyWhite() {
    moneylvl0.style.color = "white";
    moneylvl1.style.color = "white";
    moneylvl2.style.color = "white";
    moneylvl3.style.color = "white";
    moneylvl4.style.color = "white";
    moneylvl5.style.color = "white";
    moneylvl6.style.color = "white";
    moneylvl7.style.color = "white";
    moneylvl8.style.color = "white";
    moneylvl9.style.color = "white";
    moneylvl10.style.color = "white";
    moneylvl11.style.color = "white";
    moneylvl12.style.color = "white";
    moneylvl13.style.color = "white";
    moneylvl14.style.color = "white";
    moneylvl15.style.color = "white";
    moneylvl16.style.color = "white";
    moneylvl17.style.color = "white";
}

function wrongAnswer() {
    setMoneyWhite();
    startGame();
    alert("Wrong");
}