/* =====================================================
   AOS INITIALIZATION
===================================================== */

AOS.init({
  duration: 800,
  once: true
});


/* =====================================================
   SPLASH SCREEN
   AKASH + PROGRESS BAR 0% → 100%
===================================================== */

const splash = document.querySelector(".splash");
const progressFill = document.querySelector(".progress-fill");
const loadingPercentage = document.getElementById("loading-percentage");


window.addEventListener("load", () => {

  let progress = 0;

  const loadingInterval = setInterval(() => {

    progress += 1;

    progressFill.style.width = progress + "%";
    loadingPercentage.textContent = progress + "%";


    if (progress >= 100) {

      clearInterval(loadingInterval);


      setTimeout(() => {

        splash.classList.add("active");


        setTimeout(() => {

          splash.style.display = "none";

        }, 600);

      }, 300);

    }

  }, 20);

});


/* =====================================================
   POPUP ELEMENTS
===================================================== */

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popup-title");

const popupDesc = document.getElementById("popup-desc");

const popupImg = document.getElementById("popup-img");


/* =====================================================
   PROJECT / INDUSTRY POPUP
===================================================== */

function showPopup(title, description, imageSrc) {

  popupTitle.textContent = title;

  popupDesc.textContent = description;

  popupImg.src = imageSrc;

  popupImg.alt = title + " image";

  openPopup();

}


/* =====================================================
   CERTIFICATE POPUP
===================================================== */

function showCertificatePopup(imgElement) {

  const title =
    imgElement.getAttribute("data-title");

  const src =
    imgElement.src;


  popupTitle.textContent = title;

  popupDesc.textContent = "";

  popupImg.src = src;

  popupImg.alt =
    title + " certificate image";


  openPopup();

}


/* =====================================================
   OPEN POPUP
===================================================== */

function openPopup() {

  popup.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}


/* =====================================================
   CLOSE POPUP
===================================================== */

function closePopup() {

  popup.classList.add("hidden");

  document.body.style.overflow = "";

}


/* =====================================================
   ESCAPE KEY → CLOSE POPUP
===================================================== */

window.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    !popup.classList.contains("hidden")
  ) {

    closePopup();

  }

});


/* =====================================================
   CLICK OUTSIDE POPUP → CLOSE
===================================================== */

popup.addEventListener("click", (event) => {

  if (event.target === popup) {

    closePopup();

  }

});


/* =====================================================
   NAVIGATION SMOOTH SCROLL
===================================================== */

const navLinks =
  document.querySelectorAll("nav a");

const sections =
  document.querySelectorAll("section");


navLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    event.preventDefault();


    const targetId =
      link.getAttribute("href").slice(1);


    const targetSection =
      document.getElementById(targetId);


    if (targetSection) {

      targetSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* =====================================================
   ACTIVE NAVIGATION SECTION
===================================================== */

window.addEventListener("scroll", () => {

  let current = "";


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 100;


    if (window.pageYOffset >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");


    if (
      link.getAttribute("href").slice(1)
      === current
    ) {

      link.classList.add("active");

    }

  });

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop =
  document.getElementById("back-to-top");


window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    backToTop.style.display = "block";

  } else {

    backToTop.style.display = "none";

  }

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
