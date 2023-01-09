let isDarkMode = true;
function toggleTheme() {
    if (isDarkMode === true) {
        isDarkMode = false;
        const mainColor = document.querySelectorAll(".main-color");
        for (let i = 0; i < mainColor.length; i++) {
            mainColor[i].style.color = "#1f1e1e";
        }

        const secColor = document.querySelectorAll(".sec-color");
        for (let i = 0; i < secColor.length; i++) {
            secColor[i].style.color = "#4d4d4d";
        }

        const leftSide = document.querySelectorAll(".sidenav");
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].style.backgroundColor = "#f7f7f7";
        }

        const leftSideHeading = document.querySelectorAll(".side-bar-align-profile");
        for (let i = 0; i < leftSideHeading.length; i++) {
            leftSideHeading[i].style.backgroundColor = "#cccccc";
        }
        const yellow = document.querySelectorAll(".yellow");
        for (let i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "black";
        }
        const rightMenu = document.querySelectorAll(".right-menu");
        for (let i = 0; i < rightMenu.length; i++) {
            rightMenu[i].style.backgroundColor = "#cccccc";
        }
        const rightMenuCloseBtn = document.querySelectorAll(".right-menu-close-btn");
        for (let i = 0; i < rightMenuCloseBtn.length; i++) {
            rightMenuCloseBtn[i].style.color = "black";
        }
        const profileImg = document.querySelectorAll(".img-container");
        for (let i = 0; i < profileImg.length; i++) {
            profileImg[i].style.backgroundColor = "rgb(30, 30, 40)";
        }
        const s2 = document.getElementById("s2");
        s2.style = "background: linear-gradient(rgb(65, 64, 92), rgb(144,146,191));"

    } else {
        isDarkMode = true;
        const mainColor = document.querySelectorAll(".main-color");
        for (let i = 0; i < mainColor.length; i++) {
            mainColor[i].style.color = "#fafafc";
        }

        const secColor = document.querySelectorAll(".sec-color");
        for (let i = 0; i < secColor.length; i++) {
            secColor[i].style.color = "#8c8c8e";
        }

        const leftSide = document.querySelectorAll(".sidenav");
        for (let i = 0; i < leftSide.length; i++) {
            leftSide[i].style.backgroundColor = "rgb(30, 30, 40)";
        }

        const leftSideHeading = document.querySelectorAll(".side-bar-align-profile");
        for (let i = 0; i < leftSideHeading.length; i++) {
            leftSideHeading[i].style.backgroundColor = "rgb(37, 37, 50)";
        }
        const yellow = document.querySelectorAll(".yellow");
        for (let i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "yellow";
        }
        const rightMenu = document.querySelectorAll(".right-menu");
        for (let i = 0; i < rightMenu.length; i++) {
            rightMenu[i].style.backgroundColor = "rgb(30, 30, 40)";
        }
        const rightMenuCloseBtn = document.querySelectorAll(".right-menu-close-btn");
        for (let i = 0; i < rightMenuCloseBtn.length; i++) {
            rightMenuCloseBtn[i].style.color = "white";
        }
        const profileImg = document.querySelectorAll(".img-container");
        for (let i = 0; i < profileImg.length; i++) {
            profileImg[i].style.backgroundColor = "rgb(255, 187, 0)";
        }
        const s2 = document.getElementById("s2");
        s2.style = "background: linear-gradient(rgb(65, 64, 92), rgb(76,62,78));"
        const s2Header = document.querySelectorAll(".s2-header");
        for (i = 0; i < s2Header.length; i++) {
            s2Header[i].style.color = "white";
        }
    }
}
const r = document.querySelector(':root');
function initialSetShadow() {
    r.style.setProperty('--yellow', 'orange');
}
initialSetShadow();

let isRedTheme = false;
let isBlueTheme = false;
let isTealTheme = false;
let isGreenTheme = false;
let isYellowTheme = false;

function themeReset() {
    isRedTheme = false;
    isBlueTheme = false;
    isTealTheme = false;
    isGreenTheme = false;
    isYellowTheme = false;
}

