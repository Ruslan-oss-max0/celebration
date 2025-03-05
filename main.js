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
}

function showHill() {
  document.getElementById("message").style.opacity = "1";

  let hill = document.getElementById("hill");
  hill.style.bottom = "0";

  setTimeout(() => {
    let flowerEmojis = ["🌸", "🌺", "🌻", "🌼", "🌷"];
    let hillWidth = hill.clientWidth;
    let hillLeft = hill.getBoundingClientRect().left;

    for (let i = 0; i < 20; i++) {
      let flower = document.createElement("div");
      flower.className = "flower";
      flower.innerHTML =
        flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      hill.appendChild(flower);

      let randomX = Math.random() * hillWidth + hillLeft;
      let randomY = Math.random() * 15 + 5;

      flower.style.left = randomX + "px";
      flower.style.bottom = randomY + "vh";

      flower.style.animationDelay = i * 0.1 + "s";
    }
  }, 1000);
}
