let currentSportTitle = "Snowboard Cross";

const sportPageInfo = [
  {
    id: 1,
    title: "Bob Sleigh",
    backgroundImage: "images/disciplines_pics/bobSleigh/bobSleighPic.png",
    text: "Bob Sleigh is a high-speed winter racing game where players race down icy tracks in teams, guiding their sled through sharp curves, steep drops, and snowy tunnels. During each race, players must keep control of their speed while avoiding obstacles, collecting coins, and competing against other characters. The course includes tight turns, slippery sections, jumps, and hazards that challenge both timing and teamwork. Different power-ups can be collected along the track to gain speed boosts, improve control, or activate special abilities.",
    pictures: [
      "images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "images/disciplines_pics/bobSleigh/bobSleighPic3.png",
      "images/disciplines_pics/bobSleigh/bobSleighPic4.png",
      "images/disciplines_pics/bobSleigh/bobSleighPicture5.png",
      "images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "images/disciplines_pics/bobSleigh/bobSleighPic3.png",
      "images/disciplines_pics/bobSleigh/bobSleighPic4.png",
      "images/disciplines_pics/bobSleigh/bobSleighPicture5.png",
    ],
  },
  {
    id: 2,
    title: "Figure Skating",
    backgroundImage:
      "images/disciplines_pics/figureSkating/figureSkatingPic.png",
    text: "Figure Skating is a skill-based winter performance game where players glide across the ice while completing spins, jumps, turns, and choreographed movements. During each round, players must keep their balance, follow the rhythm, avoid mistakes, and perform combinations with precision to earn points. The course includes timing challenges, slippery ice sections, and special moments where players can collect coins or power-ups to improve their score. Different power-ups can be used to boost performance, recover from mistakes, or add extra style to the routine.",
    pictures: [
      "images/disciplines_pics/figureSkating/figureSkating1.png",
      "images/disciplines_pics/figureSkating/figureSkating2.png",
      "images/disciplines_pics/figureSkating/figureSkating3.png",
      "images/disciplines_pics/figureSkating/figureSkating4.png",
      "images/disciplines_pics/figureSkating/figureSkating5.png",
      "images/disciplines_pics/figureSkating/figureSkating1.png",
      "images/disciplines_pics/figureSkating/figureSkating2.png",
      "images/disciplines_pics/figureSkating/figureSkating3.png",
      "images/disciplines_pics/figureSkating/figureSkating4.png",
      "images/disciplines_pics/figureSkating/figureSkating5.png",
    ],
  },
  {
    id: 3,
    title: "Ski Jumping",
    backgroundImage: "images/disciplines_pics/skiJumping/skiJumpingPic1.png",
    text: "Ski Jumping is a thrilling winter challenge where players speed down a snowy ramp before launching high into the air and trying to land as far as possible. During each jump, players must build up speed, time their takeoff, keep balance in the air, and control the landing to earn points. The course includes icy ramps, wind changes, timing challenges, and obstacles that affect the jump. Different power-ups can be collected to increase speed, improve stability, or give the player extra lift during the flight.",
    pictures: [
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
      "images/disciplines_pics/skiJumping/",
    ],
  },
  {
    id: 4,
    title: "Speed Skating",
    backgroundImage: "images/disciplines_pics/speedSkating/speedSkatingPic.png",
    text: "Speed Skating is a fast-paced winter racing game where players race across icy tracks using quick movements, sharp turns, and precise timing to stay ahead of their opponents. During each race, players must build speed, keep balance on slippery ice, avoid obstacles, and use the best racing line to gain an advantage. The track includes tight curves, speed zones, icy hazards, and challenging sections that test both control and reaction time. Different power-ups can be collected to gain speed boosts, improve handling, or temporarily protect the player from mistakes.",
    pictures: [
      "images/disciplines_pics/speedSkating/speedSkating1.png",
      "images/disciplines_pics/speedSkating/speedSkating2.png",
      "images/disciplines_pics/speedSkating/speedSkating3.png",
      "images/disciplines_pics/speedSkating/speedSkating4.png",
      "images/disciplines_pics/speedSkating/speedSkating5.png",
      "images/disciplines_pics/speedSkating/speedSkating1.png",
      "images/disciplines_pics/speedSkating/speedSkating2.png",
      "images/disciplines_pics/speedSkating/speedSkating3.png",
      "images/disciplines_pics/speedSkating/speedSkating4.png",
      "images/disciplines_pics/speedSkating/speedSkating5.png",
    ],
  },
  {
    id: 5,
    title: "Snowboard Cross",
    backgroundImage: "images/disciplines_pics/snowboardCross/snowboardPic1.png",
    text: "Snowboard Cross is a fast-paced winter racing game where players race down snowy mountains and icy tracks using snowboards while avoiding obstacles, collecting coins, and competing against other characters. During each race, players encounter jumps, sharp turns, moving hazards, and enemies placed throughout the course. Different power-ups can be collected along the track to gain speed boosts, temporary invincibility, or special abilities.",
    pictures: [
      "images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "images/disciplines_pics/snowboardCross/snowboardCross4.png",
      "images/disciplines_pics/snowboardCross/snowboardCross5.png",
      "images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "images/disciplines_pics/snowboardCross/snowboardCross4.png",
      "images/disciplines_pics/snowboardCross/snowboardCross5.png",
    ],
  },
];

