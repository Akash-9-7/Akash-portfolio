/* =====================================================
   INTERNSHIP CASE STUDY
===================================================== */


/* =====================================================
   AOS INITIALIZATION
===================================================== */

AOS.init({
  duration: 800,
  once: true,
  offset: 80
});


/* =====================================================
   RETURN TO FIELD LOG
   PREVENT SPLASH SCREEN
===================================================== */

const fieldLogLinks = document.querySelectorAll(
  '.back-link, .back-field-log, .footer-back'
);

fieldLogLinks.forEach((link) => {

  link.addEventListener('click', function () {

    sessionStorage.setItem(
      'returnFromProject',
      'true'
    );

    sessionStorage.removeItem(
      'projectScroll'
    );

  });

});


/* =====================================================
   NEXT FIELD RECORD
   RETURN TO FIELD LOG
===================================================== */

const nextRecord = document.querySelector(
  '.next-record'
);

if (nextRecord) {

  nextRecord.addEventListener('click', function () {

    sessionStorage.setItem(
      'returnFromProject',
      'true'
    );

    sessionStorage.removeItem(
      'projectScroll'
    );

  });

}


/* =====================================================
   ESCAPE SAFETY
===================================================== */

window.addEventListener('pageshow', function () {

  document.body.style.overflow = '';

});
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