const skillNames = ["strength", "speed", "balance", "precision", "strategy"];
const skillsPictures = [
  "../images/skills_pics/megaMushroom.webp",
  "../images/skills_pics/boomerangFlower.png",
  "../images/skills_pics/superLeaf.webp",
  "../images/skills_pics/fireFlower.png",
  "../images/skills_pics/flyingMushroom.png",
];
let newSkills = [];

for (let i = 0; i < skills.length; i++) {
  newSkills.push({
    id: skills[i].id,
    name: skillNames[i],
    img: skillsPictures[i],
  });
}

const locationsNames = ["desert", "mountain", "plain", "sky", "underwater"];
const locationsPictures = [
  "../images/worlds_pics/desertWorldPic.png",
  "../images/worlds_pics/mountainWorldPic.png",
  "../images/worlds_pics/plainWorldPic.png",
  "../images/worlds_pics/skyWorldPic.png",
  "../images/worlds_pics/underWaterWorldPic.png",
];
let worlds = [];
for (let i = 0; i < locationsNames.length; i++) {
  worlds.push({
    id: locations[i].id,
    name: locationsNames[i],
    img: locationsPictures[i],
  });
}

const disciplineNames = [
  "bobsleigh",
  "figure skating",
  "ski jumping",
  "speed skating",
  "snowboard cross",
];
const disciplinesPictures = [
  "../images/disciplines_pics/bobSleigh/bobSleighPic.png",
  "../images(disciplines_pics/figureSkating/figureSkating.png",
  "../images/disciplines_pics/skiJumping/skiJumpingPic1.png",
  "../images/disciplines_pics/speedSkating/speedSkating1.png",
  "../images/disciplines_pics/snowboardCross/snowboardPic1.png",
];
let sports = [];
for (let i = 0; i < disciplineNames.length; i++) {
  sports.push({
    id: disciplines[i].id,
    name: disciplineNames[i],
    img: disciplinesPictures[i],
  });
}

const addToParticipants = [
  {
    name: "Amy",
    img: "../images/players/amy.webp",
  },
  {
    name: "Baby Peach",
    img: "../images/players/Baby_Peach_Sluggers.webp",
  },
  {
    name: "Baby Daisy",
    img: "../images/players/babyDaisy.png",
  },
  {
    name: "Baby Luigi",
    img: "../images/players/babyLuigi.png",
  },
  {
    name: "",
    img: "../images/players/babyLuma.webp",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
  {
    name: "",
    img: "../images/",
  },
];

for (let i = 0; i < addToParticipants.length; i++) {
  Object.assign(addToParticipants[i], participants[i]);
}

/* const lines = ["incomeTeachers", "incomeNurses", "incomeProgrammers"];
let lineIncomeDataset = [];
for (let line of lines) {
  const oneLineData = { description: line, points: [] };
  for (let yearData of datasetIncome) {
    oneLineData.points.push({ year: yearData.year, income: yearData[line] });
  }
  lineIncomeDataset.push(oneLineData);
} */

  let completeParticipantsSet = [];
  for(let p of)