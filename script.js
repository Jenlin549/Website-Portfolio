// Typing Effect
new Typed("#typed", {
  strings: [
    "Electronics Engineer",
    "Website Developer",
    "IoT Enthusiast",
    "VLSI Designer",
    "Data Analyst",
  ],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: "|"
});


// Load Particles.js
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles.js config loaded');
});
// Toggle menu on hamburger click
document.getElementById('mobile-menu').addEventListener('click', function () {
  document.getElementById('nav-list').classList.toggle('active');
});

// Close menu on nav link click (for mobile view)
const navLinks = document.querySelectorAll('#nav-list a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-list').classList.remove('active');
  });
});