function getSportPageInfo(sportTitle) {
  return (
    sportPageInfo.find((sport) => sport.title === sportTitle) ||
    sportPageInfo[0]
  );
}

function getDisciplineParticipantRanking(disciplineId) {
  let pointsByParticipant = {};

  for (
    let dayIndex = 0;
    dayIndex < selectedSeason.competitionDays.length;
    dayIndex++
  ) {
    let day = selectedSeason.competitionDays[dayIndex];

    for (let eventIndex = 0; eventIndex < day.events.length; eventIndex++) {
      let event = day.events[eventIndex];

      if (event.disciplineId === disciplineId) {
        for (
          let scoreIndex = 0;
          scoreIndex < event.scores.length;
          scoreIndex++
        ) {
          let playerScore = event.scores[scoreIndex];

          if (!pointsByParticipant[playerScore.participantId]) {
            pointsByParticipant[playerScore.participantId] = 0;
          }

          pointsByParticipant[playerScore.participantId] += playerScore.score;
        }
      }
    }
  }

  let ranking = [];

  for (let i = 0; i < participantsInfo.length; i++) {
    let participant = participantsInfo[i];

    ranking.push({
      ...participant,
      totalScore: pointsByParticipant[participant.id] || 0,
    });
  }

  ranking.sort((a, b) => {
    if (b.totalScore !== a.totalScore) {
      return b.totalScore - a.totalScore;
    }

    return a.name.localeCompare(b.name);
  });

  return ranking;
}

