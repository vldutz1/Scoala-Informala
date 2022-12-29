const questionArea = document.getElementById("question-container");
let option1Box = document.getElementById("option1");
let option2Box = document.getElementById("option2");
let option3Box = document.getElementById("option3");
let option4Box = document.getElementById("option4");

const optionsArray = [option1Box, option2Box, option3Box, option4Box];
let isGameStarted = false;
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

const l1Q1 = "Who's the last president of USA?(2022)";
const l1Q2 = "Who is Mr.Bean?";
const l1Q3 = "Who is Dr.Strange?";
const l1Q4 = "What's Facebook?";
const l1Q5 = "What's Google?";

const l1Q1Right = "Joe Biden";
const l1Q1Wrong1 = "Jordan Peterson";
const l1Q1Wrong2 = "Donald Trump";
const l1Q1Wrong3 = "Barrack Obama";
const l1Q1Answers = [l1Q1Right, l1Q1Wrong1, l1Q1Wrong2, l1Q1Wrong3];

const l1Q2Right = "A fictional character";
const l1Q2Wrong1 = "A comedian";
const l1Q2Wrong2 = "A politician";
const l1Q2Wrong3 = "A musician";
const l1Q2Answers = [l1Q2Right, l1Q2Wrong1, l1Q2Wrong2, l1Q2Wrong3];

const l1Q3Right = "A fictional character";
const l1Q3Wrong1 = "An actor";
const l1Q3Wrong2 = "A TV show";
const l1Q3Wrong3 = "A marvel comic";
const l1Q3Answers = [l1Q3Wrong1, l1Q3Right, l1Q3Wrong2, l1Q3Wrong3];

const l1Q4Right = "An online social platform";
const l1Q4Wrong1 = "A Zukerburg creation";
const l1Q4Wrong2 = "A youtube channel";
const l1Q4Wrong3 = "An instagram project";
const l1Q4Answers = [l1Q4Right, l1Q4Wrong1, l1Q4Wrong2, l1Q4Wrong3];

const l1Q5Right = "A search engine";
const l1Q5Wrong1 = "A Google service";
const l1Q5Wrong2 = "A Facebook service";
const l1Q5Wrong3 = "A metaverse production";
const l1Q5Answers = [l1Q5Wrong1, l1Q5Wrong2, l1Q5Wrong3, l1Q5Right];

const questionsLvl1 = [l1Q1, l1Q2, l1Q3, l1Q4, l1Q5];

function startGame() {
    if (isGameStarted === false) {
        // isGameStarted = true
        let random = Math.floor(Math.random() * 5);
        questionArea.innerText = questionsLvl1[random];
        if (questionArea.innerText === questionsLvl1[0]) {
            option1Box.innerText = l1Q1Answers[0]; // right
            option2Box.innerText = l1Q1Answers[1];
            option3Box.innerText = l1Q1Answers[2];
            option4Box.innerText = l1Q1Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[1]) {
            option1Box.innerText = l1Q2Answers[0]; // right
            option2Box.innerText = l1Q2Answers[1];
            option3Box.innerText = l1Q2Answers[2];
            option4Box.innerText = l1Q2Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[2]) {
            option1Box.innerText = l1Q3Answers[0];
            option2Box.innerText = l1Q3Answers[1]; // right
            option3Box.innerText = l1Q3Answers[2];
            option4Box.innerText = l1Q3Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[3]) {
            option1Box.innerText = l1Q4Answers[0]; // right
            option2Box.innerText = l1Q4Answers[1];
            option3Box.innerText = l1Q4Answers[2];
            option4Box.innerText = l1Q4Answers[3];
        }
        else if (questionArea.innerText === questionsLvl1[4]) {
            option1Box.innerText = l1Q5Answers[0];
            option2Box.innerText = l1Q5Answers[1];
            option3Box.innerText = l1Q5Answers[2];
            option4Box.innerText = l1Q5Answers[3]; // right
        }
    }
    // else {
    //     console.log("The Game has already started")
    // }
}

