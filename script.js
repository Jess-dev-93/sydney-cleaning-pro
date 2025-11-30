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