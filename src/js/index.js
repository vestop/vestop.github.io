///Particles
window.onload = () => {
  const audio = document.querySelector("audio");
  Particles.init({
    selector: ".background",
    color: "#FF6F61",
    connectParticles: true,
    maxParticles: 100,
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

///WORKS TABS SWITCHER
const latest = document.querySelector(".latest");
const component = document.querySelector(".component");
const realTab = document.querySelector(".real");

const tabItem = document.querySelectorAll(".works__item");

// Turns node list into an array
const tabItemArray = Array.from(tabItem);

if (latest) {
  latest.addEventListener("click", showAll);
  function showAll() {
    tabItemArray.forEach((li) => {
      li.classList.remove("remove");
      li.classList.add("show");
    });

    latest.classList.add("works__tab--active");
    component.classList.remove("works__tab--active");
    realTab.classList.remove("works__tab--active");
  }

  component.addEventListener("click", showComps);
  function showComps() {
    tabItemArray.forEach((li) => {
      li.classList.remove("remove");

      if (!li.dataset.comp) {
        li.classList.add("remove");
      }
    });

    latest.classList.remove("works__tab--active");
    component.classList.add("works__tab--active");
    realTab.classList.remove("works__tab--active");
  }

  realTab.addEventListener("click", showReal);
  function showReal() {
    tabItemArray.forEach((li) => {
      li.classList.remove("remove");

      if (!li.dataset.real) {
        li.classList.add("remove");
      }
    });

    latest.classList.remove("works__tab--active");
    component.classList.remove("works__tab--active");
    realTab.classList.add("works__tab--active");
  }
}
