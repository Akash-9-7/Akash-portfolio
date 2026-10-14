/* =====================================================
   AOS INITIALIZATION
===================================================== */

AOS.init({
  duration: 800,
  once: true
});


/* =====================================================
   SPLASH SCREEN
   NORMAL OPEN / REFRESH → SHOW
   RETURN FROM PROJECT / INTERNSHIP → SKIP ONCE
===================================================== */

const splash =
  document.querySelector(".splash");

const progressFill =
  document.querySelector(".progress-fill");

const loadingPercentage =
  document.getElementById("loading-percentage");

const returnFromProject =
  sessionStorage.getItem("returnFromProject");


if (splash && returnFromProject === "true") {

  splash.classList.add("active");

  splash.style.display = "none";

}

else if (splash) {

  let progress = 0;

  const loadingInterval =
    setInterval(() => {

      progress += 1;


      if (progressFill) {

        progressFill.style.width =
          progress + "%";

      }


      if (loadingPercentage) {

        loadingPercentage.textContent =
          progress + "%";

      }


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

}


/* =====================================================
   POPUP ELEMENTS
===================================================== */

const popup =
  document.getElementById("popup");

const popupTitle =
  document.getElementById("popup-title");

const popupDesc =
  document.getElementById("popup-desc");

const popupImg =
  document.getElementById("popup-img");


/* =====================================================
   PROJECT / INDUSTRY POPUP
===================================================== */

function showPopup(
  title,
  description,
  imageSrc
) {

  if (
    !popup ||
    !popupTitle ||
    !popupDesc ||
    !popupImg
  ) {

    return;

  }


  popupTitle.textContent =
    title;

  popupDesc.textContent =
    description;

  popupImg.src =
    imageSrc;

  popupImg.alt =
    title + " image";


  openPopup();

}


/* =====================================================
   CERTIFICATE DATA
===================================================== */

const certificates = [

  {
    image: "certificates/aws.jpeg",
    title: "AWS Certified Cloud Practitioner"
  },

  {
    image: "certificates/nptel.jpeg",
    title: "NPTEL — Internet of Things"
  },

  {
    image: "certificates/presentation1.jpeg",
    title: "Technical Presentation"
  },

  {
    image: "certificates/python.jpeg",
    title: "Python Programming"
  },

  {
    image: "certificates/workshop1.jpeg",
    title: "Technical Workshop"
  },

  {
    image: "certificates/presentation2.jpeg",
    title: "Technical Presentation"
  },

  {
    image: "certificates/valuaddedcourse.jpeg",
    title: "Value Added Course"
  },

  {
    image: "certificates/aurdino.png",
    title: "Arduino"
  },

  {
    image: "certificates/c.png",
    title: "C Programming"
  },

  {
    image: "certificates/computers.png",
    title: "Computer Fundamentals"
  },

  {
    image: "certificates/java.png",
    title: "Java Programming"
  },

  {
    image: "certificates/html.png",
    title: "HTML & Web Development"
  },

  {
    image: "certificates/conference.png",
    title: "Technical Conference"
  },

  {
    image: "certificates/workshop2.png",
    title: "End-to-End Web Development"
  }

];


let currentCertificate = 0;


/* =====================================================
   OPEN CERTIFICATE VIEWER
===================================================== */

function openCertificateViewer(index) {

  currentCertificate = index;


  const viewer =
    document.getElementById(
      "certificateViewer"
    );


  if (!viewer) return;


  viewer.classList.add("active");


  document.body.style.overflow =
    "hidden";


  updateCertificateViewer();

}


/* =====================================================
   CLOSE CERTIFICATE VIEWER
===================================================== */

function closeCertificateViewer() {

  const viewer =
    document.getElementById(
      "certificateViewer"
    );


  if (!viewer) return;


  viewer.classList.remove(
    "active"
  );


  document.body.style.overflow =
    "";

}


/* =====================================================
   UPDATE CERTIFICATE VIEWER
===================================================== */

function updateCertificateViewer() {

  const certificate =
    certificates[
      currentCertificate
    ];


  if (!certificate) return;


  const image =
    document.getElementById(
      "viewerImage"
    );


  const title =
    document.getElementById(
      "viewerTitle"
    );


  const number =
    document.getElementById(
      "viewerNumber"
    );


  if (image) {

    image.src =
      certificate.image;

    image.alt =
      certificate.title;

  }


  if (title) {

    title.textContent =
      certificate.title;

  }


  if (number) {

    number.textContent =

      String(
        currentCertificate + 1
      ).padStart(2, "0")

      +

      " / "

      +

      String(
        certificates.length
      ).padStart(2, "0");

  }

}


/* =====================================================
   NEXT / PREVIOUS CERTIFICATE
===================================================== */

function viewerMove(direction) {

  currentCertificate +=
    direction;


  if (
    currentCertificate < 0
  ) {

    currentCertificate =
      certificates.length - 1;

  }


  if (
    currentCertificate >=
    certificates.length
  ) {

    currentCertificate = 0;

  }


  updateCertificateViewer();

}


/* =====================================================
   CERTIFICATE HORIZONTAL SCROLL
===================================================== */

const certificateWrapper =
  document.getElementById(
    "certificateStripWrapper"
  );


const certificateStrip =
  document.getElementById(
    "certificateStrip"
  );


const certificateProgress =
  document.getElementById(
    "certificateProgress"
  );


/* =====================================================
   MOVE CERTIFICATE
   OPTIONAL REEL BUTTON SUPPORT
===================================================== */

function moveCertificate(direction) {

  if (!certificateWrapper) {

    return;

  }


  const card =
    certificateStrip?.querySelector(
      ".certificate-film-card"
    );


  if (!card) return;


  const gap = 22;


  const cardWidth =
    card.offsetWidth + gap;


  certificateWrapper.scrollBy({

    left:
      direction * cardWidth,

    behavior:
      "smooth"

  });

}


/* =====================================================
   UPDATE CERTIFICATE SCROLL PROGRESS
===================================================== */

function updateCertificateProgress() {

  if (!certificateWrapper) {

    return;

  }


  const maxScroll =

    certificateWrapper.scrollWidth
    -
    certificateWrapper.clientWidth;


  if (maxScroll <= 0) {

    if (certificateProgress) {

      certificateProgress.style.width =
        "100%";

    }

    return;

  }


  const percentage =

    (
      certificateWrapper.scrollLeft
      /
      maxScroll
    )
    *
    100;


  if (certificateProgress) {

    certificateProgress.style.width =

      Math.min(
        100,
        Math.max(
          0,
          percentage
        )
      )

      + "%";

  }

}


/* =====================================================
   CERTIFICATE SCROLL EVENT
===================================================== */

if (certificateWrapper) {

  certificateWrapper.addEventListener(
    "scroll",
    updateCertificateProgress,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    updateCertificateProgress
  );


  window.addEventListener(
    "load",
    updateCertificateProgress
  );


  updateCertificateProgress();

}


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener(
  "keydown",
  function(event) {

    const viewer =
      document.getElementById(
        "certificateViewer"
      );


    if (
      !viewer ||
      !viewer.classList.contains(
        "active"
      )
    ) {

      return;

    }


    /* ESC */

    if (
      event.key === "Escape"
    ) {

      closeCertificateViewer();

    }


    /* NEXT */

    if (
      event.key === "ArrowRight"
    ) {

      viewerMove(1);

    }


    /* PREVIOUS */

    if (
      event.key === "ArrowLeft"
    ) {

      viewerMove(-1);

    }

  }
);


/* =====================================================
   CLICK OUTSIDE CERTIFICATE VIEWER
   → CLOSE
===================================================== */

const certificateViewer =
  document.getElementById(
    "certificateViewer"
  );


if (certificateViewer) {

  certificateViewer.addEventListener(
    "click",
    function(event) {

      if (
        event.target === this
      ) {

        closeCertificateViewer();

      }

    }
  );

}


/* =====================================================
   NAVIGATION SMOOTH SCROLL
===================================================== */

const navLinks =
  document.querySelectorAll(
    "nav a"
  );


const sections =
  document.querySelectorAll(
    "section"
  );


navLinks.forEach(
  (link) => {

    link.addEventListener(
      "click",
      (event) => {

        event.preventDefault();


        const href =
          link.getAttribute(
            "href"
          );


        if (
          !href ||
          !href.startsWith("#")
        ) {

          return;

        }


        const targetId =
          href.slice(1);


        const targetSection =
          document.getElementById(
            targetId
          );


        if (targetSection) {

          targetSection.scrollIntoView({

            behavior:
              "smooth"

          });

        }

      }
    );

  }
);


/* =====================================================
   ACTIVE NAVIGATION SECTION
===================================================== */

window.addEventListener(
  "scroll",
  () => {

    let current = "";


    sections.forEach(
      (section) => {

        const sectionTop =
          section.offsetTop - 100;


        if (
          window.pageYOffset >=
          sectionTop
        ) {

          current =
            section.getAttribute(
              "id"
            );

        }

      }
    );


    navLinks.forEach(
      (link) => {

        link.classList.remove(
          "active"
        );


        const href =
          link.getAttribute(
            "href"
          );


        if (
          !href ||
          !href.startsWith("#")
        ) {

          return;

        }


        const linkTarget =
          href.slice(1);


        if (
          linkTarget ===
          current
        ) {

          link.classList.add(
            "active"
          );

        }

      }
    );

  }
);


// ================= BACK TO TOP =================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


/* =====================================================
   RESTORE PROJECT SCROLL POSITION
   PROJECT / INTERNSHIP PAGE
   → BACK TO MAIN PORTFOLIO
===================================================== */

window.addEventListener(
  "load",
  () => {

    const savedScroll =
      sessionStorage.getItem(
        "projectScroll"
      );


    const returnFromProject =
      sessionStorage.getItem(
        "returnFromProject"
      );


    if (
      savedScroll !== null &&
      returnFromProject === "true"
    ) {

      setTimeout(
        () => {

          window.scrollTo({

            top:
              parseInt(
                savedScroll,
                10
              ),

            behavior:
              "auto"

          });


          sessionStorage.removeItem(
            "projectScroll"
          );


          sessionStorage.removeItem(
            "returnFromProject"
          );


        },
        100
      );

    }

  }
);
