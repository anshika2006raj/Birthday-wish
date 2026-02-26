// Dark Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Fireworks Effect on Load
window.onload = function () {
  setInterval(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 2000);
};


function randomFireworks() {
  confetti({
    particleCount: Math.floor(Math.random() * 100),
    spread: 100,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  });
}

setInterval(randomFireworks, 1500);


document.addEventListener("click", function () {
  let music = document.getElementById("bgMusic");
  music.play();
}, { once: true });


const message = "May your life be filled with happiness and endless success ✨";
let index = 0;
const element = document.querySelector(".message");

function typeEffect() {
  if (index < message.length) {
    element.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}

window.onload = typeEffect;


function burst() {
  confetti({
    particleCount: 120,
    spread: 120,
    origin: {
      x: Math.random(),
      y: Math.random() - 0.2
    }
  });
}

setInterval(burst, 2000);

document.addEventListener("mousemove", (e) => {
  const card = document.querySelector(".birthday-card");
  let x = (window.innerWidth / 2 - e.pageX) / 20;
  let y = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

if (new Date().getHours() > 18) {
  document.body.classList.add("dark");
}

let music = document.getElementById("bgMusic");
music.volume = 0;

function fadeIn() {
  if (music.volume < 1) {
    music.volume += 0.05;
    setTimeout(fadeIn, 200);
  }
}
music.play();
fadeIn();

let today = new Date().toDateString();
document.querySelector(".message").innerHTML += 
"<br>Celebrating this beautiful day: " + today;

let hour = new Date().getHours();
let wish = "";

if (hour < 12) wish = "Good Morning & Happy Birthday ☀️";
else if (hour < 18) wish = "Good Afternoon & Happy Birthday 🌸";
else wish = "Good Evening & Happy Birthday 🌙";

document.querySelector(".title").innerText = wish;

