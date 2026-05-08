
let headerDOM = document.querySelector("header");
let mainDOM = document.querySelector("main");


function header(page) {
    headerDOM.innerHTML = `
    <div id="headerBox">
        <div id="navbar">
            <p id="homePage">Home</p>
            <p id="disciplinesPage">Disciplines</p>
            <p id="participantsPage">Participants</p>
            <p id="locationsPage">Locations</p>
        </div>

        <button id="chooseSeason">
            <div>Season 10</div> 
            <div>⌄</div> 
        </button>
    </div>
    `;

    let headerBoxId = document.getElementById("headerBox");
    let chooseSeasonId = document.getElementById("chooseSeason");

    if (page === "home") {
        headerBoxId.style.background = "repeating-linear-gradient(-45deg, #92C6FA 0px, #92C6FA 18px, #9ECEFB 18px, #9ECEFB 36px) ";
        chooseSeasonId.style.backgroundColor = "#92C6FA";
    }

    if (page === "disciplines") {
        headerBoxId.style.background = "repeating-linear-gradient(-45deg, #85DB93 0px, #85DB93 18px, #74D484 18px, #74D484 36px) ";
        chooseSeasonId.style.backgroundColor = "#85DB93";

    }

    if (page === "participant") {
        headerBoxId.style.background = "repeating-linear-gradient(-45deg, #f7a7c8 0px, #f7a7c8 18px, #f5b7d1 18px, #f5b7d1 36px) ";
        chooseSeasonId.style.backgroundColor = "#f7a7c8";
    }

    if (page === "locations") {
        headerBoxId.style.background = "repeating-linear-gradient(-45deg, #F8D97D 0px, #F8D97D 18px, #F7D25C 18px, #F7D25C 36px) ";
        chooseSeasonId.style.backgroundColor = "#F8D97D";
    }


}

header("home");


