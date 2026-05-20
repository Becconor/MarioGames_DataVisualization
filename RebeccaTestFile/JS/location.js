let currentSectionIndex = 0;
let currentLocationName = "Desert World";

function getLocationGameDayStats(locationId) {
    let allDaysInSeason = selectedSeason.competitionDays;
    let daysAtLocation = allDaysInSeason.filter(day => day.locationId === locationId);
    let monthCounts = {};

    for (let i = 0; i < gameMonthInfo.length; i++) {
        monthCounts[gameMonthInfo[i].month] = 0;
    }

    for (let i = 0; i < daysAtLocation.length; i++) {
        let month = daysAtLocation[i].date.month;

        if (monthCounts[month] === undefined) {
            monthCounts[month] = 0;
        }

        monthCounts[month]++;
    }

    return {
        totalSeasonDays: allDaysInSeason.length,
        locationDays: daysAtLocation.length,
        monthCounts: monthCounts
    };
}

function createGameDayHTML(world) {
    let stats = getLocationGameDayStats(world.id);
    let chartHTML = createGameDayChartHTML(stats);

    return `
        <div class="L_gameDays">
            <div class="L_monthList">
                ${chartHTML}
            </div>
        </div>
    `;
}

function createGameDayChartHTML(stats) {
    let svgWidth = 800;
    let svgHeight = 360;
    let paddingLeft = 60;
    let paddingRight = 30;
    let paddingTop = 30;
    let paddingBottom = 70;
    let monthSidePadding = 35;
    let firstMonthX = paddingLeft + monthSidePadding;
    let lastMonthX = svgWidth - paddingRight - monthSidePadding;
    let chartWidth = lastMonthX - firstMonthX;
    let chartHeight = svgHeight - paddingTop - paddingBottom;
    let axisBottom = paddingTop + chartHeight;
    let maxDays = 0;

    for (let i = 0; i < gameMonthInfo.length; i++) {
        let month = gameMonthInfo[i].month;

        if (stats.monthCounts[month] > maxDays) {
            maxDays = stats.monthCounts[month];
        }
    }

    if (maxDays === 0) {
        maxDays = 1;
    }

    let yTicks = "";
    let lollipops = "";
    let monthGap = chartWidth / (gameMonthInfo.length - 1);

    for (let tick = 0; tick <= maxDays; tick++) {
        let y = axisBottom - (tick / maxDays) * chartHeight;

        yTicks += `
            <line
                class="L_chartGridLine"
                x1="${paddingLeft}"
                y1="${y}"
                x2="${svgWidth - paddingRight}"
                y2="${y}"
            ></line>

            <text
                class="L_chartYLabel"
                x="${paddingLeft - 15}"
                y="${y + 5}"
                text-anchor="end"
            >${tick}</text>
        `;
    }

    for (let i = 0; i < gameMonthInfo.length; i++) {
        let monthInfo = gameMonthInfo[i];
        let days = stats.monthCounts[monthInfo.month];
        let x = firstMonthX + i * monthGap;
        let y = axisBottom - (days / maxDays) * chartHeight;
        let monthName = monthInfo.name.slice(0, 3);

        lollipops += `
            <line
                class="L_lollipopLine"
                x1="${x}"
                y1="${axisBottom}"
                x2="${x}"
                y2="${y}"
            ></line>

            <circle
                class="L_lollipopCircle"
                cx="${x}"
                cy="${y}"
                r="8"
            ></circle>

            <text
                class="L_lollipopValue"
                x="${x}"
                y="${y - 14}"
                text-anchor="middle"
            >${days}</text>

            <text
                class="L_chartXLabel"
                x="${x}"
                y="${axisBottom + 35}"
                text-anchor="middle"
            >${monthName}</text>
        `;
    }

    return `
        <svg
            id="L_gameDaySVG"
            viewBox="0 0 ${svgWidth} ${svgHeight}"
            role="img"
            aria-label="Game days per month"
        >
            ${yTicks}

            <line
                class="L_chartAxis"
                x1="${paddingLeft}"
                y1="${axisBottom}"
                x2="${svgWidth - paddingRight}"
                y2="${axisBottom}"
            ></line>

            <line
                class="L_chartAxis"
                x1="${paddingLeft}"
                y1="${paddingTop}"
                x2="${paddingLeft}"
                y2="${axisBottom}"
            ></line>

            ${lollipops}

            <text
                class="L_chartAxisTitle"
                x="${svgWidth / 2}"
                y="${svgHeight - 10}"
                text-anchor="middle"
            >Months</text>

            <text
                class="L_chartAxisTitle"
                x="18"
                y="${svgHeight / 2}"
                text-anchor="middle"
                transform="rotate(-90 18 ${svgHeight / 2})"
            >Days</text>
        </svg>
    `;
}

function getParticipantInfo(participantId) {
    let participant = participantsInfo.find(player => player.id === participantId);

    if (participant) {
        return participant;
    }

    return {
        name: "Unknown Player",
        img: "",
        id: participantId
    };
}

