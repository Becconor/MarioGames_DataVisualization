let headerDOM = document.querySelector("header");
let mainDOM = document.querySelector("main");

function header(page) {
  headerDOM.innerHTML = `
        <div id="navbar">
            <button class="navButton" id="homePage">Home</button>
            <button class="navButton" id="disciplinesPage">Disciplines</button>
            <button class="navButton" id="participantsPage">Participants</button>
            <button class="navButton" id="locationsPage">Locations</button>
        </div>

        <div id="seasonWrapper">
            <button id="chooseSeason">
                <div>Season 10</div> 
                <div>⌄</div> 
            </button>

            <div id="seasonDropdown">
                <p>Season 10</p>
                <p>Season 9</p>
                <p>Season 8</p>
                <p>Season 7</p>
            </div>
        </div>
    `;

  let homePageId = document.getElementById("homePage");
  let disciplinesPageId = document.getElementById("disciplinesPage");
  let participantsPageId = document.getElementById("participantsPage");
  let locationsPageId = document.getElementById("locationsPage");
  let chooseSeasonId = document.getElementById("chooseSeason");
  let seasonDropdownID = document.getElementById("seasonDropdown");

  if (page === "home") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
    chooseSeasonId.style.backgroundColor = "#92C6FA";
    seasonDropdownID.style.backgroundColor = "#92C6FA";
  }

  if (page === "disciplines") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
    chooseSeasonId.style.backgroundColor = "#92C6FA";
    seasonDropdownID.style.backgroundColor = "#92C6FA";
  }

  if (page === "participant") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #f7a7c8 0px, #f7a7c8 18px, #f5b7d1 18px, #f5b7d1 36px) ";
    chooseSeasonId.style.backgroundColor = "#f7a7c8";
    seasonDropdownID.style.backgroundColor = "#f7a7c8";
  }

  if (page === "locations") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #F8D97D 0px, #F8D97D 18px, #F7D25C 18px, #F7D25C 36px) ";
    chooseSeasonId.style.backgroundColor = "#F8D97D";
    seasonDropdownID.style.backgroundColor = "#F8D97D";
  }

  homePageId.addEventListener("click", () => {
    disciplinesPageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    homePageId.style.textDecoration = "underline";
  });

  disciplinesPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    disciplinesPageId.style.textDecoration = "underline";
  });

  participantsPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    disciplinesPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    participantsPageId.style.textDecoration = "underline";
  });

  locationsPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    disciplinesPageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";

    locationsPageId.style.textDecoration = "underline";
  });

  chooseSeasonId.addEventListener("click", () => {
    if (seasonDropdownID.style.display === "block") {
      seasonDropdownID.style.display = "none";
    } else {
      seasonDropdownID.style.display = "block";
    }
  });
}

function homePage() {
  header("home");

  // mainDOM.innerHTML = `

  // `;
}

function disciplinesPage(sport) {
  header("disciplines");
  mainDOM.innerHTML = `
    <div id="sport_page_box">
        <div id="sport_page_backgroundPicture">
          <div id="sport_page_whiteBackground">
            <div class="back_track">
                <p>Home/</p>
                <p>Disciplines/</p>
                <p id="sport_page_choosen_sport"></p>
            </div>
            <div id="sport_page_title"></div>
            <div id="sport_page_text"></div>
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
            <div id="sport_page_skillset">Skillset</div>
            <div id="sport_page_skillset_text">This diagram shows which skills are most important for this discipline. Each axis represents one skill: speed, balance, precision, strength, and strategy. The values show how much each skill contributes to performance in the sport, making it easier to compare the discipline’s strengths and understand what type of abilities are needed to perform well.</div>
          </div>
        </div>
        <div id="sport_page_rankingbox">
            <div id="sport_page_ranking_title">Ranking</div>
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
      "url('../images/disciplines_pics/snowboardCross/snowboardPic1.png')";

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
    participantsList("sport_page_rankings", addToParticipants);
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
    participantsList("sport_page_rankings", addToParticipants);
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
    participantsList("sport_page_rankings", addToParticipants);
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
    participantsList("sport_page_rankings", addToParticipants);
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
    participantsList("sport_page_rankings", addToParticipants);
  }
}

function participantsPage() {
  header("participant");
}

function locationsPage() {
  header("locations");
}

function participantsList(id, listOfParticipants) {
  let parent = document.getElementById(id);
  let list = listOfParticipants;
  parent.innerHTML = `
    <div id="top_players">
        <div id="first_player">
            <div id="first_player_bubble">
                <div id="first_player_pic"></div>
            </div>
            <div id="rankingBubble1">1st</div>
        </div>
        <div id="second_player">
            <div id="second_player_bubble">
                <div id="second_player_pic"></div>
            </div>
            <div id="rankingBubble2">2nd</div>
        </div>
        <div id="third_player">
            <div id="third_player_bubble">
                <div id="third_player_pic"></div>
            </div>
            <div id="rankingBubble3">3rd</div>
        </div>
    </div>
    <div id="players"></div>
    <button id="participants_list_button">See all</button>
  `;

  let firstPlayer = document.getElementById("first_player_pic");
  let secondPlayer = document.getElementById("second_player_pic");
  let thirdPlayer = document.getElementById("third_player_pic");
  let button = document.getElementById("participants_list_button");
  let playersBox = document.getElementById("players");
  let playersAreVisible = false;

  firstPlayer.style.backgroundImage = `url("${list[0].img}")`;
  secondPlayer.style.backgroundImage = `url("${list[1].img}")`;
  thirdPlayer.style.backgroundImage = `url("${list[2].img}")`;

  button.addEventListener("click", () => {
    if (playersAreVisible == false) {
      button.textContent = "See less";
      button.style.marginTop = "100px";

      for (let i = 3; i < list.length; i++) {
        let playerCard = document.createElement("div");
        playerCard.classList.add("player_card");

        playerCard.innerHTML = `
          <div class="players_circle">
            <div class="players_pic"></div>
          </div>
          <div class="players_ranking">${i + 1}th</div>
        `;

        let playerPic = playerCard.querySelector(".players_pic");
        playerPic.style.backgroundImage = `url("${list[i].img}")`;

        playersBox.append(playerCard);
        playersAreVisible = true;
      }
    } else if (playersAreVisible) {
      button.textContent = "See all";
      button.style.marginTop = "";
      playersBox.innerHTML = ``;
      playersAreVisible = false;
    }
  });
}

function picturesForCarusel(sport) {
  if (sport == "snowboard") {
    return [
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png", //byt sedan till rätt bild
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png", //byt sedan till rätt bild
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross2.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross3.png",
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png", //byt sedan till rätt bild
      "../images/disciplines_pics/snowboardCross/snowboardCross1.png", // byt sedan till rätt bild
    ];
  } else if (sport == "bobSleigh") {
    // lägg in rätt bilder
    return [
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross2.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross3.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross2.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross3.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
      "../images/disciplines_pics/bobSleigh/snowboardCross1.png",
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

/* disciplinesPage("speedSkating");
 */
