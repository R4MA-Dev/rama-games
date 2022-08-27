export function navBar(){
    let hamburger = document.getElementById("div");
    let ulMenu = document.getElementById("ul");
    
    hamburger.classList.toggle("active");
    ulMenu.classList.toggle("active");
  }