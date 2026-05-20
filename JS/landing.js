let currentIndex = 0;
const visiblePlayers = 4;
const playerStep = 115;

function renderTunnelPlayers() {
    const container = document.getElementById('playersContainer');
    if (!container) {
        return;
    }

    container.innerHTML = '';

    participantsInfo.forEach(player => {
        const img = document.createElement('img');
        img.className = 'playerImg';
        img.src = player.img;
        img.alt = player.name;
        container.appendChild(img);
    });
}

function updateCarousel() {
    const container = document.getElementById('playersContainer');
    if (!container) {
        return;
    }

    const offset = -(currentIndex * playerStep); // hur mycket som flyttas
    container.style.transform = `translateX(${offset}px)`;
}

function startLandingPageCarousel() {
    const leftArrow = document.getElementById('arrowDivL');
    const rightArrow = document.getElementById('arrowDivR');
    const seeMoreBtn = document.querySelector(".seeMoreBut");

    if (!leftArrow || !rightArrow) {
        return;
    }

    currentIndex = 0;
    renderTunnelPlayers();
    updateCarousel();

    leftArrow.addEventListener('click', () => {
        const maxIndex = Math.max(0, participantsInfo.length - visiblePlayers);

        if (currentIndex === 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex = Math.max(0, currentIndex - visiblePlayers);
        }

        updateCarousel();
    });

    rightArrow.addEventListener('click', () => {
        const maxIndex = Math.max(0, participantsInfo.length - visiblePlayers);

        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex = Math.min(maxIndex, currentIndex + visiblePlayers);
        }

        updateCarousel();
    });

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener("click", () => {
            participantsPage();
        });
    }
}