function redTheme() {
    if (isRedTheme === false) {
        themeReset();
        isRedTheme = true;
        const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "red";
        }
        const yellow2 = document.querySelectorAll(".yellow-forever");
        for (i = 0; i < yellow2.length; i++) {
            yellow2[i].style.color = "red";
        }
        const progressBars = document.querySelectorAll(".progress-bar-fill");
        for (i = 0; i < progressBars.length; i++) {
            progressBars[i].style.backgroundColor = "red";
        }
        const profile = document.querySelector(".img-container");
        profile.style.backgroundColor = "red";
        (function boxShadows() {
            r.style.setProperty('--yellow', 'red');
        })();
        console.log("Red Theme On");
    }
    else {
        console.log("Red Theme is Already on");
    }
}

function blueTheme() {
    if (isBlueTheme === false) {
        themeReset()
        isBlueTheme = true;
        const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "#007bff";
        }
        const yellow2 = document.querySelectorAll(".yellow-forever");
        for (i = 0; i < yellow2.length; i++) {
            yellow2[i].style.color = "#007bff";
        }
        const progressBars = document.querySelectorAll(".progress-bar-fill");
        for (i = 0; i < progressBars.length; i++) {
            progressBars[i].style.backgroundColor = "#007bff";
        }
        const profile = document.querySelector(".img-container");
        profile.style.backgroundColor = "#007bff";
        (function boxShadows() {
            r.style.setProperty('--yellow', '#007bff');
        })();
        console.log("Blue Theme On");
    }
    else {
        console.log("Blue Theme is Already on");
    }
}

function tealTheme() {
    if (isTealTheme === false) {
        themeReset()
        isTealTheme = true;
        const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "teal";
        }
        const yellow2 = document.querySelectorAll(".yellow-forever");
        for (i = 0; i < yellow2.length; i++) {
            yellow2[i].style.color = "teal";
        }
        const progressBars = document.querySelectorAll(".progress-bar-fill");
        for (i = 0; i < progressBars.length; i++) {
            progressBars[i].style.backgroundColor = "teal";
        }
        const profile = document.querySelector(".img-container");
        profile.style.backgroundColor = "teal";
        (function boxShadows() {
            r.style.setProperty('--yellow', 'teal');
        })();
        console.log("Teal Theme On");
    }
    else {
        console.log("Teal Theme is Already on");
    }
}

function greenTheme() {
    if (isGreenTheme === false) {
        themeReset()
        isGreenTheme = true;
        const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "green";
        }
        const yellow2 = document.querySelectorAll(".yellow-forever");
        for (i = 0; i < yellow2.length; i++) {
            yellow2[i].style.color = "green";
        }
        const progressBars = document.querySelectorAll(".progress-bar-fill");
        for (i = 0; i < progressBars.length; i++) {
            progressBars[i].style.backgroundColor = "green";
        }
        const profile = document.querySelector(".img-container");
        profile.style.backgroundColor = "green";
        console.log("Green Theme On");
        (function boxShadows() {
            r.style.setProperty('--yellow', 'green');
        })();
    }
    else {
        console.log("Green Theme is Already on");
    }
}

function yellowTheme() {
    if (isYellowTheme === false) {
        themeReset()
        isYellowTheme = true;
        const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = "rgb(255, 187, 0)";
        }
        const yellow2 = document.querySelectorAll(".yellow-forever");
        for (i = 0; i < yellow2.length; i++) {
            yellow2[i].style.color = "yellow";
        }
        const progressBars = document.querySelectorAll(".progress-bar-fill");
        for (i = 0; i < progressBars.length; i++) {
            progressBars[i].style.backgroundColor = "rgb(255, 187, 0)";
        }
        const profile = document.querySelector(".img-container");
        profile.style.backgroundColor = "rgb(255, 187, 0)";
        (function boxShadows() {
            r.style.setProperty('--yellow', 'rgb(255, 187, 0)');
        })();
        console.log("Yellow Theme On");
    }
    else {
        console.log("Yellow Theme is Already on");
    }
}
yellowTheme();

function customColor() {
    const color = document.getElementById("custom-color").value;
    const profile = document.querySelector(".img-container");
    profile.style.backgroundColor = color;
    r.style.setProperty('--yellow', color);
    const progressBars = document.querySelectorAll(".progress-bar-fill");
    for (i = 0; i < progressBars.length; i++) {
        progressBars[i].style.backgroundColor = color;
    }
    const yellow = document.querySelectorAll(".yellow");
        for (i = 0; i < yellow.length; i++) {
            yellow[i].style.color = color;
        }
}