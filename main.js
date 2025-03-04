document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("celebrate-btn");
  button.addEventListener("click", () => {
    showHill();
    startCelebration();
    document.getElementById("hidden-message").style.opacity = "1";
  });
});

function startCelebration() {
  document.getElementById("message").style.opacity = "1";

  for (let i = 0; i < 80; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    confetti.addEventListener("animationend", () => confetti.remove());
  }

  // Floating hearts
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "10vh";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    setTimeout(() => heart.remove(), 5000);
  }
}

function showHill() {
  document.getElementById("message").style.opacity = "1";

  let hill = document.getElementById("hill");
  hill.style.bottom = "0";

  setTimeout(() => {
    let flowerEmojis = ["🌸", "🌺", "🌻", "🌼", "🌷"];
    for (let i = 0; i < 20; i++) {
      let flower = document.createElement("div");
      flower.className = "flower";
      flower.innerHTML =
        flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      hill.appendChild(flower);

      let randomX = Math.random() * 80 + 10;
      let randomY = Math.random() * 20 + 5;

      flower.style.left = randomX + "%";
      flower.style.bottom = randomY + "%";

      flower.style.animationDelay = i * 0.1 + "s";
    }
  }, 1000);
}
