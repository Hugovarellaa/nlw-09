const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll("#header ul li a");

//fecha menu ao clickar nos links
for (const link of links) {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}

//abre menu
function openMenu() {
  nav.classList.add("show");
}

//fecha menu
function closeMenu() {
  nav.classList.remove("show");
}

// shadow header with  scroll
function changeHeader() {
  const header = document.querySelector("#header");
  const navHeight = header.offsetHeight;
  if (window.scrollY >= navHeight) {
    //scroll e maior que a altura do header
    header.classList.add("scroll");
  } else {
    //scroll e menor que a altura do header
    header.classList.remove("scroll");
  }
}

// active link
const sections = document.querySelectorAll("main section[id]");

function activeMenuLink() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  changeHeader();
  activeMenuLink();
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
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
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
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .brand, #footer .social
  `,
  { interval: 100 }
);

// Button back to top
function backToTop() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (window.scrollY >= 560) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

window.addEventListener("scroll", () => backToTop());
