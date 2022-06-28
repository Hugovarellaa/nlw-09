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

// shadow header with  scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    //scroll e maior que a altura do header
    header.classList.add("scroll");
  } else {
    //scroll e menor que a altura do header
    header.classList.remove("scroll");
  }
});

// Testimonial Swiper-js

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  mousewheel: true,
  keyboard: true,
});

// ScrollReveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
  #home .images ,#home .text, 
  #about images, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .tesimonials,
  #contact .text, #contact .links
  
  `,
  { interval: 100 }
);
