const hamburgerBtn = document.getElementById('hamburger-btn');
// The HTML uses a element with class "headerlinks" for the menu, not an id 'nav-links'
const navLinks = document.querySelector('.headerlinks');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    if (navLinks) {
      navLinks.classList.toggle('show');
    } else {
      // fallback: try to find #nav-links as a last resort
      const fallback = document.getElementById('nav-links');
      if (fallback) fallback.classList.toggle('show');
    }
  });
} else {
  console.warn('Hamburger button (#hamburger-btn) not found in DOM.');
}