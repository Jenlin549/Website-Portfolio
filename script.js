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
