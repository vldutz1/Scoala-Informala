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