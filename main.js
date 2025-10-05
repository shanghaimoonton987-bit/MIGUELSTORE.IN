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
// 🌈 Additional Features for ACE PRIME.IN

// 🎵 Background Music Toggle
// 🎧 Background Music Control
const bgMusic = new Audio("assets/sounds/background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0;
let musicPlaying = false;
const musicButton = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");

// 🌈 Smooth fade in/out
function fadeAudio(targetVolume, duration) {
  const step = (targetVolume - bgMusic.volume) / (duration / 100);
  const fade = setInterval(() => {
    if ((step > 0 && bgMusic.volume >= targetVolume) ||
        (step < 0 && bgMusic.volume <= targetVolume)) {
      clearInterval(fade);
      bgMusic.volume = targetVolume;
      return;
    }
    bgMusic.volume = Math.min(1, Math.max(0, bgMusic.volume + step));
  }, 100);
}

musicButton.addEventListener("click", () => {
  if (!musicPlaying) {
    bgMusic.play();
    fadeAudio(1, 2000); // fade in over 2 seconds
    musicStatus.textContent = "On";
  } else {
    fadeAudio(0, 1500); // fade out over 1.5 seconds
    setTimeout(() => bgMusic.pause(), 1500);
    musicStatus.textContent = "Off";
  }
  musicPlaying = !musicPlaying;
});

function toggleMusic() {
  if (isMusicPlaying) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
  isMusicPlaying = !isMusicPlaying;
}
const musicButton = document.createElement("button");
musicButton.classList.add("music-btn");
musicButton.innerHTML = "🎵 Music";
musicButton.onclick = toggleMusic;
document.body.appendChild(musicButton);

// 💫 Floating Text Animation
const floatingText = document.createElement("div");
floatingText.classList.add("floating-text");
floatingText.innerText = "💖 Welcome to ACE PRIME.IN 💖";
document.body.appendChild(floatingText);

setInterval(() => {
  floatingText.style.left = Math.random() * window.innerWidth + "px";
  floatingText.style.top = Math.random() * window.innerHeight + "px";
}, 3000);

// 👁️ Simple Visitor Counter (local)
let count = localStorage.getItem("visitCount") || 0;
count++;
localStorage.setItem("visitCount", count);

const counter = document.createElement("div");
counter.classList.add("visit-counter");
counter.innerHTML = `👁️ Visitors: <strong>${count}</strong>`;
document.body.appendChild(counter);

// 💬 Typing Text Animation
const typingTarget = document.querySelector(".content h2 span");
if (typingTarget) {
  const text = typingTarget.textContent;
  typingTarget.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      typingTarget.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
}

// 🌗 Theme Switch Button
const themeToggle = document.createElement("button");
themeToggle.classList.add("theme-toggle");
themeToggle.innerHTML = "🌗 Theme";
themeToggle.onclick = () => {
  document.body.classList.toggle("light-theme");
};
document.body.appendChild(themeToggle);

