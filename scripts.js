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

  const waitlistForm = document.querySelector('#preorder form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const container = waitlistForm.parentElement;
      container.innerHTML = '<h3>Thanks for joining the waitlist!</h3><p>We\'ll notify you as soon as pre-orders are available.</p>';
    });
  }

  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const container = contactForm.parentElement;
      container.innerHTML = '<h3>Thank you for your message!</h3><p>We\'ll get back to you as soon as possible.</p>';
    });
  }
});
