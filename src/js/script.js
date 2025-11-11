const toggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
// Cerrar menú al hacer clic fuera de él
document.addEventListener("click", function(e) {
    if (toggle.checked && !menu.contains(e.target) && e.target !== toggle && e.target.tagName !== "LABEL") {
        toggle.checked = false;
    }

});