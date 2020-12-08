///Particles
window.onload = () => {
  Particles.init({
    selector: ".background",
    color: "#FF6F61",
    connectParticles: true,
    maxParticles: 150,
    sizeVariations: 5,
    responsive: [
      {
        breakpoint: 1024,
        options: {
          maxParticles: 80,
        },
      },
      {
        breakpoint: 768,
        options: {
          maxParticles: 30,
        },
      },
    ],
  });
};

const menuBtn = document.querySelector(".menu-btn");
const list = document.querySelector(".main-nav__list");
const lang = document.querySelector(".lang");
///Preload
window.addEventListener("load", () => {
  const preload = document.querySelector(".preload");
  setTimeout(function () {
    preload.classList.add("fGhjj");
  }, 1000);
  menuBtn.classList.remove("active");
  list.classList.remove("list-open");
  // lang.classList.remove("visable");
});

///Menu

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("close");
  list.classList.toggle("list-open");
  // lang.classList.toggle("visable");
});

// initCanvas();
