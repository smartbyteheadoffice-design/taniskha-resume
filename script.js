// =========================
// Smooth Scroll for Internal Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =========================
// Simple Fade-in Animation on Scroll
// =========================
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

cards.forEach(card => {
  observer.observe(card);
});

// =========================
// Dynamic Year in Footer
// =========================
const footer = document.querySelector('footer p');
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `© ${year} Taniskha Deshmukh | All Rights Reserved`;
}

// =========================
// Click Feedback (UX enhancement)
// =========================
document.querySelectorAll('.contact a').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Contact link clicked:', link.href);
  });
});
