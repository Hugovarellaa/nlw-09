const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("#header ul li a");

for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

function openMenu() {
  nav.classList.add("show");
}
function closeMenu() {
  nav.classList.remove("show");
}
