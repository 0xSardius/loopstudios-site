const btn = document.getElementById("menu-btn");

btn.addEventListener("click", navTogge);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  btn.classList.toggle("open");
}
