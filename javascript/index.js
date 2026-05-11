
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
        headerDOM.style.background = "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
        chooseSeasonId.style.backgroundColor = "#92C6FA";
        seasonDropdownID.style.backgroundColor = "#92C6FA";
    }

    if (page === "disciplines") {
        headerDOM.style.background = "repeating-linear-gradient(-45deg, #85DB93 0px, #85DB93 18px, #74D484 18px, #74D484 36px) ";
        chooseSeasonId.style.backgroundColor = "#85DB93";
        seasonDropdownID.style.backgroundColor = "#85DB93";

    }

    if (page === "participant") {
        headerDOM.style.background = "repeating-linear-gradient(-45deg, #f7a7c8 0px, #f7a7c8 18px, #f5b7d1 18px, #f5b7d1 36px) ";
        chooseSeasonId.style.backgroundColor = "#f7a7c8";
        seasonDropdownID.style.backgroundColor = "#f7a7c8";

    }

    if (page === "locations") {
        headerDOM.style.background = "repeating-linear-gradient(-45deg, #F8D97D 0px, #F8D97D 18px, #F7D25C 18px, #F7D25C 36px) ";
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
};

function disciplinesPage() {
    header("disciplines");
};

function participantsPage() {
    header("participant");
};

function locationsPage() {
    header("locations");
};


homePage()