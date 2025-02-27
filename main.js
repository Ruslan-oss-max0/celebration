function startCelebration() {
    document.getElementById('message').style.opacity = '1';

    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        document.body.appendChild(confetti);

        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';

        setTimeout(() => confetti.remove(), 5000);
    }
}

function showHill() {
    document.getElementById('message').style.opacity = '1';

    let hill = document.getElementById('hill');
    hill.style.bottom = "0"; // Move hill into view

    setTimeout(() => {
        let flowerEmojis = ['🌸', '🌺', '🌻', '🌼', '🌷'];
        for (let i = 0; i < 100; i++) { // Increase number of flowers for wide screens
            let flower = document.createElement('div');
            flower.className = 'flower';
            flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
            document.body.appendChild(flower);

            // Adjust flower spread to match the wider hill
            let randomX = Math.random() * 125 + 15; // Spread more widely (15vw - 85vw)
            let randomY = Math.random() * 25 + 1; // Vary heights (10vh - 20vh)

            flower.style.left = randomX + 'vw';
            flower.style.bottom = randomY + 'vh';

            flower.style.animationDelay = (i * 0.1) + 's'; // Staggered bloom effect
        }
    }, 1000);
}