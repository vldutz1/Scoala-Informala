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
const english = document.getElementById("english");
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
const themeBtn = document.getElementById("dark-light-btn");
const quizGameTitle = document.getElementById("quiz-game-title");
const quizGameText = document.getElementById("quiz-game-text");
const s4Heading = document.getElementById("s4-heading");
const s4Text1 = document.getElementById("s4-text1");
const s4Text2 = document.getElementById("s4-text2");
const s4Name = document.getElementById("s4-name");
const s4Message = document.getElementById("s4-message");
const applyBtn = document.getElementById("apply-btn");
const sendBtn = document.getElementById("s4-send-btn");

let b = document.querySelector(':root');
function initialVar() {
    b.style.setProperty('--yellow', 'rgb(255, 187, 0)');
}
initialVar();
function setRomanian() {
    if (!isRomanian) {
        isRomanian = true;
        isEnglish = false;
        s1HeaderText.innerText = "Descoperă-mi Potențialul";
        s1HeaderText2.innerText = "Incredibil";
        s1ProjectsText.innerText = " Proiecte Realizate";
        country.innerText = "Țara";
        city.innerText = "Oraș";
        age.innerText = "Vârstă";
        romanian.innerText = "Română";
        english.innerText = "Engleză";
        gitKnowledge.innerText = "Cunoștințe Git";
        vidEditing.innerText = "Editare Imagini&Video";
        downloadCV.innerText = "Descarcă CV";
        knownTechnologies.innerText = "Tehnologii Cunoscute";
        portfolio.innerText = "Portofoliu";
        rpsGame.innerText = "Joc Foarfece Piatră Hârtie";
        pawnGame.innerText = "Joc Simplu cu Pioni";
        myAmazingCV.innerText = "CV-ul Meu Incredibil";
        myCVText.innerText = "Te uiți la el";
        contactForm.innerText = "Formular de Contact";
        themeBtn.innerText = "Schimbă Modul De Noapte/Zi";
        contactFormText.innerText = "Un formular de contact conectat la o bază de date";
        quizGameTitle.innerText = "Joc cu Întrebări";
        quizGameText.innerText = "Un joc cu întrebări și răspunsuri cu 17 nivele";
        s4Heading.innerText = "Hai să vorbim!";
        s4Text1.innerText = "Găsește-mă pe rețelele de socializare";
        s4Text2.innerText = "Sau folosește formularul de contact de mai jos";
        s4Name.innerText = "Nume";
        s4Message.innerText = "Mesajul Tău";
        applyBtn.innerText = "Aplică";
        sendBtn.innerText = "Trimite";
        document.getElementsByName('name')[0].placeholder='Numele tău aici';
        document.getElementsByName('email')[0].placeholder='NumeleTău@email.com';
        document.getElementsByName('message')[0].placeholder='Mesajul tău aici';
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
        english.innerText = "English";
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
        themeBtn.innerText = "Toggle Dark/Light Mode";
        contactFormText.innerText = "A contact form connected to a database";
        quizGameTitle.innerText = "Millionaire Quiz Game";
        quizGameText.innerText = "A 17 levels based game with questions and answers";
        s4Heading.innerText = "Let's talk!";
        s4Text1.innerText = "Find me on social media";
        s4Text2.innerText = "Or use the form below and send me an email";
        s4Name.innerText = "Name";
        s4Message.innerText = "Your Message";
        applyBtn.innerText = "Apply";
        sendBtn.innerText = "Send";
        document.getElementsByName('name')[0].placeholder='Your name here';
        document.getElementsByName('email')[0].placeholder='YourEmail@YourEmail.com';
        document.getElementsByName('message')[0].placeholder='Your Message Here';
        roBtn.classList.add("lang-btn-inactive");
        engBtn.classList.remove("lang-btn-inactive");
        (function initialVar() {
            roBtn.classList.remove("lang-btn-active");
            engBtn.classList.add("lang-btn-active");
        })();
    }
}