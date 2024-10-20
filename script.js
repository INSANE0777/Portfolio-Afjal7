document.getElementById('scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
const radialBackground = document.querySelector('.radial-background');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const radius = Math.sqrt(Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2));
  const angle = Math.atan2(y - height / 2, x - width / 2);

  const gradient = `radial-gradient(circle at ${x}px ${y}px, #0f172a 0%, #172554 ${radius}px, #1e293b ${radius * 1.5}px)`;
  radialBackground.style.background = gradient;
});
