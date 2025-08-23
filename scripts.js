document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  setTimeout(() => {
    body.classList.remove('loading');
  }, 3000);

  // Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // On-scroll animations
  const animatedSections = document.querySelectorAll('.animated-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  animatedSections.forEach(section => {
    observer.observe(section);
  });

  
});