const l2Q1 = "What's the result of 2+3(2*2)?";
const l2Q1Right = "14";
const l2Q1Wrong1 = "20";
const l2Q1Wrong2 = "22";
const l2Q1Wrong3 = "5";
const l2Q1Answers = [l2Q1Wrong1, l2Q1Right, l2Q1Wrong2, l2Q1Wrong3];

const l2Q2 = "What's the normal temperature in the human body?(Celsius)";
const l2Q2Right = "37";
const l2Q2Wrong1 = "38";
const l2Q2Wrong2 = "39";
const l2Q2Wrong3 = "35";
const l2Q2Answers = [l2Q2Right, l2Q2Wrong1, l2Q2Wrong2, l2Q2Wrong3];

const l2Q3 = "What animal can sleep with opened eyes?";
const l2Q3Right = "Fish";
const l2Q3Wrong1 = "Cats";
const l2Q3Wrong2 = "Dogs";
const l2Q3Wrong3 = "Giraffe";
const l2Q3Answers = [l2Q3Wrong1, l2Q3Wrong2, l2Q3Wrong3, l2Q3Right];

const l2Q4 = "Who's the person from the 1 dollar bill?";
const l2Q4Right = "George Washington";
const l2Q4Wrong1 = "Joe Biden";
const l2Q4Wrong2 = "Abraham Lincoln";
const l2Q4Wrong3 = "Benjamin Franklin";
const l2Q4Answers = [l2Q4Right, l2Q4Wrong1, l2Q4Wrong2, l2Q4Wrong3];

const l2Q5 = "Who's the richest man in 2022?";
const l2Q5Right = "Bernard Arnault & family";
const l2Q5Wrong1 = "Bill Gates";
const l2Q5Wrong2 = "Elon Musk";
const l2Q5Wrong3 = "Jeff Bezos";
const l2Q5Answers = [l2Q5Wrong1, l2Q5Wrong2, l2Q5Right, l2Q5Wrong3];

const questionsLvl2 = [l2Q1, l2Q2, l2Q3, l2Q4, l2Q5];

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
        option1Box.innerText = l2Q2Answers[0]; //right
        option2Box.innerText = l2Q2Answers[1];
        option3Box.innerText = l2Q2Answers[2];
        option4Box.innerText = l2Q2Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[2]) {
        option1Box.innerText = l2Q3Answers[0];
        option2Box.innerText = l2Q3Answers[1];
        option3Box.innerText = l2Q3Answers[2];
        option4Box.innerText = l2Q3Answers[3]; // right
    }
    else if (questionArea.innerText === questionsLvl2[3]) {
        option1Box.innerText = l2Q4Answers[0]; // right
        option2Box.innerText = l2Q4Answers[1];
        option3Box.innerText = l2Q4Answers[2];
        option4Box.innerText = l2Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl2[4]) {
        option1Box.innerText = l2Q5Answers[0];
        option2Box.innerText = l2Q5Answers[1];
        option3Box.innerText = l2Q5Answers[2]; //right
        option4Box.innerText = l2Q5Answers[3];
    }
}

const l3Q1 = "Who wrote Romeo and Juliet?";
const l3Q1Right = "Willian Shakespeare";
const l3Q1Wrong1 = "Abraham Lincoln";
const l3Q1Wrong2 = "Wesley Shakespeare";
const l3Q1Wrong3 = "Johnny Cage";
const l3Q1Answers = [l3Q1Wrong1, l3Q1Right, l3Q1Wrong2, l3Q1Wrong3];

const l3Q2 = "What is the capital city of Australia?";
const l3Q2Right = "Canberra";
const l3Q2Wrong1 = "Pennsylvania";
const l3Q2Wrong2 = "Paris";
const l3Q2Wrong3 = "Moscow";
const l3Q2Answers = [l3Q2Wrong1, l3Q2Wrong2, l3Q2Wrong3, l3Q2Right];

