let isRomanian = false;
let isEnglish = true;
const roBtn = document.getElementById("ro-btn");
const engBtn = document.getElementById("eng-btn");
const s1HeaderText = document.getElementById("s1-header-text");
const s1HeaderText2 = document.getElementById("s1-header-text2");
const s1ProjectsText = document.getElementById("s1-projects-text");
const country = document.getElementById("country");
const city = document.getElementById("city");
const age = document.getElementById("age");
const romanian = document.getElementById("romanian");
const gitKnowledge = document.getElementById("git-knowledge");
const vidEditing = document.getElementById("vid-editing");
const downloadCV = document.getElementById("download-cv");
const knownTechnologies = document.getElementById("known-technologies");
const portfolio = document.getElementById("portfolio");
const rpsGame = document.getElementById("rps-game");
const pawnGame = document.getElementById("pawn-game");
const myAmazingCV = document.getElementById("my-amazing-cv");
const myCVText = document.getElementById("my-cv-text");
const contactForm = document.getElementById("contact-form");
const contactFormText = document.getElementById("contact-form-text");

let b = document.querySelector(':root');
function initialVar() {
    b.style.setProperty('--yellow', 'yellow');
}
initialVar();
function setRomanian() {
    if (isRomanian === false) {
        isRomanian = true;
        isEnglish = false;
        s1HeaderText.innerText = "Descopera-mi Potentialul";
        s1HeaderText2.innerText = "Incredibil";
        s1ProjectsText.innerText = " Proiecte Realizate";
        country.innerText = "Tara";
        city.innerText = "Oras";
        age.innerText = "Varsta";
        romanian.innerText = "Romana";
        gitKnowledge.innerText = "Cunostinte Git";
        vidEditing.innerText = "Editare Imagini&Video";
        downloadCV.innerText = "Descarca CV";
        knownTechnologies.innerText = "Tehnologii Cunoscute";
        portfolio.innerText = "Portofoliu";
        rpsGame.innerText = "Joc Foarfece Piatra Hartie";
        pawnGame.innerText = "Joc Simplu cu Pioni";
        myAmazingCV.innerText = "CV-ul Meu Incredibil";
        myCVText.innerText = "Te uiti la el";
        contactForm.innerText = "Formular de Contact";
        contactFormText.innerText = "Un formular de contact conectat la o baza de date folosind un script PHP";
        engBtn.classList.add("lang-btn-inactive");
        roBtn.classList.remove("lang-btn-inactive");
        (function initialVar() {
            roBtn.classList.add("lang-btn-active");
            engBtn.classList.remove("lang-btn-active");
        })();
    }
}

function setEnglish() {
    if (isEnglish === false) {
        isEnglish = true;
        isRomanian = false;
        s1HeaderText.innerText = "Discover My Amazing";
        s1HeaderText2.innerText = "Potential";
        s1ProjectsText.innerText = " Projects Completed";
        country.innerText = "Country";
        city.innerText = "City";
        age.innerText = "Age";
        romanian.innerText = "Romanian";
        gitKnowledge.innerText = "Git Knowledge";
        vidEditing.innerText = "Video&Image Editing";
        downloadCV.innerText = "Download CV";
        knownTechnologies.innerText = "Known Technologies";
        portfolio.innerText = "Portfolio";
        rpsGame.innerText = "Rock Paper Scissors Game";
        pawnGame.innerText = "Simple Pawn Game";
        myAmazingCV.innerText = "My Amazing CV";
        myCVText.innerText = "You're looking at it";
        contactForm.innerText = "Contact Form";
        contactFormText.innerText = "A contact form connected to a database using a PHP script";
        roBtn.classList.add("lang-btn-inactive");
        engBtn.classList.remove("lang-btn-inactive");
        (function initialVar() {
            roBtn.classList.remove("lang-btn-active");
            engBtn.classList.add("lang-btn-active");
        })();
    }
}