function disciplinesPage(sport) {
  currentSportTitle = sport || currentSportTitle;
  header("disciplines");

  let currentSport = getSportPageInfo(currentSportTitle);

  let currentSportIndex = sportPageInfo.findIndex(
    (sportInfo) => sportInfo.title === currentSport.title,
  );

  mainDOM.innerHTML = `
    <div id="sport_page_box">
        <div id="sport_page_backgroundPicture">
          <div id="sport_page_whiteBackground">
            <div id="sport_page_titleRow">
              <img class="sport_page_sportArrow" id="sport_page_sportArrowLeft" src="images/arrows/arrowLeft.png" alt="">
              <h1 id="sport_page_title"></h1>
              <img class="sport_page_sportArrow" id="sport_page_sportArrowRight" src="images/arrows/arrowRight.png" alt="">
            </div>
            <p id="sport_page_text"></p>
          </div>
        </div>

        <div id="sport_page_carusel_wrapper">
          <div id="sport_page_carusel_box">
            <div id="sport_page_carusel">
                <div id="sport_page_carusel_track"></div>
            </div>
          </div>
        </div>

        <div id="sport_page_skillsBackground">
          <div id="sport_page_skillBox">
            <h2 id="sport_page_skillset">Skillset</h2>
            <p id="sport_page_skillset_text">This diagram shows which skills are most important for this discipline. Each axis represents one skill: speed, balance, precision, strength, and strategy. The values show how much each skill contributes to performance in the sport, making it easier to compare the discipline’s strengths and understand what type of abilities are needed to perform well.</p>
          </div>
        </div>
        
        <div id="sport_page_rankingbox">
            <h2 id="sport_page_ranking_title">Ranking</h2>
            <div id="sport_page_rankings"></div>
        </div>
      </div>
    `;

  let backgroundPic = document.getElementById("sport_page_backgroundPicture");
  let title = document.getElementById("sport_page_title");
  let text = document.getElementById("sport_page_text");
  let picturesCarusel = document.getElementById("sport_page_carusel_track");
  let leftArrow = document.getElementById("sport_page_sportArrowLeft");
  let rightArrow = document.getElementById("sport_page_sportArrowRight");

  backgroundPic.style.backgroundImage = `url("${currentSport.backgroundImage}")`;
  title.textContent = currentSport.title;
  text.textContent = currentSport.text;

  for (let pic of currentSport.pictures) {
    let div = document.createElement("div");
    div.classList.add("sport_page_carusel_pictures");
    div.style.backgroundImage = `url("${pic}")`;
    picturesCarusel.append(div);
  }

  radarChart(currentSport.title);
  participantsList(
    "sport_page_rankings",
    getDisciplineParticipantRanking(currentSport.id),
  );

  leftArrow.addEventListener("click", () => {
    currentSportIndex--;

    if (currentSportIndex < 0) {
      currentSportIndex = sportPageInfo.length - 1;
    }

    disciplinesPage(sportPageInfo[currentSportIndex].title);
  });

  rightArrow.addEventListener("click", () => {
    currentSportIndex++;

    if (currentSportIndex >= sportPageInfo.length) {
      currentSportIndex = 0;
    }

    disciplinesPage(sportPageInfo[currentSportIndex].title);
  });
}

function picturesForCarusel(sport) {
  return getSportPageInfo(sport).pictures;
}

/* function picturesForCarusel(sport) {
  if (sport == "Snowboard Cross") {
    return [
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross4.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross5.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross4.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross5.png",
    ];
  } else if (sport == "Bob Sleigh") {
    return [
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPic3.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPic4.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPicture5.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPic3.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPic4.png",
      "../images/disciplines_pics/bobSleigh/bobSleighPicture5.png",
    ];
  } else if (sport == "Figure Skating") {
    return [
      "../images/disciplines_pics/figureSkating/figureSkating1.png",
      "../images/disciplines_pics/figureSkating/figureSkating2.png",
      "../images/disciplines_pics/figureSkating/figureSkating3.png",
      "../images/disciplines_pics/figureSkating/figureSkating4.png",
      "../images/disciplines_pics/figureSkating/figureSkating5.png",
      "../images/disciplines_pics/figureSkating/figureSkating1.png",
      "../images/disciplines_pics/figureSkating/figureSkating2.png",
      "../images/disciplines_pics/figureSkating/figureSkating3.png",
      "../images/disciplines_pics/figureSkating/figureSkating4.png",
      "../images/disciplines_pics/figureSkating/figureSkating5.png",
    ];
  } else if (sport == "Ski Jumping") {
    // lägg in rätt bilder
    return [
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross2.png",
      "../images/disciplines_pics/skiJumping/snowboardCross3.png",
      "../images/disciplines_pics/skiJumping/snowboardCross4.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross2.png",
      "../images/disciplines_pics/skiJumping/snowboardCross3.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
    ];
  } else if (sport == "Speed Skating") {
    return [
      "../images/disciplines_pics/speedSkating/speedSkating1.png",
      "../images/disciplines_pics/speedSkating/speedSkating2.png",
      "../images/disciplines_pics/speedSkating/speedSkating3.png",
      "../images/disciplines_pics/speedSkating/speedSkating4.png",
      "../images/disciplines_pics/speedSkating/speedSkating5.png",
      "../images/disciplines_pics/speedSkating/speedSkating1.png",
      "../images/disciplines_pics/speedSkating/speedSkating2.png",
      "../images/disciplines_pics/speedSkating/speedSkating3.png",
      "../images/disciplines_pics/speedSkating/speedSkating4.png",
      "../images/disciplines_pics/speedSkating/speedSkating5.png",
    ];
  }
}
 */
