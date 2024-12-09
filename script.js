const startDate = new Date(2023, 10, 17);

function updateCounter() {
    const now = new Date();
    const difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('years').textContent = years.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function createStars() {
    const sky = document.querySelector('.sky');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${1 + Math.random() * 3}s infinite`;
        sky.appendChild(star);
    }
}

function animateEclipse() {
    const moon = document.querySelector('.moon');
    const sun = document.querySelector('.sun');
    const eclipse = document.querySelector('.eclipse');

    let progress = 0;
    const animationDuration = 5000;

    function animate() {
        progress += 16.67;
        const percentage = Math.min(progress / animationDuration, 1);

        moon.style.left = `${50 + (window.innerWidth / 2 - 125) * percentage}px`;
        sun.style.right = `${50 + (window.innerWidth / 2 - 125) * percentage}px`;
        eclipse.style.opacity = percentage;

        if (percentage < 1) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

createStars();
animateEclipse();
setInterval(updateCounter, 1000);
updateCounter();
