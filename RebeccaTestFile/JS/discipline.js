function disciplinesPage(sport) {
  header("disciplines");
  mainDOM.innerHTML = `
    <div id="sport_page_box">
        <div id="sport_page_backgroundPicture">
          <div id="sport_page_whiteBackground">
            <h1 id="sport_page_title"></h1>
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
  let choosensport = document.getElementById("sport_page_choosen_sport");

  if (sport == "snowboard") {
    //här behövs funktion för att få fram players array med ranking på vem som presterat bäst inom den valda sporten
    let sportPicturesArray = picturesForCarusel("snowboard");
    backgroundPic.style.backgroundImage =
      "url(../images/disciplines_pics/snowboardCross/snowboardPic1.png)";

    title.textContent = "Snowboard cross";
    text.textContent =
      "Snowboard Cross is a fast-paced winter racing game where players race down snowy mountains and icy tracks using snowboards while avoiding obstacles, collecting coins, and competing against other characters. During each race, players encounter jumps, sharp turns, moving hazards, and enemies placed throughout the course. Different power-ups can be collected along the track to gain speed boosts, temporary invincibility, or special abilities.";

    for (let pic of sportPicturesArray) {
      let div = document.createElement("div");
      div.classList.add("sport_page_carusel_pictures");
      div.style.backgroundImage = `url("${pic}")`;
      picturesCarusel.append(div);
    }

    radarChart();
    participantsList("sport_page_rankings", participantsInfo);
  }

  if (sport == "bobSleigh") {
    //här behövs funktion för att få fram players array med ranking på vem som presterat bäst inom den valda sporten
    let sportPicturesArray = picturesForCarusel("bobSleigh");
    backgroundPic.style.backgroundImage =
      "url('../images/disciplines_pics/bobSleigh/bobSleighPic.png')";

    title.textContent = "Bob Sleigh";
    text.textContent =
      "Bob Sleigh is a high-speed winter racing game where players race down icy tracks in teams, guiding their sled through sharp curves, steep drops, and snowy tunnels. During each race, players must keep control of their speed while avoiding obstacles, collecting coins, and competing against other characters. The course includes tight turns, slippery sections, jumps, and hazards that challenge both timing and teamwork. Different power-ups can be collected along the track to gain speed boosts, improve control, or activate special abilities.";

    for (let pic of sportPicturesArray) {
      let div = document.createElement("div");
      div.classList.add("sport_page_carusel_pictures");
      div.style.backgroundImage = `url("${pic}")`;
      picturesCarusel.append(div);
    }

    radarChart();
    participantsList("sport_page_rankings", participantsInfo);
  }
  if (sport == "figureSkating") {
    //här behövs funktion för att få fram players array med ranking på vem som presterat bäst inom den valda sporten
    let sportPicturesArray = picturesForCarusel("figureSkating");
    backgroundPic.style.backgroundImage =
      "url('../images/disciplines_pics/figureSkating/figureSkatingPic.png')";

    title.textContent = "Figure Skating";
    text.textContent =
      "Figure Skating is a skill-based winter performance game where players glide across the ice while completing spins, jumps, turns, and choreographed movements. During each round, players must keep their balance, follow the rhythm, avoid mistakes, and perform combinations with precision to earn points. The course includes timing challenges, slippery ice sections, and special moments where players can collect coins or power-ups to improve their score. Different power-ups can be used to boost performance, recover from mistakes, or add extra style to the routine.";

    for (let pic of sportPicturesArray) {
      let div = document.createElement("div");
      div.classList.add("sport_page_carusel_pictures");
      div.style.backgroundImage = `url("${pic}")`;
      picturesCarusel.append(div);
    }

    radarChart();
    participantsList("sport_page_rankings", participantsInfo);
  }
  if (sport == "skiJumping") {
    //här behövs funktion för att få fram players array med ranking på vem som presterat bäst inom den valda sporten
    let sportPicturesArray = picturesForCarusel("skiJumping");
    backgroundPic.style.backgroundImage =
      "url('../images/disciplines_pics/skiJumping/skiJumpingPic1.png')";

    title.textContent = "Ski jumping";
    text.textContent =
      "Ski Jumping is a thrilling winter challenge where players speed down a snowy ramp before launching high into the air and trying to land as far as possible. During each jump, players must build up speed, time their takeoff, keep balance in the air, and control the landing to earn points. The course includes icy ramps, wind changes, timing challenges, and obstacles that affect the jump. Different power-ups can be collected to increase speed, improve stability, or give the player extra lift during the flight.";

    for (let pic of sportPicturesArray) {
      let div = document.createElement("div");
      div.classList.add("sport_page_carusel_pictures");
      div.style.backgroundImage = `url("${pic}")`;
      picturesCarusel.append(div);
    }

    radarChart();
    participantsList("sport_page_rankings", participantsInfo);
  }
  if (sport == "speedSkating") {
    //här behövs funktion för att få fram players array med ranking på vem som presterat bäst inom den valda sporten
    let sportPicturesArray = picturesForCarusel("speedSkating");
    backgroundPic.style.backgroundImage =
      "url('../images/disciplines_pics/speedSkating/speedSkatingPic.png')";

    title.textContent = "Speed skating";
    text.textContent =
      "Speed Skating is a fast-paced winter racing game where players race across icy tracks using quick movements, sharp turns, and precise timing to stay ahead of their opponents. During each race, players must build speed, keep balance on slippery ice, avoid obstacles, and use the best racing line to gain an advantage. The track includes tight curves, speed zones, icy hazards, and challenging sections that test both control and reaction time. Different power-ups can be collected to gain speed boosts, improve handling, or temporarily protect the player from mistakes.";

    for (let pic of sportPicturesArray) {
      let div = document.createElement("div");
      div.classList.add("sport_page_carusel_pictures");
      div.style.backgroundImage = `url("${pic}")`;
      picturesCarusel.append(div);
    }

    radarChart();
    participantsList("sport_page_rankings", participantsInfo);
  }
}

function picturesForCarusel(sport) {
  if (sport == "snowboard") {
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
  } else if (sport == "bobSleigh") {
    // lägg in rätt bilder
    return [
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh2.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
      "../images/disciplines_pics/bobSleigh/bobSleigh1.png",
    ];
  } else if (sport == "figureSkating") {
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
  } else if (sport == "skiJumping") {
    // lägg in rätt bilder
    return [
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross2.png",
      "../images/disciplines_pics/skiJumping/snowboardCross3.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross2.png",
      "../images/disciplines_pics/skiJumping/snowboardCross3.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
      "../images/disciplines_pics/skiJumping/snowboardCross1.png",
    ];
  } else if (sport == "speedSkating") {
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

function radarChart() {
  let parent = document.getElementById("sport_page_skillBox");
  let svg = d3
    .select(parent)
    .append("svg")
    .attr("width", "500")
    .attr("height", "500")
    .style("border", "1px solid black"); // skapat svg som placeras i body och får höjd och bredd
}
