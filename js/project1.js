function openImage(src) {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  lightboxImage.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImage() {
  const lightbox = document.getElementById("imageLightbox");

  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

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