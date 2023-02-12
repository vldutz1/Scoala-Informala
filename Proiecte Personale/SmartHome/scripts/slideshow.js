
function left() {
    console.log("Left");
    document.querySelector(".s5-slider").scrollLeft -= 240;
}

function right() {
    console.log("Right");
    document.querySelector(".s5-slider").scrollLeft += 240;
}

let isAnswer1 = false;
let isAnswer2 = false;
let isAnswer3 = false;

const answerBox1 = document.getElementById("answer1");
const answerBox2 = document.getElementById("answer2");
const answerBox3 = document.getElementById("answer3");

const faqBtn1 = document.getElementById("faq-btn1");
const faqBtn2 = document.getElementById("faq-btn2");
const faqBtn3 = document.getElementById("faq-btn3");

function answer1() {
    if (!isAnswer1) {
        answerBox1.style = "display:block;"
        isAnswer1 = true;
        faqBtn1.style = `background: url("../images/home-automation/s8-dropdown-active-btn.png") center/contain no-repeat;`
    }
    else {
        answerBox1.style = "display:none;"
        isAnswer1 = false;
        faqBtn1.style = `background: url("../images/home-automation/s8-dropdown-inactive-btn.png") center/contain no-repeat;`
    }
}

function answer2() {
    if (!isAnswer2) {
        answerBox2.style = "display:block;"
        isAnswer2 = true;
        faqBtn2.style = `background: url("../images/home-automation/s8-dropdown-active-btn.png") center/contain no-repeat;`
    }
    else {
        answerBox2.style = "display:none;"
        isAnswer2 = false;
        faqBtn2.style = `background: url("../images/home-automation/s8-dropdown-inactive-btn.png") center/contain no-repeat;`
    }
}

function answer3() {
    if (!isAnswer3) {
        answerBox3.style = "display:block;"
        isAnswer3 = true;
        faqBtn3.style = `background: url("../images/home-automation/s8-dropdown-active-btn.png") center/contain no-repeat;`
    }
    else {
        answerBox3.style = "display:none;"
        isAnswer3 = false;
        faqBtn3.style = `background: url("../images/home-automation/s8-dropdown-inactive-btn.png") center/contain no-repeat;`
    }
}