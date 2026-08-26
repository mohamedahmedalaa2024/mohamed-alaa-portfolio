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

const loader =
  document.getElementById("loader");



/* =========================
   LOADING SCREEN
========================= */

window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        loader.classList.add("hide");

      },
      700
    );

  }
);



/* =========================
   SAVED THEME
========================= */

if (
  localStorage.getItem(
    "portfolio-theme"
  ) === "dark"
) {

  document.body.classList.add(
    "dark"
  );

  themeToggle.textContent =
    "☀";

}



/* =========================
   SCROLL UI
========================= */

function updateScrollUI() {

  header.classList.toggle(
    "scrolled",
    window.scrollY > 20
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
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );

        }
      );

    }
  );



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
      dark
        ? "☀"
        : "☾";


    localStorage.setItem(
      "portfolio-theme",
      dark
        ? "dark"
        : "light"
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


const navigationObserver =
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

    navigationObserver.observe(
      section
    );

  }
);



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const revealObserver =
  new IntersectionObserver(

    (entries) => {

      entries.forEach(
        (entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "visible"
            );

          }

        }
      );

    },

    {

      threshold: .12

    }

  );


revealElements.forEach(
  (element) => {

    revealObserver.observe(
      element
    );

  }
);



/* =========================
   CERTIFICATE MODAL
========================= */

const certificateModal =
  document.getElementById(
    "certificateModal"
  );


const certificateImage =
  document.getElementById(
    "modalCertificateImage"
  );


const certificateTitle =
  document.getElementById(
    "modalCertificateTitle"
  );


const certificateWrapper =
  document.querySelector(
    ".modal-image-wrapper"
  );


const viewCertificateButtons =
  document.querySelectorAll(
    ".view-certificate"
  );


const closeCertificate =
  document.getElementById(
    "closeCertificate"
  );


const previousCertificate =
  document.getElementById(
    "previousCertificate"
  );


const nextCertificate =
  document.getElementById(
    "nextCertificate"
  );


let currentCertificate =
  0;


const certificates =
  Array.from(
    viewCertificateButtons
  ).map(
    (button) => ({

      image:
        button.dataset.image,

      title:
        button.dataset.title

    })
  );



function showCertificate(
  index
) {

  currentCertificate =
    index;


  certificateImage.src =
    certificates[index].image;


  certificateTitle.textContent =
    certificates[index].title;


  certificateWrapper.classList.remove(
    "zoomed"
  );

}



viewCertificateButtons.forEach(
  (button, index) => {

    button.addEventListener(
      "click",
      () => {

        showCertificate(
          index
        );


        certificateModal.classList.add(
          "active"
        );


        document.body.classList.add(
          "modal-open"
        );

      }
    );

  }
);



previousCertificate.addEventListener(
  "click",
  () => {

    let previous =
      currentCertificate - 1;


    if (
      previous < 0
    ) {

      previous =
        certificates.length - 1;

    }


    showCertificate(
      previous
    );

  }
);



nextCertificate.addEventListener(
  "click",
  () => {

    let next =
      currentCertificate + 1;


    if (
      next >=
      certificates.length
    ) {

      next = 0;

    }


    showCertificate(
      next
    );

  }
);



closeCertificate.addEventListener(
  "click",
  () => {

    certificateModal.classList.remove(
      "active"
    );


    document.body.classList.remove(
      "modal-open"
    );


    certificateWrapper.classList.remove(
      "zoomed"
    );

  }
);



certificateModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      certificateModal
    ) {

      certificateModal.classList.remove(
        "active"
      );


      document.body.classList.remove(
        "modal-open"
      );

    }

  }
);



certificateWrapper.addEventListener(
  "click",
  () => {

    certificateWrapper.classList.toggle(
      "zoomed"
    );

  }
);



/* =========================
   CV MODAL
========================= */

const cvModal =
  document.getElementById(
    "cvModal"
  );


const viewCV =
  document.getElementById(
    "viewCV"
  );


const closeCV =
  document.getElementById(
    "closeCV"
  );


const cvFrame =
  document.getElementById(
    "cvFrame"
  );


const cvFile =
  "files/Mohamed-Ahmed-Alaa-CV.pdf";



viewCV.addEventListener(
  "click",
  () => {

    cvFrame.src =
      cvFile;


    cvModal.classList.add(
      "active"
    );


    document.body.classList.add(
      "modal-open"
    );

  }
);



function closeCVModal() {

  cvModal.classList.remove(
    "active"
  );


  cvFrame.src =
    "";


  document.body.classList.remove(
    "modal-open"
  );

}



closeCV.addEventListener(
  "click",
  closeCVModal
);



cvModal.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      cvModal
    ) {

      closeCVModal();

    }

  }
);



/* =========================
   KEYBOARD CONTROLS
========================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      certificateModal.classList.remove(
        "active"
      );


      closeCVModal();


      document.body.classList.remove(
        "modal-open"
      );

    }


    if (
      certificateModal.classList.contains(
        "active"
      )
    ) {

      if (
        event.key ===
        "ArrowLeft"
      ) {

        previousCertificate.click();

      }


      if (
        event.key ===
        "ArrowRight"
      ) {

        nextCertificate.click();

      }

    }

  }
);



/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );


contactForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();


    const name =
      document.getElementById(
        "name"
      ).value;


    const email =
      document.getElementById(
        "email"
      ).value;


    const message =
      document.getElementById(
        "message"
      ).value;


    const subject =
      encodeURIComponent(
        "Portfolio Contact - " +
        name
      );


    const body =
      encodeURIComponent(

        "Name: " +
        name +

        "\n\nEmail: " +
        email +

        "\n\nMessage:\n" +
        message

      );


    window.location.href =
      "mailto:mohamed.ahmed.alaa.2024@gmail.com" +
      "?subject=" +
      subject +
      "&body=" +
      body;

  }
);
