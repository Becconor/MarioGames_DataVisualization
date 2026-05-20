function choosenSport(sport) {
  let selectedSport = disciplineInfo.find((x) => x.title == sport);
  return selectedSport;
}
function radarChart(sport) {
  let parent = document.getElementById("sport_page_skillBox");
  let selectedSport = choosenSport(sport);
  let skills = Object.entries(selectedSport.skillFactors);
  console.log(skills);

  let width = 600;
  let height = 600;
  const margin = 60;
  const maxValue = 25; //ändra till största talet i skills
  const levels = 5;
  const radius = Math.min(width, height) / 2 - margin;
  //räkna ut vinkel för mellan varje skills
  const angleSlice = (Math.PI * 2) / skills.length;

  const radiusScale = d3.scaleLinear().domain([0, levels]).range([0, radius]);

  const skillScale = d3.scaleLinear().domain([0, maxValue]).range([0, levels]);

  let svg = d3
    .select(parent)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  //Skapa en grupp som ska placeras mitten, annars ligger det uppe i ett hörn
  let middle = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  //skapa ringarna som är i cirkeln
  for (let level = 1; level <= levels; level++) {
    middle
      .append("circle")
      .attr("r", radiusScale(level))
      .attr("fill", "none")
      .attr("stroke", "grey")
      .attr("stroke-width", 1);
  }
  //skapa axlarna
  skills.forEach((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    middle
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", x)
      .attr("y2", y)
      .attr("stroke", "#999")
      .attr("stroke-width", 1);
  });

  //lägg till text runt diagrammet
  skills.forEach((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;

    // radius + 15 så att det inte ligger exakt på yttersta linjen
    const x = Math.cos(angle) * (radius + 15);
    const y = Math.sin(angle) * (radius + 15);

    middle
      .append("text")
      .attr("x", x)
      .attr("y", y)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("font-weight", "bold")
      .style("font-size", "15px")
      .style("fill", "black")
      .text(d[0]);
  });

  //skapa radarformen
  const radarLine = d3
    .lineRadial()
    .radius((d) => radiusScale(skillScale(d[1]))) //d.value behövs ändra
    .angle((d, i) => i * angleSlice)
    .curve(d3.curveLinearClosed);

  //skapa formen(färg)
  middle
    .append("path")
    .datum(skills)
    .attr("d", radarLine)
    .attr("fill", "rgba(219, 52, 155, 0.45)")
    .attr("stroke", "#b92989")
    .attr("stroke-width", 3);

  //lägg till punkter
  skills.forEach((d, i) => {
    const angle = angleSlice * i - Math.PI / 2;

    const scaledValue = skillScale(d[1]);

    const x = Math.cos(angle) * radiusScale(scaledValue);
    const y = Math.sin(angle) * radiusScale(scaledValue);

    middle
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 4)
      .attr("fill", "#2980b9");
  });

  for (let level = 0; level <= maxValue; level++) {
    middle
      .append("text")
      .attr("x", radiusScale(level))
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .style("font-size", "13px")
      .style("fill", "#555")
      .text(level);
  }
}

function scatterPlot() {
  let parent = document.getElementById("participants_page_svg");
  let svg = d3
    .select(parent)
    .append("svg")
    .attr("width", "500")
    .attr("height", "500")
    .style("border", "1px solid black"); // skapat svg som placeras i body och får höjd och bredd
}

function barChart() {}

function lineChart() {}

function sportRanking() {}
