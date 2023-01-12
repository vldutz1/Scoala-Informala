function openRightMenu() {
    document.getElementById("right-menu").style.width = "30%";
    document.getElementById("right-menu-open-btn").classList.toggle("hidden");
    document.getElementById("right-menu-close-btn").classList.toggle("hidden");
}

function closeRightMenu() {
    document.getElementById("right-menu").style.width = "0";
    document.getElementById("right-menu-open-btn").classList.toggle("hidden");
    document.getElementById("right-menu-close-btn").classList.toggle("hidden");
}

function mobileServices() {
       document.getElementById("right-menu-services").classList.toggle("hidden");  
}

function mobileProducts() {
    document.getElementById("right-menu-products").classList.toggle("hidden");  
}