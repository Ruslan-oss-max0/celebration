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