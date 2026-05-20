function radarChart() {
    let parent = document.getElementById("sport_page_skillBox");
    let svg = d3
        .select(parent)
        .append("svg")
        .attr("width", "500")
        .attr("height", "500")
        .style("border", "1px solid black"); // skapat svg som placeras i body och får höjd och bredd
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