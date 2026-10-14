/* ================= IMAGE LIGHTBOX ================= */

function openImage(src) {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  if (!lightbox || !lightboxImage) return;

  lightboxImage.src = src;
  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";
}


/* ================= CLOSE LIGHTBOX ================= */

function closeImage() {
  const lightbox = document.getElementById("imageLightbox");

  if (!lightbox) return;

  lightbox.classList.remove("active");

  document.body.style.overflow = "";
}


/* ================= CLOSE ON BACKDROP CLICK ================= */

document.addEventListener("click", function (event) {

  const lightbox = document.getElementById("imageLightbox");

  if (!lightbox) return;

  if (event.target === lightbox) {
    closeImage();
  }

});


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {
    closeImage();
  }

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