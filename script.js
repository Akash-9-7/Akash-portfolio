// Initialize AOS animations
AOS.init();

// Splash screen (optional)
const splash = document.querySelector('.splash');
window.addEventListener('load', () => {
  splash.classList.add('active');
  setTimeout(() => splash.classList.remove('active'), 2000);
});

// Popup functionality
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDesc = document.getElementById('popup-desc');
const popupImg = document.getElementById('popup-img');

function showPopup(title, description, imageSrc) {
  popupTitle.textContent = title;
  popupDesc.textContent = description;
  popupImg.src = imageSrc;
  popup.classList.remove('hidden');
}

function closePopup() {
  popup.classList.add('hidden');
}
function showCertificatePopup(imgElement) {
  const title = imgElement.getAttribute('data-title');
  const src = imgElement.src;

  popupTitle.textContent = title;
  popupDesc.textContent = ""; // No description needed here, keep empty or add if you want
  popupImg.src = src;
  popup.classList.remove('hidden');
}
