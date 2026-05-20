let currentIndex = 0;

function renderTunnelPlayers() {
    const container = document.getElementById('playersContainer');
    container.innerHTML = '';

    completeParticipantsSet.forEach(player => {
        const img = document.createElement('img');
        img.className = 'playerImg';
        img.src = player.img;
        img.alt = player.name;
        container.appendChild(img);
    });
}

function updateCarousel() {
    const container = document.getElementById('playersContainer');
    const offset = -(currentIndex * 120); // hur mycket som flyttas
    container.style.transform = `translateX(${offset}px)`;
}

document.getElementById('arrowDivL').addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 5);

    if (currentIndex === 0) {
        currentIndex = maxIndex;
    } else {
        currentIndex -= 5;
    }

    updateCarousel();
});

document.getElementById('arrowDivR').addEventListener('click', () => {
    const maxIndex = Math.ceil(completeParticipantsSet.length / 5) - 1;
    if (currentIndex >= maxIndex) {
        currentIndex = 0;
    } else {
        currentIndex += 5;
    }

    updateCarousel();
});

