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