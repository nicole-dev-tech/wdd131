// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("show");

if(menuBtn.textContent === "&#9776;"){
menuBtn.textContent = "&#88;"
}else{
menuBtn.textContent = "&#9776;"
}
});
