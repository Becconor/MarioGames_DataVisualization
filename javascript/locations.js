let currentSectionIndex = 0;

const locationInfo = [
    {
        img: "../images/worlds_pics/skyWorldPic.png",
        title: "Sky World",
        text: "Game days in Sky World take place far above the clouds, where participants must face a light but demanding environment. The soft terrain affects movement and stability, while the windy weather adds an extra layer of difficulty to every event.Success in Sky World often depends not only on strength and speed, but also on balance, focus, and the ability to quickly adapt to changing conditions.Despite its bright and peaceful appearance, this location can be one of the most challenging settings in the competition."
    }, {
        img: "../images/worlds_pics/desertWorldPic.png",
        title: "Desert World",
        text: "Game days in Sky World take place far above the clouds, where participants must face a light but demanding environment. The soft terrain affects movement and stability, while the windy weather adds an extra layer of difficulty to every event.Success in Sky World often depends not only on strength and speed, but also on balance, focus, and the ability to quickly adapt to changing conditions.Despite its bright and peaceful appearance, this location can be one of the most challenging settings in the competition."
    }, {
        img: "../images/worlds_pics/mountainWorldPic.png",
        title: "Mountain World",
        text: "Game days in Sky World take place far above the clouds, where participants must face a light but demanding environment. The soft terrain affects movement and stability, while the windy weather adds an extra layer of difficulty to every event.Success in Sky World often depends not only on strength and speed, but also on balance, focus, and the ability to quickly adapt to changing conditions.Despite its bright and peaceful appearance, this location can be one of the most challenging settings in the competition."
    }, {
        img: "../images/worlds_pics/underWaterWorldPic.png",
        title: "Underwater World",
        text: "Game days in Sky World take place far above the clouds, where participants must face a light but demanding environment. The soft terrain affects movement and stability, while the windy weather adds an extra layer of difficulty to every event.Success in Sky World often depends not only on strength and speed, but also on balance, focus, and the ability to quickly adapt to changing conditions.Despite its bright and peaceful appearance, this location can be one of the most challenging settings in the competition."
    }, {
        img: "../images/worlds_pics/plainWorldPic.png",
        title: "Plain World",
        text: "Game days in Sky World take place far above the clouds, where participants must face a light but demanding environment. The soft terrain affects movement and stability, while the windy weather adds an extra layer of difficulty to every event.Success in Sky World often depends not only on strength and speed, but also on balance, focus, and the ability to quickly adapt to changing conditions.Despite its bright and peaceful appearance, this location can be one of the most challenging settings in the competition."
    }
];

let locationSections = [
    {
        title: "Game Days",
        text: "The list shows how all players performed here, making it easy to identify the top performers and compare results within the selected location."
    }, {
        title: "Best Players",
        text: "Explore the player ranking for this location. The list shows how all players performed here, making it easy to identify the top performers and compare results within the selected location."
    }
];




function locationsPage(location) {
    let world = locationInfo.find(p => p.title === location);
    let currentSection = locationSections[currentSectionIndex];

    mainDOM.innerHTML = `
        <div id="L_world" class="L_worldSky">
            <div class="back_track">p</div>

            <div id="L_worldText">
                <h1 id="L_worldName">${world.title}</h1 >
                <p id="L_worlsDescription">${world.text}</p>
            </div >
        </div >


        <div id="L_infoChoice">
            <img class="L_arrows" id="L_arrowsLeft" src="../images/arrows/arrowLeft.png" alt="">
            <h2 id="locationInfoPick">${currentSection.title}</h2>
            <img class="L_arrows" id="L_arrowsRight" src="../images/arrows/arrowRight.png" alt="">
        </div>

        <div id="L_pickedLocationInfo">
            <p id="L_pickedInfoText">${currentSection.text}</p>

            <div id="rankinglist"></div>







        </div>

    `;

    let leftArrow = document.getElementById("L_arrowsLeft");
    let rightArrow = document.getElementById("L_arrowsRight");

    leftArrow.addEventListener("click", () => {

        currentSectionIndex--;

        if (currentSectionIndex < 0) {
            currentSectionIndex =
                locationSections.length - 1;
        }

        locationsPage(location);
    });

    rightArrow.addEventListener("click", () => {

        currentSectionIndex++;

        if (currentSectionIndex >= locationSections.length) {
            currentSectionIndex = 0;
        }

        locationsPage(location);
    });



    // mainDOM.innerHTML = `
    // <div id="L_infoChoice">
    // <img class="L_arrows" id="L_arrowsLeft" src="../images/arrows/arrowLeft.png" alt="">
    // <h2 id="locationInfoPick">Game Days</h2>
    // <img class="L_arrows" id="L_arrowsRight" src="../images/arrows/arrowRight.png" alt="">
    // </div>

    //     <div id="L_pickedLocationInfo">
    //     <p id="L_pickedInfoText">Explore the player ranking for this location. The list shows how all players performed
    //         here, making it easy to identify the top performers and compare results within the selected location.</p>

    //     <div class="L_ranking">
    //         <div class="L_rankingFirstText">
    //         <h2 class="L_rankNumber">1</h2>
    //         <img class="L_rankPic" src="../images/players/amy.webp" alt="">
    //         <h3 class="L_rankNames">Amy</h3>
    //         </div>

    //         <h3 class="L_rankPoints">93 pts</h3>
    //     </div>

    //     <div class="L_ranking">
    //         <div class="L_rankingFirstText">
    //         <h2 class="L_rankNumber">1</h2>
    //         <img class="L_rankPic" src="../images/players/mario.webp" alt="">
    //         <h3 class="L_rankNames">Amy</h3>
    //         </div>

    //         <h3 class="L_rankPoints">93 pts</h3>
    //     </div>

    //     <div class="L_ranking">
    //         <div class="L_rankingFirstText">
    //         <h2 class="L_rankNumber">1</h2>
    //         <img class="L_rankPic" src="../images/players/babyLuigi.png" alt="">
    //         <h3 class="L_rankNames">Amy</h3>
    //         </div>

    //         <h3 class="L_rankPoints">93 pts</h3>
    //     </div>
    //     </div>
    // `;

    // let arrowLeft = document.getElementById("L_arrowsLeft");
    // let arrowRight = document.getElementById("L_arrowsRight");

};


function worldInfoPick() {

}

/* locationsPage("Sky World"); */