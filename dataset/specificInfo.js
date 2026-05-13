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
    name: "Baby Mario",
    img: "../images/players/babyMario.png",
  },
  {
    name: "Baby Peach",
    img: "../images/players/babyPeach.png",
  },
  {
    name: "Baby Rosalina",
    img: "../images/players/babyRosalina.png",
  },
  {
    name: "Birdo",
    img: "../images/players/birdo.png",
  },
  {
    name: "Blaze",
    img: "../images/players/blazeTheCat.webp",
  },
  {
    name: "BoomBoom",
    img: "../images/players/boomBoom.webp",
  },
  {
    name: "Boomerang Bro",
    img: "../images/players/boomerangBro.webp",
  },
  {
    name: "Bowser Jr",
    img: "../images/players/bowser-jr.png",
  },
  {
    name: "Bowser",
    img: "../images/players/bowser.webp",
  },
  {
    name: "Cream",
    img: "../images/players/cream.webp",
  },
  {
    name: "Daisy",
    img: "../images/players/daisy.png",
  },
  {
    name: "Diddy",
    img: "../images/players/diddy.png",
  },
  {
    name: "Donkey Kong",
    img: "../images/players/donkeyKong.png",
  },
  {
    name: "Dry Bones",
    img: "../images/players/dryBones.webp",
  },
  {
    name: "Eggman",
    img: "../images/players/eggman.webp",
  },
  {
    name: "Espio",
    img: "../images/players/espio.png",
  },
  {
    name: "Fire Bro",
    img: "../images/players/fireBro.webp",
  },
  {
    name: "Hammer Bro",
    img: "../images/players/hammerBro.webp",
  },
  {
    name: "Iggy Koopa",
    img: "../images/players/iggyKoopa.png",
  },
  {
    name: "Knuckles",
    img: "../images/players/knuckle.webp",
  },
  {
    name: "Koopa",
    img: "../images/players/koopa.webp",
  },
  {
    name: "Lakitu",
    img: "../images/players/lakitu.png",
  },
  {
    name: "Larry Koopa",
    img: "../images/players/larryKoopa.png",
  },
  {
    name: "Ludwig Von Koopa",
    img: "../images/players/ludwigVonKoopa.webp",
  },
  {
    name: "Luigi",
    img: "../images/players/luigi.jpg",
  },
  {
    name: "Mario",
    img: "../images/players/mario.webp",
  },
  {
    name: "Metal Sonic",
    img: "../images/players/metalSonic.webp",
  },
  {
    name: "Morton Koopa",
    img: "../images/players/mortonKoopa.webp",
  },
  {
    name: "Princess Peach",
    img: "../images/players/princessPeach.png",
  },
  {
    name: "Rosalina",
    img: "../images/players/rosalina.png",
  },
  {
    name: "Roy Koopa",
    img: "../images/players/royKoopa.png",
  },
  {
    name: "Shadow",
    img: "../images/players/shadow.webp",
  },
  {
    name: "ShyGuy",
    img: "../images/players/shyGuy.png",
  },
  {
    name: "Silver",
    img: "../images/players/silver.webp",
  },
  {
    name: "Sonic",
    img: "../images/players/sonic.png",
  },
  {
    name: "Tails",
    img: "../images/players/SRCTails.webp",
  },
  {
    name: "Toad",
    img: "../images/players/toad.jpg",
  },
  {
    name: "Toadette",
    img: "../images/players/toadette.webp",
  },
  {
    name: "Waluigi",
    img: "../images/players/waluigi.png",
  },
  {
    name: "Wario",
    img: "../images/players/wario.png",
  },
  {
    name: "Yoshi",
    img: "../images/players/yoshi.png",
  },
];

/* for (let i = 0; i < addToParticipants.length; i++) {
  completeParticipantsSet.push({
    id: participants[i].id,
    name: addToParticipants[i].name,
    img: addToParticipants[i].img,
  });
} */
