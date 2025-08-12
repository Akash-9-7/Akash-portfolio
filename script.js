// Initialize AOS animations
AOS.init();

// Splash screen (fade out once per session)
const splash = document.querySelector('.splash');

window.addEventListener('load', () => {
  if (!sessionStorage.getItem('splashShown')) {
    // Trigger fade out after a tiny delay to enable transition
    setTimeout(() => {
      splash.classList.add('active'); // active sets opacity to 0
    }, 100);

    // After fade-out transition, hide splash and mark as shown
    setTimeout(() => {
      splash.style.display = 'none';
      sessionStorage.setItem('splashShown', 'true');
    }, 700); // 500ms transition + 200ms buffer
  } else {
    // If already shown, hide splash immediately
    splash.style.display = 'none';
  }
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
  popupImg.alt = title + " image";
  openPopup();
}

function showCertificatePopup(imgElement) {
  const title = imgElement.getAttribute('data-title');
  const src = imgElement.src;

  popupTitle.textContent = title;
  popupDesc.textContent = ""; // No description here
  popupImg.src = src;
  popupImg.alt = title + " certificate image";
  openPopup();
}

function showProfilePopup() {
  popupTitle.textContent = "Akash";
  popupDesc.textContent = "";
  popupImg.src = "assets/profile.jpeg";
  popupImg.alt = "Profile Image";
  openPopup();
}

function openPopup() {
  popup.classList.remove('hidden');
  document.body.style.overflow = 'hidden';  // Disable background scroll
  popup.focus();
}

function closePopup() {
  popup.classList.add('hidden');
  document.body.style.overflow = '';  // Enable background scroll
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && !popup.classList.contains('hidden')) {
    closePopup();
  }
});

// Smooth scroll for navigation links & active section highlighting
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Tooltip on social icons hover
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
  const tooltipText = {
    'fas fa-envelope': 'Send Email',
    'fab fa-linkedin': 'LinkedIn Profile',
    'fab fa-github': 'GitHub Profile',
    'fab fa-instagram': 'Instagram Profile',
  };

  const iconClass = icon.querySelector('i').className;
  const tooltip = document.createElement('span');
  tooltip.className = 'tooltip-text';
  tooltip.textContent = tooltipText[iconClass] || '';
  icon.appendChild(tooltip);

  icon.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  });

  icon.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  });
});
