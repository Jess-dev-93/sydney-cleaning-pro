// Simple testimonials scroll
document.addEventListener('DOMContentLoaded', () => {
  const testimonials = document.getElementById('testimonials');
  if (testimonials) {
    setInterval(() => {
      testimonials.scrollLeft += 320; // Slide to next
      if (testimonials.scrollLeft >= testimonials.scrollWidth) {
        testimonials.scrollLeft = 0;
      }
    }, 5000);
  }

  // Smooth form submit
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Optional: Add loading state
      form.submit();
    });
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    // This toggles the 'hidden' class on and off
    mobileMenu.classList.toggle('hidden');
  });

  // Optional: Close menu when a link is clicked
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}