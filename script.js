document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.getElementById('stars-container');
  const starCount = 200;

  function createStar() {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 20 + 10; // 10-30 seconds
      star.style.animationDuration = `4s, ${duration}s`; // twinkle and move durations

      const delay = Math.random() * -duration;
      star.style.animationDelay = `0s, ${delay}s`; // twinkle and move delays

      // Randomize direction
      const angle = Math.random() * 360;
      star.style.transform = `rotate(${angle}deg)`;

      return star;
  }

  function createStarField() {
      for (let i = 0; i < starCount; i++) {
          starsContainer.appendChild(createStar());
      }
  }

  createStarField();

  // Function to remove stars that have moved off-screen and create new ones
  function updateStars() {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => {
          const rect = star.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight || rect.right < 0 || rect.left > window.innerWidth) {
              star.remove();
              starsContainer.appendChild(createStar());
          }
      });
  }

  // Update stars periodically
  setInterval(updateStars, 1000); // Check every second

  // Existing scroll-to-top functionality
  document.getElementById('scroll-to-top').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const radialBackground = document.querySelector('.radial-background');
  const mainContent = document.querySelector('main');
  const header = document.querySelector('header');

  document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Calculate the position of the gradient center
      const centerX = (x / width) * 100;
      const centerY = (y / height) * 100;

      // Create a radial gradient that follows the mouse
      const gradient = `radial-gradient(circle at ${centerX}% ${centerY}%, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.7) 50%, rgba(23, 37, 84, 0.7) 100%)`;
      
      // Apply the gradient to the background
      radialBackground.style.background = gradient;

      // Calculate shake amount based on mouse position
      const shakeX = (x - width / 2) / width * 5; // Max 5px shift
      const shakeY = (y - height / 2) / height * 5; // Max 5px shift

      // Apply shake to main content and header
      mainContent.style.transform = `translate(${shakeX}px, ${shakeY}px)`;
      header.style.transform = `translate(${shakeX * 0.5}px, ${shakeY * 0.5}px)`; // Reduced effect on header
  });
});