const l3Q3 = "What is the capital of Finland?";
const l3Q3Right = "Helsinki";
const l3Q3Wrong1 = "Fiji";
const l3Q3Wrong2 = "Athens";
const l3Q3Wrong3 = "Georgia";
const l3Q3Answers = [l3Q3Right, l3Q3Wrong1, l3Q3Wrong2, l3Q3Wrong3];

const l3Q4 = "What language is spoken in Brazil?";
const l3Q4Right = "Portuguese";
const l3Q4Wrong1 = "Spanish";
const l3Q4Wrong2 = "English";
const l3Q4Wrong3 = "Mandarin";
const l3Q4Answers = [l3Q4Wrong1, l3Q4Right, l3Q4Wrong2, l3Q4Wrong3];

const l3Q5 = "What is the currency of Vietnam?";
const l3Q5Right = "Vietnamese dong";
const l3Q5Wrong1 = "Euro";
const l3Q5Wrong2 = "Dollar";
const l3Q5Wrong3 = "Peso";
const l3Q5Answers = [l3Q5Right, l3Q5Wrong1, l3Q5Wrong2, l3Q5Wrong3];

const questionsLvl3 = [l3Q1, l3Q2, l3Q3, l3Q4, l3Q5];

function level3() {
    levelShow.innerText = "Level 3";
    let random = Math.floor(Math.random() * 5);
    questionArea.innerText = questionsLvl3[random];
    if (questionArea.innerText === questionsLvl3[0]) {
        option1Box.innerText = l3Q1Answers[0];
        option2Box.innerText = l3Q1Answers[1]; // right
        option3Box.innerText = l3Q1Answers[2];
        option4Box.innerText = l3Q1Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[1]) {
        option1Box.innerText = l3Q2Answers[0];
        option2Box.innerText = l3Q2Answers[1];
        option3Box.innerText = l3Q2Answers[2];
        option4Box.innerText = l3Q2Answers[3]; //right
    }
    else if (questionArea.innerText === questionsLvl3[2]) {
        option1Box.innerText = l3Q3Answers[0]; //right
        option2Box.innerText = l3Q3Answers[1];
        option3Box.innerText = l3Q3Answers[2];
        option4Box.innerText = l3Q3Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[3]) {
        option1Box.innerText = l3Q4Answers[0];
        option2Box.innerText = l3Q4Answers[1]; //right
        option3Box.innerText = l3Q4Answers[2];
        option4Box.innerText = l3Q4Answers[3];
    }
    else if (questionArea.innerText === questionsLvl3[4]) {
        option1Box.innerText = l3Q5Answers[0]; //right
        option2Box.innerText = l3Q5Answers[1];
        option3Box.innerText = l3Q5Answers[2];
        option4Box.innerText = l3Q5Answers[3];
    }
}

const l4Q1 = "What is the tallest mountain in the world?";
const l4Q1Right = "Everest";
const l4Q1Wrong1 = "Alps";
const l4Q1Wrong2 = "Makalu";
const l4Q1Wrong3 = "K2";
const l4Q1Answers = [l4Q1Right, l4Q1Wrong1, l4Q1Wrong2, l4Q1Wrong3];

const l4Q2 = "Who are Harry Potter's two best friends?";
const l4Q2Right = "Ron Weasley and Hermione Granger";
const l4Q2Wrong1 = "Ron Weasley and Professor Dumbledore";
const l4Q2Wrong2 = "Rubeus Hagrid and Professor Dumbledore";
const l4Q2Wrong3 = "Ron Weasley and Professor Dumbledore";
const l4Q2Answers = [l4Q2Wrong1, l4Q2Wrong2, l4Q2Right, l4Q2Wrong3];

const l4Q3 = "How many players are in a football team?";
const l4Q3Right = "11";
const l4Q3Wrong1 = "10";
const l4Q3Wrong2 = "9";
const l4Q3Wrong3 = "12";
const l4Q3Answers = [l4Q3Wrong1, l4Q3Right, l4Q3Wrong2, l4Q3Wrong3];

