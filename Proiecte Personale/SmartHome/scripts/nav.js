const navItems = document.querySelectorAll(".nav-items");
    const navDropdown = document.querySelectorAll(".services-dropdown");

function scroll() { 
    if (window.scrollY > 300) {
        document.querySelector(".nav-container").style = "background-color: rgba(255, 255, 255, 0.726)";  
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style = "color: black;"
        }
        for (let a = 0; a < navDropdown.length; a++) {
            navDropdown[a].style = "background-color: rgba(255, 255, 255, 0.725);"
        }
        document.querySelector(".active-bar").style = "background-color:black;"
        
    }
    else if (window.scrollY < 300) {
        document.querySelector(".nav-container").style = "background-color: rgba(255, 255, 255, 0)";
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].style = "color: white;"
        }
        for (let a = 0; a < navDropdown.length; a++) {
            navDropdown[a].style = "background-color: rgb(39, 39, 39);"
        }
        document.querySelector(".active-bar").style = "background-color:white;"
    }
}

function whitePages() {
    console.log("White Page");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style = "color: black;"
    }
    for (let a = 0; a < navDropdown.length; a++) {
        navDropdown[a].style = "background-color: rgba(255, 255, 255, 0.725);"
    }
}