function getLocationPlayerRanking(locationId) {
    let daysAtLocation = selectedSeason.competitionDays.filter(day => day.locationId === locationId);
    let pointsByParticipant = {};

    for (let dayIndex = 0; dayIndex < daysAtLocation.length; dayIndex++) {
        let day = daysAtLocation[dayIndex];

        for (let eventIndex = 0; eventIndex < day.events.length; eventIndex++) {
            let event = day.events[eventIndex];

            for (let scoreIndex = 0; scoreIndex < event.scores.length; scoreIndex++) {
                let playerScore = event.scores[scoreIndex];
                let participantId = playerScore.participantId;

                if (!pointsByParticipant[participantId]) {
                    pointsByParticipant[participantId] = 0;
                }

                pointsByParticipant[participantId] += playerScore.score;
            }
        }
    }

    let ranking = [];

    for (let participantId in pointsByParticipant) {
        let participant = getParticipantInfo(Number(participantId));

        ranking.push({
            id: Number(participantId),
            name: participant.name,
            img: participant.img,
            totalScore: pointsByParticipant[participantId]
        });
    }

    ranking.sort((a, b) => {
        if (b.totalScore !== a.totalScore) {
            return b.totalScore - a.totalScore;
        }

        return a.name.localeCompare(b.name);
    });

    return ranking.slice(0, 6);
}

function createBestPlayersHTML(world) {
    let ranking = getLocationPlayerRanking(world.id);
    let rankingRows = "";

    if (ranking.length === 0) {
        return `<p>No player scores found for this location.</p>`;
    }

    for (let i = 0; i < ranking.length; i++) {
        let player = ranking[i];

        rankingRows += `
            <div class="L_ranking">
                <div class="L_rankingFirstText">
                    <h2 class="L_rankNumber">${i + 1}</h2>

                    <img
                        class="L_rankPic"
                        src="${player.img}"
                        alt="${player.name}"
                    >

                    <h3 class="L_rankNames">
                        ${player.name}
                    </h3>
                </div>

                <h3 class="L_rankPoints">
                    ${player.totalScore} pts
                </h3>
            </div>
        `;
    }

    return rankingRows;
}

function locationsPage(location) {
    currentLocationName = location || currentLocationName;

    header("locations");

    let world = locationInfo.find(p => p.title === currentLocationName);
    let currentLocationIndex = locationInfo.findIndex(p => p.title === currentLocationName);
    let currentSection = locationSections[currentSectionIndex];
    let sectionContent = "";

    if (currentSection.title === "Game Days") {
        sectionContent = createGameDayHTML(world);
    }

    if (currentSection.title === "Best Players") {
        sectionContent = createBestPlayersHTML(world);
    }

    mainDOM.innerHTML = `
        <div id="L_world">
            <div id="L_worldChoice">
                <div id="L_worldText">
                    <h1 id="L_worldName">${world.title}</h1 >

                    <div id="L_worldDescriptionRow">
                        <img class="L_worldArrows" id="L_worldArrowsLeft" src="images/arrows/arrowLeft.png" alt="">
                        <p id="L_worlsDescription">${world.text}</p>
                        <img class="L_worldArrows" id="L_worldArrowsRight" src="images/arrows/arrowRight.png" alt="">
                    </div>
                </div >
            </div>
        </div >


        <div id="L_infoChoice">
            <img class="L_arrows" id="L_arrowsLeft" src="images/arrows/arrowLeft.png" alt="">
            <h2 id="locationInfoPick">${currentSection.title}</h2>
            <img class="L_arrows" id="L_arrowsRight" src="images/arrows/arrowRight.png" alt="">
        </div>

        
        <div id="L_pickedLocationInfo">
            <p id="L_pickedInfoText">${currentSection.text}</p>

            <div id="rankingList">${sectionContent}</div>

        </div>

    `;

    let worldPic = document.getElementById("L_world");
    worldPic.style.backgroundImage = `
        url(${world.img})
    `;

    let worldLeftArrow = document.getElementById("L_worldArrowsLeft");
    let worldRightArrow = document.getElementById("L_worldArrowsRight");
    let leftArrow = document.getElementById("L_arrowsLeft");
    let rightArrow = document.getElementById("L_arrowsRight");

    worldLeftArrow.addEventListener("click", () => {
        currentLocationIndex--;

        if (currentLocationIndex < 0) {
            currentLocationIndex = locationInfo.length - 1;
        }

        locationsPage(locationInfo[currentLocationIndex].title);
    });

    worldRightArrow.addEventListener("click", () => {
        currentLocationIndex++;

        if (currentLocationIndex >= locationInfo.length) {
            currentLocationIndex = 0;
        }

        locationsPage(locationInfo[currentLocationIndex].title);
    });

    leftArrow.addEventListener("click", () => {

        currentSectionIndex--;

        if (currentSectionIndex < 0) {
            currentSectionIndex =
                locationSections.length - 1;
        }

        locationsPage(currentLocationName);
    });

    rightArrow.addEventListener("click", () => {

        currentSectionIndex++;

        if (currentSectionIndex >= locationSections.length) {
            currentSectionIndex = 0;
        }

        locationsPage(currentLocationName);
    });







    // skapa rankning för spelarna som vann på location
    let rankingList = document.getElementById("rankingList");
    // for (let i = 0; i < participants.length; i++) {

    // skapa divarna och elementen för rankningslistan av top spelare

    // }
};