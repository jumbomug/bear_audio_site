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

  // Enhanced Gallery
  const images = [
    "Images/IMG_7109.jpeg",
    "Images/13 Ply Birch Plywood.jpg",
    "Images/Baltic Birch.jpg",
    "Images/IMG_7094.jpeg",
    "Images/IMG_7095.jpeg",
    "Images/IMG_7096.jpeg",
    "Images/IMG_7099.jpeg",
    "Images/IMG_7100.jpeg",
    "Images/IMG_7101.jpeg",
    "Images/IMG_7102.jpeg",
    "Images/IMG_7103.jpeg",
    "Images/IMG_7104.jpeg",
    "Images/IMG_7105.jpeg",
    "Images/IMG_7106.jpeg",
    "Images/IMG_7107.jpeg",
    "Images/IMG_7108.jpeg",
    "Images/IMG_7110.jpeg",
    "Images/IMG_7111.jpeg",
    "Images/IMG_7112.jpeg",
    "Images/IMG_7113.jpeg",
    "Images/IMG_7114.jpeg",
    "Images/IMG_7117.jpeg",
    "Images/IMG_7118.jpeg",
    "Images/IMG_7119.jpeg",
    "Images/IMG_7120.jpeg",
    "Images/IMG_7121.jpeg",
    "Images/IMG_7122.jpeg"
  ];

  let currentImageIndex = 0;
  const galleryImage = document.getElementById('gallery-image');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');
  const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  function updateImage(index) {
    galleryImage.style.opacity = 0;
    setTimeout(() => {
      currentImageIndex = index;
      galleryImage.src = images[currentImageIndex];
      if (lightbox.style.display === 'block') {
        lightboxImage.src = images[currentImageIndex];
      }
      galleryImage.style.opacity = 1;
      updateActiveThumbnail();
    }, 300); // Match the CSS transition duration
  }

  function updateActiveThumbnail() {
    document.querySelectorAll('.gallery-thumbnails img').forEach((img, i) => {
      img.classList.toggle('active', i === currentImageIndex);
    });
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage(currentImageIndex);
  }

  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(currentImageIndex);
  }
  
  function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'block';
    lightboxImage.src = images[currentImageIndex];
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  // Create thumbnails
  if (thumbnailsContainer) {
    images.forEach((src, index) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.alt = `Thumbnail ${index + 1}`;
      thumb.addEventListener('click', () => updateImage(index));
      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Event Listeners
  if(prevButton)
    prevButton.addEventListener('click', showPrevImage);
  if(nextButton)
    nextButton.addEventListener('click', showNextImage);
  if(galleryImage)
    galleryImage.addEventListener('click', () => openLightbox(currentImageIndex));
  if(lightboxClose)
    lightboxClose.addEventListener('click', closeLightbox);
  if(lightboxPrev)
    lightboxPrev.addEventListener('click', showPrevImage);
  if(lightboxNext)
    lightboxNext.addEventListener('click', showNextImage);

  // Close lightbox on outside click
  if(lightbox)
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  
  // Keyboard navigation for lightbox
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
      if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  });

  updateImage(0); // Initial image load
});