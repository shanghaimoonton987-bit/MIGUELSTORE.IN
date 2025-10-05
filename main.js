// 🌸 ACE PRIME.IN — main.js
// Adds floating particles, smooth transitions, and theme effects

document.addEventListener("DOMContentLoaded", () => {
  console.log("ACE PRIME.IN is now live!");

  // 🌈 Smooth fade between pages
  document.body.classList.add("fade-in");

  // 💫 Create floating particle effect
  const canvas = document.createElement("canvas");
  canvas.classList.add("particle-canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let particles = [];
  const numParticles = 80;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`,
        speedX: Math.random() * 0.6 - 0.3,
        speedY: Math.random() * 0.6 - 0.3,
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;

      // wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  createParticles();
  drawParticles();
  window.addEventListener("resize", resizeCanvas);

  // ⚡ Click sound for buttons
  const clickSound = new Audio("assets/sounds/click.mp3");
  document.querySelectorAll(".btn, nav a").forEach(btn => {
    btn.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
});
