function participantsPage() {
  header("participant");
  mainDOM.innerHTML = `
  <div id="participants_page_backgroundimage">
        <h1 id="participants_page_title">Participants Ranking</h1>
      </div>
      <div id="participants_page_participants"></div>
      <div id="participants_page_box">
        <div id="participants_page_informationbox">
          <p id="participants_page_information_title">
            Player Performance by Sport
          </p>
          <p id="participants_page_information_text">
            Select a sport to see how each player performs within it. The chart
            compares the number of times a player has participated with their
            average score, making it easy to identify active players, consistent
            performers, and standout results in the selected sport.
          </p>
        </div>
        <div id="participants_page_buttons">
          <div class="participants_button_box">
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
            <div class="participants_button_text">
              <img
                src="images/disciplines_pics/bobSleigh/bobSleighText3.png"
                alt=""
              />
            </div>
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
          </div>
          <div class="participants_button_box">
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
            <div class="participants_button_text">
              <img
                src="images/disciplines_pics/figureSkating/figureskatingText.png"
                alt=""
              />
            </div>
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
          </div>
          <div class="participants_button_box">
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
            <div class="participants_button_text">
              <img
                src="images/disciplines_pics/skiJumping/skiJumpingText.png"
                alt=""
              />
            </div>
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
          </div>
          <div class="participants_button_box">
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
            <div class="participants_button_text">
              <img
                src="images/disciplines_pics/snowboardCross/snowboardCrosstext.png"
                alt=""
              />
            </div>
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
          </div>
          <div class="participants_button_box">
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
            <div class="participants_button_text">
              <img
                src="images/disciplines_pics/speedSkating/speedSkatingText.png"
                alt=""
              />
            </div>
            <div class="participants_circle_box">
              <div class="participants_circle"></div>
              <div class="participants_circle"></div>
            </div>
          </div>
        </div>
        <div id="participants_page_svg"></div>
      </div>
  `;

  participantsList(
    "participants_page_participants",
    getSeasonParticipantRanking(),
  );
  scatterPlot();
}

function getSeasonParticipantRanking() {
  let pointsByParticipant = {};

  for (
    let dayIndex = 0;
    dayIndex < selectedSeason.competitionDays.length;
    dayIndex++
  ) {
    let day = selectedSeason.competitionDays[dayIndex];

    for (let eventIndex = 0; eventIndex < day.events.length; eventIndex++) {
      let event = day.events[eventIndex];

      for (let scoreIndex = 0; scoreIndex < event.scores.length; scoreIndex++) {
        let playerScore = event.scores[scoreIndex];

        if (!pointsByParticipant[playerScore.participantId]) {
          pointsByParticipant[playerScore.participantId] = 0;
        }

        pointsByParticipant[playerScore.participantId] += playerScore.score;
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
  let popup = document.createElement("div");
  let playersAreVisible = false;
  let playerPopup = false;

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

        playerCard.addEventListener("click", () => {
          if (playerPopup == false) {
            popup.classList.add("choosen_player_page");
            popup.innerHTML = `
              <div class="choosen_player_leftside">
                <img
                  class="choosen_player_pic"
                  src="${list[i].img}"
                  alt=""
                />
                <div class="choosen_player_namebox">
                    <img class="choosen_player_left_arrow" class="choosen_player_arrow" src="images/arrows/arrowLeft.png" alt="" />
                    <p class="choosen_player_info_text">${list[i].name}</p>
                    <img class="choosen_player_right_arrow" class="choosen_player_arrow" src="images/arrows/arrowRight.png" alt="" />
                </div>
              </div>
              <div class="choosen_player_rightside">
                <div class="choosen_player_info">
                  <img src="images/arrows/arrowLeft.png" alt="" />
                  <p class="choosen_player_info_text">skills</p>
                  <img src="images/arrows/arrowRight.png" alt="" />
                </div>
                <div class="choosen_player_svg"></div>
              </div>
            `;
            let playerName = popup.querySelector(".choosen_player_info_text");
            let playerPic = popup.querySelector(".choosen_player_pic");
            let nameBox = popup.querySelector(".choosen_player_namebox");
            let infoBox = popup.querySelector(".choosen_player_info");
            let leftArrow = popup.querySelector(".choosen_player_left_arrow");
            let rightArrow = popup.querySelector(".choosen_player_right_arrow");
            let currentPlayer = i;
            nameBox.style.backgroundColor = list[i].color;
            infoBox.style.backgroundColor = list[i].color;
            document.body.append(popup);
            playerPopup = true;

            leftArrow.addEventListener("click", () => {
              currentPlayer--;

              if (currentPlayer < 0) {
                currentPlayer = list.length - 1;
              }
              nameBox.style.backgroundColor = list[currentPlayer].color;
              infoBox.style.backgroundColor = list[currentPlayer].color;
              playerName.textContent = list[currentPlayer].name;
              playerPic.src = list[currentPlayer].img;
            });

            rightArrow.addEventListener("click", () => {
              currentPlayer++;

              if (currentPlayer > list.length - 1) {
                currentPlayer = list.length - 1 - (list.length - 1);
              }
              nameBox.style.backgroundColor = list[currentPlayer].color;
              infoBox.style.backgroundColor = list[currentPlayer].color;
              playerName.textContent = list[currentPlayer].name;
              playerPic.src = list[currentPlayer].img;
            });


          } else if (playerPopup == true) {
            popup.remove();
            playerPopup = false;
          }
        });
      }
      playersAreVisible = true;
    } else if (playersAreVisible) {
      button.textContent = "See all";
      button.style.marginTop = "";
      playersBox.innerHTML = ``;
      playersAreVisible = false;
    }
  });

  playersBox.addEventListener("click", (event) => {
    let clickedPlayerCard = event.target.closest(".player_card");

    if (clickedPlayerCard) {
      return;
    }

    if (playerPopup == true) {
      popup.remove();
      playerPopup = false;
    }
  });
}
