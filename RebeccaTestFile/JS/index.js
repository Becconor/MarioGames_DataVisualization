
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

        disciplinesPage("snowboard");
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
    mainDOM.innerHTML = "";
};

function disciplinesPage() {
    header("disciplines");
    mainDOM.innerHTML = "";
};

function participantsPage() {
    header("participant");
    mainDOM.innerHTML = "";
};

function locationsPage() {
    header("locations");
};


homePage()
