function participantsPage() {
    header("participant");
    mainDOM.innerHTML = `
  <div id="participants_page_backgroundimage">
        <div id="participants_page_title">Participants Ranking</div>
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
                src="images/disciplines_pics/bobSleighText.png"
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
                src="images/disciplines_pics/figureskatingText.png"
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
                src="images/disciplines_pics/skiJumpingText.png"
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
                src="images/disciplines_pics/snowboardCrosstext.png"
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
                src="images/disciplines_pics/speedSkatingText.png"
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

    let participants = document.getElementById("participants_page_participants");
    participantsList("participants_page_participants", addToParticipants);
    scatterPlot();
}
