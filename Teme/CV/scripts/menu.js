function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const screenWidth = window.matchMedia("(min-width: 700px)")

function openRightMenu() {
  if (screenWidth.matches){
    document.getElementById("right-menu").style.width = "5%";
  }else{
    document.getElementById("right-menu").style.width = "20%";
  }
}

function closeRightMenu() {
  document.getElementById("right-menu").style.width = "0";
}

isEmailMenuOpen = false;

function toggleEmailMenu() {
  if (isEmailMenuOpen === false){
    isEmailMenuOpen = true;
    document.querySelector(".email-menu").style.height = "100%";
    document.querySelector(".email-menu").style.width = "100%";
    document.getElementById("email-icon").classList.add("social-icon-email-active");
  }
  else {
    isEmailMenuOpen = false;
    document.querySelector(".email-menu").style.height = "0";
    document.querySelector(".email-menu").style.width = "0";
    document.getElementById("email-icon").classList.remove("social-icon-email-active");
    document.querySelector(".email-option2").innerText = "Copy Email";
  }
}

function copyEmail() {
  navigator.clipboard.writeText("vladchereches@yahoo.com");
  console.log("Email Copied");
  document.querySelector(".email-option2").innerText = "Copied!";
}