// Locations
const locationInfo = [
  {
    title: "Sky World",
    img: "images/worlds_pics/skyWorldPic.png",
    text: "Sky World is a floating world high above the clouds, known for its bright skies, powerful winds, and unstable terrain. Competition days in this world challenge participants to maintain balance and precision while moving across soft cloud platforms and narrow aerial paths. The constantly changing weather conditions make every event unpredictable, forcing competitors to quickly adapt their strategies. Despite its peaceful and beautiful appearance, Sky World is considered one of the most technically demanding locations in the entire competition.",
  },
  {
    title: "Desert World",
    img: "images/worlds_pics/desertWorldPic.png",
    text: "Desert World is a vast and unforgiving landscape filled with endless dunes, rocky canyons, and intense heat. Competition days in this world test the endurance and mental strength of every participant, as the harsh climate quickly drains energy and focus. Strong sandstorms can suddenly reduce visibility and completely change the conditions of an event within seconds. Success in Desert World depends on stamina, strategic movement, and the ability to remain calm under extreme pressure.",
  },
  {
    title: "Mountain World",
    img: "images/worlds_pics/mountainWorldPic.png",
    text: "Mountain World is a cold and rugged environment surrounded by steep cliffs, icy paths, and towering snowy peaks. Competition days in this world require both physical strength and careful precision, as the difficult terrain makes movement dangerous and unpredictable. Sudden snowfalls and freezing winds often create challenging conditions that force participants to adapt quickly during events. Mountain World rewards competitors who can combine endurance, balance, and determination in one of the harshest locations of the competition.",
  },
  {
    title: "Underwater World",
    img: "images/worlds_pics/underWaterWorldPic.png",
    text: "Underwater World is a mysterious environment hidden beneath the surface of the ocean, filled with deep waters, glowing coral reefs, and powerful underwater currents. Competition days in this world challenge participants to control their movement and timing while adapting to slower mobility and constantly shifting surroundings. Visibility can quickly change in the darker areas of the ocean, making concentration and awareness extremely important during events. Underwater World rewards patience, precision, and the ability to stay calm in an unfamiliar and unpredictable environment.",
  },
  {
    title: "Plain World",
    img: "images/worlds_pics/plainWorldPic.png",
    text: "Plain World is a wide and open landscape covered with green fields, rolling hills, and long natural pathways. Unlike the more extreme worlds, competition days in this location focus heavily on speed, consistency, and pure athletic performance. The stable terrain allows participants to move freely, but the long distances and fast-paced events demand strong endurance and concentration. Plain World may appear simple at first glance, but its balanced conditions often create some of the most competitive and intense challenges in the tournament.",
  },
];

for (let i = 0; i < locations.length; i++) {
  locationInfo[i].id = locations[i].id;
}

let locationSections = [
  {
    title: "Game Days",
    text: "The list shows how all players performed here, making it easy to identify the top performers and compare results within the selected location.",
  },
  {
    title: "Best Players",
    text: "Explore the player ranking for this location. The list shows how all players performed here, making it easy to identify the top performers and compare results within the selected location.",
  },
];

console.log("locationInfo", locationInfo);

// Skills
const skillsInfo = [
  {
    title: "strength",
    img: "images/skills_pics/megaMushroom.webp",
  },
  {
    title: "speed",
    img: "images/skills_pics/boomerangFlower.png",
  },
  {
    title: "balance",
    img: "images/skills_pics/superLeaf.webp",
  },
  {
    title: "precision",
    img: "images/skills_pics/fireFlower.png",
  },
  {
    title: "strategy",
    img: "images/skills_pics/flyingMushroom.png",
  },
];

for (let i = 0; i < skillsInfo.length; i++) {
  skillsInfo[i].id = skills[i].id;
  skillsInfo[i].skillFactorKey = skills[i].name;
}

console.log("skillsInfo", skillsInfo);

// Sports
const disciplineInfo = [
  {
    id: 1,
    title: "Bob Sleigh",
    img: "images/disciplines_pics/bobSleighPic.png",
  },
  {
    id: 2,
    title: "Figure Skating",
    img: "images/disciplines_pics/figureSkatingPic.png",
  },
  {
    id: 3,
    title: "Ski Jumping",
    img: "images/disciplines_pics/skiJumpingPic1.png",
  },
  {
    id: 4,
    title: "Speed Skating",
    img: "images/disciplines_pics/speedSkatingPic.png",
  },
  {
    id: 5,
    title: "Snowboard Cross",
    img: "images/disciplines_pics/snowboardPic1.png",
  },
];

for (let i = 0; i < disciplineInfo.length; i++) {
  const matchingDiscipline = disciplines.find(
    (discipline) => discipline.id === disciplineInfo[i].id,
  );

  if (matchingDiscipline) {
    let skillFactors = {};

    for (let skillFactorKey in matchingDiscipline.skillFactors) {
      let matchingSkill = skillsInfo.find(
        (skill) => skill.skillFactorKey === skillFactorKey,
      );

      if (matchingSkill) {
        skillFactors[matchingSkill.title] =
          matchingDiscipline.skillFactors[skillFactorKey];
      }
    }

    disciplineInfo[i].skillFactors = skillFactors;
  }
}

console.log("disciplineInfo", disciplineInfo);

