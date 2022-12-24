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
    }
}