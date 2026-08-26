const header =
  document.querySelector(".header");

const backToTop =
  document.getElementById("backToTop");

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");

const themeToggle =
  document.getElementById("themeToggle");



/* =========================
   SAVED THEME
========================= */

if (
  localStorage.getItem("portfolio-theme") === "dark"
) {

  document.body.classList.add("dark");

  themeToggle.textContent = "☀";

}



/* =========================
   SCROLL HEADER
========================= */

function updateScrollUI() {

  const scrolled =
    window.scrollY > 20;


  header.classList.toggle(
    "scrolled",
    scrolled
  );


  backToTop.classList.toggle(
    "show",
    window.scrollY > 500
  );

}


window.addEventListener(
  "scroll",
  updateScrollUI
);


updateScrollUI();



/* =========================
   MOBILE MENU
========================= */

menuToggle.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );

  }
);



nav
  .querySelectorAll("a")
  .forEach((link) => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );

      }
    );

  });



/* =========================
   DARK MODE
========================= */

themeToggle.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "dark"
    );


    const dark =
      document.body.classList.contains(
        "dark"
      );


    themeToggle.textContent =
      dark ? "☀" : "☾";


    localStorage.setItem(
      "portfolio-theme",
      dark ? "dark" : "light"
    );

  }
);



/* =========================
   BACK TO TOP
========================= */

backToTop.addEventListener(
  "click",
  () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  }
);



/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navLinks =
  document.querySelectorAll(
    ".nav a"
  );


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            navLinks.forEach(
              (link) => {

                link.classList.toggle(

                  "active",

                  link.getAttribute(
                    "href"
                  ) ===
                  "#" +
                  entry.target.id

                );

              }
            );

          }

        }
      );

    },

    {

      rootMargin:
        "-40% 0px -50% 0px"

    }

  );


sections.forEach(
  (section) => {

    observer.observe(
      section
    );

  }
);