// Participants
const participantsInfo = [
  {
    name: "Amy",
    img: "images/players/amy.webp",
    color: "#FF95C8",
  },
  {
    name: "Baby Daisy",
    img: "images/players/babyDaisy.png",
    color: "#FF7225",
  },
  {
    name: "Baby Luigi",
    img: "images/players/babyLuigi.png",
    color: "#00B400",
  },
  {
    name: "Baby Mario",
    img: "images/players/babyMario.png",
    color: "#FF0000",
  },
  {
    name: "Baby Peach",
    img: "images/players/babyPeach.png",
    color: "#FFA1D7",
  },
  {
    name: "Baby Rosalina",
    img: "images/players/babyRosalina.png",
    color: "#00D9C1",
  },
  {
    name: "Birdo",
    img: "images/players/birdo.png",
    color: "#FF85FF",
  },
  {
    name: "Blaze",
    img: "images/players/blazeTheCat.webp",
    color: "#E4AFFF",
  },
  {
    name: "BoomBoom",
    img: "images/players/boomBoom.webp",
    color: "#FF8400",
  },
  {
    name: "Boomerang Bro",
    img: "images/players/boomerangBro.webp",
    color: "#3451DD",
  },
  {
    name: "Bowser Jr",
    img: "images/players/bowser-jr.png",
    color: "#9AE200",
  },
  {
    name: "Bowser",
    img: "images/players/bowser.webp",
    color: "#008500",
  },
  {
    name: "Cream",
    img: "images/players/cream.webp",
    color: "#00CCFF",
  },
  {
    name: "Daisy",
    img: "images/players/daisy.png",
    color: "#FF3D00",
  },
  {
    name: "Diddy",
    img: "images/players/diddy.png",
    color: "#F61315",
  },
  {
    name: "Donkey Kong",
    img: "images/players/donkeyKong.png",
    color: "#FF0000",
  },
  {
    name: "Dry Bones",
    img: "images/players/dryBones.webp",
    color: "#8CB6B7",
  },
  {
    name: "Eggman",
    img: "images/players/eggman.webp",
    color: "#3A59C9",
  },
  {
    name: "Espio",
    img: "images/players/espio.png",
    color: "#8A00CA",
  },
  {
    name: "Fire Bro",
    img: "images/players/fireBro.webp",
    color: "#F63923",
  },
  {
    name: "Hammer Bro",
    img: "images/players/hammerBro.webp",
    color: "#00CC00",
  },
  {
    name: "Iggy Koopa",
    img: "images/players/iggyKoopa.png",
    color: "#8F69FF",
  },
  {
    name: "Knuckles",
    img: "images/players/knuckle.webp",
    color: "#FCCB00",
  },
  {
    name: "Koopa",
    img: "images/players/koopa.webp",
    color: "#00C200",
  },
  {
    name: "Lakitu",
    img: "images/players/lakitu.png",
    color: "#009400",
  },
  {
    name: "Larry Koopa",
    img: "images/players/larryKoopa.png",
    color: "#00BFFF",
  },
  {
    name: "Ludwig Von Koopa",
    img: "images/players/ludwigVonKoopa.webp",
    color: "#0056E4",
  },
  {
    name: "Luigi",
    img: "images/players/luigi.png",
    color: "#00AA00",
  },
  {
    name: "Mario",
    img: "images/players/mario.webp",
    color: "#FF0000",
  },
  {
    name: "Metal Sonic",
    img: "images/players/metalSonic.webp",
    color: "#0058FB",
  },
  {
    name: "Morton Koopa",
    img: "images/players/mortonKoopa.webp",
    color: "#6D5A54",
  },
  {
    name: "Princess Peach",
    img: "images/players/princessPeach.png",
    color: "#FF8BC6",
  },
  {
    name: "Rosalina",
    img: "images/players/rosalina.png",
    color: "#38AFBC",
  },
  {
    name: "Roy Koopa",
    img: "images/players/royKoopa.png",
    color: "#FF0081",
  },
  {
    name: "Shadow",
    img: "images/players/shadow.webp",
    color: "#FF3342",
  },
  {
    name: "ShyGuy",
    img: "images/players/shyGuy.png",
    color: "#5E80EA",
  },
  {
    name: "Silver",
    img: "images/players/silver.webp",
    color: "#314873",
  },
  {
    name: "Sonic",
    img: "images/players/sonic.png",
    color: "#3649F8",
  },
  {
    name: "Tails",
    img: "images/players/SRCTails.webp",
    color: "#FFA800",
  },
  {
    name: "Toad",
    img: "images/players/toad.png",
    color: "#FF0000",
  },
  {
    name: "Toadette",
    img: "images/players/toadette.webp",
    color: "#FF85DE",
  },
  {
    name: "Waluigi",
    img: "images/players/waluigi.png",
    color: "#7C31D5",
  },
  {
    name: "Wario",
    img: "images/players/wario.png",
    color: "#CB44B9",
  },
  {
    name: "Yoshi",
    img: "images/players/yoshi.png",
    color: "#FC5600",
  },
];

for (let i = 0; i < participantsInfo.length; i++) {
  participantsInfo[i].id = participants[i].id;
}

console.log("participantsInfo", participantsInfo);

// Seasons
const seasonInfo = seasons.map((season) => {
  return {
    year: season.year,
    competitionDays: season.competitionDays,
  };
});

console.log("seasonInfo", seasonInfo);

// location svg info
const gameMonthInfo = [
  {
    month: 2,
    name: "February",
  },
  {
    month: 3,
    name: "March",
  },
  {
    month: 4,
    name: "April",
  },
  {
    month: 5,
    name: "May",
  },
  {
    month: 6,
    name: "June",
  },
  {
    month: 7,
    name: "July",
  },
  {
    month: 8,
    name: "August",
  },
  {
    month: 9,
    name: "September",
  },
  {
    month: 10,
    name: "October",
  },
  {
    month: 11,
    name: "November",
  },
];

// participants svg info
