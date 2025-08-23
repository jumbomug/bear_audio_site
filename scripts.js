document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

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
    "Images/IMG_7109.jpeg",
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

  function updateImage() {
    galleryImage.src = images[currentImageIndex];
  }

  prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });

  updateImage(); // Initial image load
});