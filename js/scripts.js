const btn = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");

btn.addEventListener('click', event => {
  nav.classList.toggle("hidden");
  btn.classList.toggle("close");
  return false;
}) 