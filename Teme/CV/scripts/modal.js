isModalActive = false;
isPortfolio1 = false
isPortfolio2 = false
isPortfolio3 = false
isPortfolio4 = false
isPortfolio5 = false
isPortfolio6 = false
isPortfolio7 = false

function closeModal(){
    if (isModalActive) {
        isModalActive = false;
        document.querySelector(".portfolio-modal1").style = "display:none";
        resetModal();
    }
}

function openModal(){
    if (!isModalActive) {
        modalSetImg();
        isModalActive = true;
        document.querySelector(".portfolio-modal1").style = "display:block";
    }
}

function resetModal(){
    isPortfolio1 = false
    isPortfolio2 = false
    isPortfolio3 = false
    isPortfolio4 = false
    isPortfolio5 = false
    isPortfolio6 = false
    isPortfolio7 = false
    document.getElementById("modal-btn1").style = "display:block";
    document.getElementById("modal-btn2").style = "display:block";
}

function modalSetImg(){
    modalImg = document.getElementById("modal1-img");
    if (isPortfolio1){
        modalImg.style = 'background: url("images/rock-paper-scissors.gif") center/contain no-repeat;';
    }
    else if (isPortfolio2){
        modalImg.style = 'background: url("images/pawn-game.gif") center/contain no-repeat;';
    }
    else if (isPortfolio3){
        modalImg.style = 'background: url("images/contact-form.gif") center/contain no-repeat;';
    }
    else if (isPortfolio4){
        modalImg.style = 'background: url("images/question-game.gif") center/contain no-repeat;';
    }
    else if (isPortfolio5){
        modalImg.style = 'background: url("images/cv-img.png") center/contain no-repeat;';
    }
    else if (isPortfolio6){
        modalImg.style = 'background: url("images/domunext.png") center/contain no-repeat;';
    }
    else if (isPortfolio7){
        modalImg.style = 'background: url("images/amazingdesign.png") center/contain no-repeat;';
    }
}

function openPortfolio1(){
    resetModal();
    isPortfolio1 = true;
    openModal();
}

function openPortfolio2(){
    resetModal();
    isPortfolio2 = true;
    openModal();
}

function openPortfolio3(){
    resetModal();
    isPortfolio3 = true;
    openModal();
    document.getElementById("modal-btn1").style = "display:none";
}

function openPortfolio4(){
    resetModal();
    isPortfolio4 = true;
    openModal();
}

function openPortfolio5(){
    resetModal();
    isPortfolio5 = true;
    openModal();
    document.getElementById("modal-btn1").style = "display:none";
}

function openPortfolio6(){
    resetModal();
    isPortfolio6 = true;
    openModal();
}

function openPortfolio7(){
    resetModal();
    isPortfolio7 = true;
    openModal();
    document.getElementById("modal-btn2").style = "display:none";
}

function goToWebsite(){
    if (isPortfolio1){
        window.location.href = "./projects/RPS/theGame2.html";
    }
    else if (isPortfolio2){
        window.location.href = "./projects/PawnGame/index.html";
    }
    else if (isPortfolio3){
        window.location.href = "./projects/ContactForm/contact.html";
    }
    else if (isPortfolio4){
        window.location.href = "./projects/QuestionsGame/index.html";
    }
    else if (isPortfolio5){
        window.location.href = "https://amazingdesign.ro/vlad";
    }
    else if (isPortfolio6){
        window.location.href = "https://domunext.com";
    }
    else if (isPortfolio7){
        window.location.href = "https://amazingdesign.ro";
    }
}

function goToGithub(){
    if (isPortfolio1){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Teme/Rock%20Paper%20Scissors";
    }
    else if (isPortfolio2){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Proiecte%20Personale/Game1";
    }
    else if (isPortfolio3){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Teme/Contact%20Us";
    }
    else if (isPortfolio4){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Proiecte%20Personale/Question%20Game";
    }
    else if (isPortfolio5){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Teme/CV";
    }
    else if (isPortfolio6){
        window.location.href = "https://github.com/vldutz1/Scoala-Informala/tree/main/Proiecte%20Personale/SmartHome";
    }
    else if (isPortfolio7){
        alert("Unavailable");
    }
}