const l4Q4 = "What color are most buses in London?";
const l4Q4Right = "Red";
const l4Q4Wrong1 = "Yellow";
const l4Q4Wrong2 = "Purple";
const l4Q4Wrong3 = "Grey";
const l4Q4Answers = [l4Q4Wrong1, l4Q4Wrong2, l4Q4Wrong3, l4Q4Right];

const l4Q5 = "What part of a plant conducts photosynthesis?"
const l4Q5Right = "Leaf";
const l4Q5Wrong1 = "Root";
const l4Q5Wrong2 = "Seed";
const l4Q5Wrong3 = "Fruit";
const l4Q5Answers = [l4Q5Right, l4Q5Wrong1, l4Q5Wrong2, l4Q5Wrong3];

const questionsLvl4 = [l4Q1, l4Q2, l4Q3, l4Q4, l4Q5];

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

const l5Q1 = "How many elements are in the periodic table?";
const l5Q1Right = "118";
const l5Q1Wrong1 = "120";
const l5Q1Wrong2 = "125";
const l5Q1Wrong3 = "102";
const l5Q1Answers = [l5Q1Right, l5Q1Wrong1, l5Q1Wrong2, l5Q1Wrong3];

const l5Q2 = "Where is the smallest bone in the human body located?";
const l5Q2Right = "Ear";
const l5Q2Wrong1 = "Feet";
const l5Q2Wrong2 = "Finger";
const l5Q2Wrong3 = "Chest";
const l5Q2Answers = [l5Q2Wrong1, l5Q2Wrong2, l5Q2Wrong3, l5Q2Right];

const l5Q3 = "How many hearts does an octopus have?";
const l5Q3Right = "3";
const l5Q3Wrong1 = "1";
const l5Q3Wrong2 = "2";
const l5Q3Wrong3 = "0";
const l5Q3Answers = [l5Q3Right, l5Q3Wrong1, l5Q3Wrong2, l5Q3Wrong3];

const l5Q4 = "Who killed Tony Stark’s parents?";
const l5Q4Right = "The Winter Soldier";
const l5Q4Wrong1 = "The Hulk";
const l5Q4Wrong2 = "Hawkeye";
const l5Q4Wrong3 = "Jarvis";
const l5Q4Answers = [l5Q4Wrong1, l5Q4Wrong2, l5Q4Right, l5Q4Wrong3];

const l5Q5 = "Natasha Romanoff is the real name of which superhero?";
const l5Q5Right = "Black Widow";
const l5Q5Wrong1 = "Super girl";
const l5Q5Wrong2 = "Wonder Woman";
const l5Q5Wrong3 = "Captain Marvel";
const l5Q5Answers = [l5Q5Right, l5Q5Wrong1, l5Q5Wrong2, l5Q5Wrong3];

const questionsLvl5 = [l5Q1, l5Q2, l5Q3, l5Q4, l5Q5];

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

const l6Q1 = "In which city is the Statue of Liberty located?";
const l6Q1Right = "New York";
const l6Q1Wrong1 = "Washington DC";
const l6Q1Wrong2 = "New Jersey";
const l6Q1Wrong3 = "Brooklyn";
const l6Q1Answers = [l6Q1Wrong1, l6Q1Wrong2, l6Q1Wrong3, l6Q1Right];

const l6Q2 = "In which country did pizza originate?";
const l6Q2Right = "Italy";
const l6Q2Wrong1 = "Spain";
const l6Q2Wrong2 = "France";
const l6Q2Wrong3 = "Greece";
const l6Q2Answers = [l6Q2Right, l6Q2Wrong1, l6Q2Wrong2, l6Q2Wrong3];

const l6Q3 = "In which continent is Vietnam?";
const l6Q3Right = "Asia";
const l6Q3Wrong1 = "Europe";
const l6Q3Wrong2 = "Africa";
const l6Q3Wrong3 = "China";
const l6Q3Answers = [l6Q3Wrong1, l6Q3Wrong2, l6Q3Right, l6Q3Wrong3];

