let sports = [];
let worlds = [];
let newSkills = [];
let completeParticipantsSet = [];
const skillNames = ["strength", "speed", "balance", "precision", "strategy"];
const skillsPictures = [
  "../images/skills_pics/megaMushroom.webp",
  "../images/skills_pics/boomerangFlower.png",
  "../images/skills_pics/superLeaf.webp",
  "../images/skills_pics/fireFlower.png",
  "../images/skills_pics/flyingMushroom.png",
];

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

for (let i = 0; i < disciplineNames.length; i++) {
  sports.push({
    id: disciplines[i].id,
    name: disciplineNames[i],
    img: disciplinesPictures[i],
    skillFactors: disciplines[i].skillFactors,
  });
}

const addToParticipants = [
  {
    name: "Amy",
    img: "../images/players/amy.webp",
    color: "#FF95C8",
  },
  {
    name: "Baby Daisy",
    img: "../images/players/babyDaisy.png",
    color: "#FF7225",
  },
  {
    name: "Baby Luigi",
    img: "../images/players/babyLuigi.png",
    color: "#00B400",
  },
  {
    name: "Baby Mario",
    img: "../images/players/babyMario.png",
    color: "#FF0000",
  },
  {
    name: "Baby Peach",
    img: "../images/players/babyPeach.png",
    color: "#FFA1D7",
  },
  {
    name: "Baby Rosalina",
    img: "../images/players/babyRosalina.png",
    color: "#00D9C1",
  },
  {
    name: "Birdo",
    img: "../images/players/birdo.png",
    color: "#FF85FF",
  },
  {
    name: "Blaze",
    img: "../images/players/blazeTheCat.webp",
    color: "#E4AFFF",
  },
  {
    name: "BoomBoom",
    img: "../images/players/boomBoom.webp",
    color: "#FF8400",
  },
  {
    name: "Boomerang Bro",
    img: "../images/players/boomerangBro.webp",
    color: "#3451DD",
  },
  {
    name: "Bowser Jr",
    img: "../images/players/bowser-jr.png",
    color: "#9AE200",
  },
  {
    name: "Bowser",
    img: "../images/players/bowser.webp",
    color: "#008500",
  },
  {
    name: "Cream",
    img: "../images/players/cream.webp",
    color: "#00CCFF",
  },
  {
    name: "Daisy",
    img: "../images/players/daisy.png",
    color: "#FF3D00",
  },
  {
    name: "Diddy",
    img: "../images/players/diddy.png",
    color: "#F61315",
  },
  {
    name: "Donkey Kong",
    img: "../images/players/donkeyKong.png",
    color: "#FF0000",
  },
  {
    name: "Dry Bones",
    img: "../images/players/dryBones.webp",
    color: "#8CB6B7",
  },
  {
    name: "Eggman",
    img: "../images/players/eggman.webp",
    color: "#3A59C9",
  },
  {
    name: "Espio",
    img: "../images/players/espio.png",
    color: "#8A00CA",
  },
  {
    name: "Fire Bro",
    img: "../images/players/fireBro.webp",
    color: "#F63923",
  },
  {
    name: "Hammer Bro",
    img: "../images/players/hammerBro.webp",
    color: "#00CC00",
  },
  {
    name: "Iggy Koopa",
    img: "../images/players/iggyKoopa.png",
    color: "#8F69FF",
  },
  {
    name: "Knuckles",
    img: "../images/players/knuckle.webp",
    color: "#FCCB00",
  },
  {
    name: "Koopa",
    img: "../images/players/koopa.webp",
    color: "#00C200",
  },
  {
    name: "Lakitu",
    img: "../images/players/lakitu.png",
    color: "#009400",
  },
  {
    name: "Larry Koopa",
    img: "../images/players/larryKoopa.png",
    color: "#00BFFF",
  },
  {
    name: "Ludwig Von Koopa",
    img: "../images/players/ludwigVonKoopa.webp",
    color: "#0056E4",
  },
  {
    name: "Luigi",
    img: "../images/players/luigi.jpg",
    color: "#00AA00",
  },
  {
    name: "Mario",
    img: "../images/players/mario.webp",
    color: "#FF0000",
  },
  {
    name: "Metal Sonic",
    img: "../images/players/metalSonic.webp",
    color: "#0058FB",
  },
  {
    name: "Morton Koopa",
    img: "../images/players/mortonKoopa.webp",
    color: "#6D5A54",
  },
  {
    name: "Princess Peach",
    img: "../images/players/princessPeach.png",
    color: "#FF8BC6",
  },
  {
    name: "Rosalina",
    img: "../images/players/rosalina.png",
    color: "#38AFBC",
  },
  {
    name: "Roy Koopa",
    img: "../images/players/royKoopa.png",
    color: "#FF0081",
  },
  {
    name: "Shadow",
    img: "../images/players/shadow.webp",
    color: "#FF3342",
  },
  {
    name: "ShyGuy",
    img: "../images/players/shyGuy.png",
    color: "#5E80EA",
  },
  {
    name: "Silver",
    img: "../images/players/silver.webp",
    color: "#314873",
  },
  {
    name: "Sonic",
    img: "../images/players/sonic.png",
    color: "#3649F8",
  },
  {
    name: "Tails",
    img: "../images/players/SRCTails.webp",
    color: "#FFA800",
  },
  {
    name: "Toad",
    img: "../images/players/toad.jpg",
    color: "#FF0000",
  },
  {
    name: "Toadette",
    img: "../images/players/toadette.webp",
    color: "#FF85DE",
  },
  {
    name: "Waluigi",
    img: "../images/players/waluigi.png",
    color: "#7C31D5",
  },
  {
    name: "Wario",
    img: "../images/players/wario.png",
    color: "#CB44B9",
  },
  {
    name: "Yoshi",
    img: "../images/players/yoshi.png",
    color: "#FC5600",
  },
];

/* for (let i = 0; i < addToParticipants.length; i++) {
  completeParticipantsSet.push({
    // id: participants[i].id,
    name: addToParticipants[i].name,
    img: addToParticipants[i].img,
  });
} */

console.log(sports);
