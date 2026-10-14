/* =================================
   PROJECT 2 - IMAGE LIGHTBOX
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const imageLightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");


    // Check lightbox elements
    if (!imageLightbox || !lightboxImage || !lightboxClose) {
        console.error("Lightbox elements not found.");
        return;
    }


    /* OPEN IMAGE */

    window.openImage = function (imageSrc) {

        lightboxImage.src = imageSrc;

        imageLightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    };


    /* CLOSE IMAGE */

    function closeImage() {

        imageLightbox.classList.remove("active");

        lightboxImage.src = "";

        document.body.style.overflow = "";
    }


    /* CLOSE BUTTON */

    lightboxClose.addEventListener("click", function (event) {

        event.stopPropagation();

        closeImage();

    });


    /* CLICK OUTSIDE IMAGE */

    imageLightbox.addEventListener("click", function (event) {

        if (event.target === imageLightbox) {

            closeImage();

        }

    });


    /* ESC KEY */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            imageLightbox.classList.contains("active")
        ) {

            closeImage();

        }

    });

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