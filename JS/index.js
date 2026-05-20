let headerDOM = document.querySelector("header");
let mainDOM = document.querySelector("main");
let selectedSeason = seasons[seasons.length - 1];

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
                <div id="currentSeasonText">Season ${selectedSeason.year + 1}</div> 
                <img id="seasonArrow" src="images/arrows/arrowRight.png" alt="">
            </button>

            <div id="seasonDropdown"></div>
        </div>
    `;

  let homePageId = document.getElementById("homePage");
  let disciplinesPageId = document.getElementById("disciplinesPage");
  let participantsPageId = document.getElementById("participantsPage");
  let locationsPageId = document.getElementById("locationsPage");

  let chooseSeasonId = document.getElementById("chooseSeason");
  let seasonDropdownID = document.getElementById("seasonDropdown");
  let currentSeasonText = document.getElementById("currentSeasonText");
  let seasonArrow = document.getElementById("seasonArrow");

  for (let i = seasons.length - 1; i >= 0; i--) {
    const season = seasons[i];
    const seasonElement = document.createElement("p");
    seasonElement.textContent = `Season ${season.year + 1}`;
    seasonDropdownID.append(seasonElement);

    seasonElement.addEventListener("click", () => {
      selectedSeason = season;
      currentSeasonText.textContent = `Season ${season.year + 1}`;
      seasonDropdownID.style.display = "none";
      seasonArrow.classList.remove("open");

      if (page === "locations") {
        locationsPage(currentLocationName);
      }

      if (page === "disciplines") {
        disciplinesPage(currentSportTitle);
      }

      if (page === "participant") {
        participantsPage();
      }
    });
  }

  chooseSeasonId.addEventListener("click", () => {
    if (seasonDropdownID.style.display === "block") {
      seasonDropdownID.style.display = "none";
      seasonArrow.classList.remove("open");
    } else {
      seasonDropdownID.style.display = "block";
      seasonArrow.classList.add("open");
    }
  });

  if (page === "home") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
    chooseSeasonId.style.backgroundColor = "#92C6FA";
    seasonDropdownID.style.backgroundColor = "#92C6FA";
    homePageId.style.textDecoration = "underline";
  }

  if (page === "disciplines") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
    chooseSeasonId.style.backgroundColor = "#92C6FA";
    seasonDropdownID.style.backgroundColor = "#92C6FA";
    disciplinesPageId.style.textDecoration = "underline";
  }

  if (page === "participant") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #f7a7c8 0px, #f7a7c8 18px, #f5b7d1 18px, #f5b7d1 36px) ";
    chooseSeasonId.style.backgroundColor = "#f7a7c8";
    seasonDropdownID.style.backgroundColor = "#f7a7c8";
    participantsPageId.style.textDecoration = "underline";
  }

  if (page === "locations") {
    headerDOM.style.background =
      "repeating-linear-gradient(-45deg, #F8D97D 0px, #F8D97D 18px, #F7D25C 18px, #F7D25C 36px) ";
    chooseSeasonId.style.backgroundColor = "#F7D25C";
    seasonDropdownID.style.backgroundColor = "#F7D25C";
    locationsPageId.style.textDecoration = "underline";
  }

  homePageId.addEventListener("click", () => {
    disciplinesPageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    homePage();
  });

  disciplinesPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    disciplinesPage("Snowboard Cross");
  });

  participantsPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    disciplinesPageId.style.textDecoration = "none";
    locationsPageId.style.textDecoration = "none";

    participantsPage();
  });

  locationsPageId.addEventListener("click", () => {
    homePageId.style.textDecoration = "none";
    disciplinesPageId.style.textDecoration = "none";
    participantsPageId.style.textDecoration = "none";

    locationsPage("Desert World");
  });
}

function homePage() {
  header("home");
  mainDOM.innerHTML = `<div id="titlePage">

      <div id="titleText">
        <h1 id="titleTop">SUPER WINTER</h1>
        <h1 id="titleBottom">OLYMPICS LEAGUE</h1>
      </div>
      <img id="heroCharacters" src="images/mario-sonic.png" alt="">
      <div id="titleInfo">
        <h2>10 seasons has passed of SWOL!</h2>
        <p>Here you can find everything you need to know.</p>
      </div>


    </div>
    <img src="images/curvedLineWhite.png" alt="">
    <div id="disciplines">

      <div id="disciplinesIntro">
        <h2>Disciplines</h2>
        <p>Each season features five different disciplines. Together, they create variety in the competition and
          challenge the players in different ways.</p>
      </div>

      <div id="disciplinesAllBoxes">
        <div class="disciplinesBoxes" id="BobSleigh">
          <div>
            <img src="images/disciplines_pics/bobSleigh/bobSleighPic.png" alt="">

            <div class="disciplinesBoxesText">
              <h2>Bob </br>Sleigh</h2>
              <img src="images/skills_pics/boomerangFlower.png" alt="">
            </div>
          </div>

          <button>See More</button>
        </div>

        <div class="disciplinesBoxes" id="FigureSkating">
          <div>
            <img src="images/disciplines_pics/figureSkating/figureSkatingPic.png" alt="">

            <div class="disciplinesBoxesText">
              <h2>Figure </br>Skating</h2>
              <img src="images/skills_pics/fireFlower.png" alt="">
            </div>
          </div>

          <button>See More</button>
        </div>

        <div class="disciplinesBoxes" id="SkiJumping">
          <div>
            <img src="images/disciplines_pics/skiJumping/skiJumpingPic1.png" alt="">

            <div class="disciplinesBoxesText">
              <h2>Ski </br>Jumping</h2>
              <img src="images/skills_pics/iceFlower.webp" alt="">
            </div>
          </div>

          <button>See More</button>
        </div>

        <div class="disciplinesBoxes" id="SnowboardCross">
          <div>
            <img src="images/disciplines_pics/snowboardCross/snowboardPic1.png" alt="">

            <div class="disciplinesBoxesText">
              <h2>Snowboard </br>Cross</h2>
              <img src="images/skills_pics/mushroom.png" alt="">
            </div>
          </div>

          <button>See More</button>
        </div>

        <div class="disciplinesBoxes" id="SpeedSkating">
          <div>
            <img src="images/disciplines_pics/speedSkating/speedSkatingPic.png" alt="">

            <div class="disciplinesBoxesText">
              <h2>Speed </br>Skating</h2>
              <img src="images/skills_pics/superLeaf.webp" alt="">
            </div>
          </div>

          <button>See More</button>
        </div>
      </div>
    </div>

    <div id="participants">
      <div id="greenLine"><img src="images/curvedLine.png" alt=""></div>
      <div id="greenBox">
        <div id="participantsIntro">
          <h2 id="participantHeading">Participants</h2>
          <p>Each season, 30 players compete to become the season champion. By taking part in
            events and collecting points
            throughout the season, they battle for the top spot on the leaderboard. <br><br>Each player is also
            supported
            by coaches and trainers who help them improve and develop over time.</p>
        </div>

        <div id="podium">
          <div id="secondPlace">
            <img id="podiumBowser" src="images/players/bowser.webp" alt="">
            <!--Ska såklart vara andra spelare sen från array, beroende på vem som vinner (eller kanske inte behövs då landingpage mest ska förklara olika delar)-->
            <div class="podiumBox" id="secondPodium">
              <p>2</p>
            </div>
          </div>
          <div id="firstPlace">
            <img id="podiumMario" src="images/players/mario.webp" alt="">
            <div class="podiumBox" id="firstPodium">
              <p>1</p>
            </div>
          </div>

          <div id="thirdPlace">
            <img id="podiumDaisy" src="images/players/daisy.png" alt="">
            <div class="podiumBox" id="thirdPodium">
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
      <div id="playerTunnel">
        <div id="leftSideT">
          <img class="tunnelImg" id="tunnelLeft" src="images/pipeValid.png" alt="">
          <div class="arrowDiv" id="arrowDivL">
            <img src="images/arrows/arrowLeft.png" alt="">
          </div>
        </div>
        <div id="playerCarousel">
          <div id="playersContainer">
          </div>
        </div>
        <div id="rightSideT">
          <div class="arrowDiv" id="arrowDivR">
            <img src="images/arrows/arrowRight.png" alt="">
          </div>
          <img class="tunnelImg" id="tunnelRight" src="images/pipeValid.png" alt="">
        </div>
      </div>
      <button class="seeMoreBut">See More</button>
    </div>

    <div id="locations">
      <h2>Locations</h2>
      <p>Each game day takes place at one location. During the season, there are three game days per week, and all five
        <br>
        disciplines are played at the same location on that day before the competition moves to a new one.
      </p>
    </div>
    <div id="redBox">
      <div id="locationsAllBoxes">
        <div class="locationBox">
          <div class="locationPicDiv">
            <img src="images/worlds_pics/skyWorldPic.png" alt="">
          </div>
          <h3>Sky world</h3>
        </div>
        <div class="locationBox">
          <div class="locationPicDiv">
            <img src="images/worlds_pics/desertWorldPic.png" alt="">
          </div>
          <h3>Desert world</h3>
        </div>
        <div class="locationBox">
          <div class="locationPicDiv">
            <img src="images/worlds_pics/mountainWorldPic.png" alt="">
          </div>
          <h3>Mountain world</h3>
        </div>
        <div class="locationBox">
          <div class="locationPicDiv">
            <img src="images/worlds_pics/underwaterWorldPic.png" alt="">
          </div>
          <h3>Underwater world</h3>
        </div>
        <div class="locationBox">
          <div class="locationPicDiv">
            <img src="images/worlds_pics/plainWorldPic.png" alt="">
          </div>

          <h3>Plain world</h3>
        </div>
      </div>`;


  let seeMoreBtn = document.querySelector(".seeMoreBut");
  seeMoreBtn.addEventListener("click", () => {
    participantsPage();
  });
  renderTunnelPlayers();
}

homePage();
