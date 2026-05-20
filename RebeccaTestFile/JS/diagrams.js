function choosenSport(sport) {
  let selectedSport = disciplineInfo.find((x) => x.title == sport);
  return selectedSport;
}
function radarChart(sport) {
  let parent = document.getElementById("sport_page_skillBox");
  let selectedSport = choosenSport(sport);
  let skills = Object.entries(selectedSport.skillFactors);

  let width = 500;
  let height = 500;
  const margin = 60;
  const maxValue = 5;
  const minValue = 0;
  const levels = 5;
  const radius = Math.min(width, height) / 2 - margin;
  //räkna ut vinkel för mellan varje skills
  const angleSlice = (Math.PI * 2) / skills.length;

  const radiusScale = d3
    .scaleLinear()
    .domain([minValue, maxValue])
    .range([0, radius]);

  let svg = d3
    .select(parent)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid black");

  //Skapa en grupp som ska placeras mitten, annars ligger det uppe i ett hörn
  svg.append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);

  //skapa ringarna som är i cirkeln
  for (let level = 1; level <= levels; level++) {
    svg
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

    svg
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

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
  });
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