const l6Q4 = "What is the capital of Italy?";
const l6Q4Right = "Rome";
const l6Q4Wrong1 = "Vatican";
const l6Q4Wrong2 = "Milan";
const l6Q4Wrong3 = "Naples";
const l6Q4Answers = [l6Q4Right, l6Q4Wrong1, l6Q4Wrong2, l6Q4Wrong3];

const l6Q5 = "Who was the first president of the USA?";
const l6Q5Right = "George Washington";
const l6Q5Wrong1 = "John Adams";
const l6Q5Wrong2 = "Thomas Jefferson";
const l6Q5Wrong3 = "Abraham Lincoln";
const l6Q5Answers = [l6Q5Wrong1, l6Q5Right, l6Q5Wrong2, l6Q5Wrong3];
const questionsLvl6 = [l6Q1, l6Q2, l6Q3, l6Q4, l6Q5];

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

const l7Q1 = "Most dinosaur fossils have been discovered in which continent?";
const l7Q1Right = "North America";
const l7Q1Wrong1 = "Africa";
const l7Q1Wrong2 = "South America";
const l7Q1Wrong3 = "Asia";
const l7Q1Answers = [l7Q1Wrong1, l7Q1Wrong2, l7Q1Right, l7Q1Wrong3];

const l7Q2 = "What is the most popular color in the flags of most countries in the world?";
const l7Q2Right = "Red";
const l7Q2Wrong1 = "Blue";
const l7Q2Wrong2 = "Green";
const l7Q2Wrong3 = "Purple";
const l7Q2Answers = [l7Q2Right, l7Q2Wrong1, l7Q2Wrong2, l7Q2Wrong3];

const l7Q3 = "How many valves are there in the human heart?";
const l7Q3Right = "4";
const l7Q3Wrong1 = "3";
const l7Q3Wrong2 = "5";
const l7Q3Wrong3 = "2";
const l7Q3Answers = [l7Q3Wrong1, l7Q3Wrong2, l7Q3Wrong3, l7Q3Right];

const l7Q4 = "Batman is a fictional superhero in which shared universe?";
const l7Q4Right = "DC Universe";
const l7Q4Wrong1 = "Marvel Entertainment";
const l7Q4Wrong2 = "Star Wars Universe";
const l7Q4Wrong3 = "None of the options";
const l7Q4Answers = [l7Q4Wrong1, l7Q4Right, l7Q4Wrong2, l7Q4Wrong3];

const l7Q5 = "Popcorn kernels typically pop at which temperature?";
const l7Q5Right = "180 degrees";
const l7Q5Wrong1 = "200 degrees";
const l7Q5Wrong2 = "190 degrees";
const l7Q5Wrong3 = "210 degrees";
const l7Q5Answers = [l7Q5Wrong1, l7Q5Wrong2, l7Q5Right, l7Q5Wrong3];
const questionsLvl7 = [l7Q1, l7Q2, l7Q3, l7Q4, l7Q5];

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

const l8Q1 = "Who of the following is the Roman god of war?";
const l8Q1Right = "Mars";
const l8Q1Wrong1 = "Jupiter";
const l8Q1Wrong2 = "Ares";
const l8Q1Wrong3 = "Hades";
const l8Q1Answers = [l8Q1Right, l8Q1Wrong1, l8Q1Wrong2, l8Q1Wrong3];

const l8Q2 = "What is the largest ocean in the world?";
const l8Q2Right = "Pacific Ocean";
const l8Q2Wrong1 = "Arctic Ocean";
const l8Q2Wrong2 = "Atlantic Ocean";
const l8Q2Wrong3 = "Indian Ocean";
const l8Q2Answers = [l8Q2Right, l8Q2Wrong1, l8Q2Wrong2, l8Q2Wrong3];

const l8Q3 = "How many stars are there on the flag of the USA?";
const l8Q3Right = ""

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
    else {
        alert("Wrong");
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
    else {
        alert("Wrong");
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
    else {
        alert("Wrong");
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
    else {
        alert("Wrong");
    }

}

function setMoneyWhite() {
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