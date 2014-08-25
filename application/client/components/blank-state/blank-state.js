var canvas = d3.select("#canvas");
var canvasWidth = canvas.style("width").replace("px", "");
var canvasHeight = canvas.style("height").replace("px", "");

var svg = canvas.append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight);

var center = {x: canvasWidth / 2, y: canvasHeight / 2};

var text = svg.append('text')
    .attr("x", center.x)
    .attr("y", center.y)
    .attr("text-anchor", "middle")
    .attr('font-family', 'FontAwesome')
    .attr('font-size', 80)
    .attr("fill", "#1D8C5E")
    .text('\uf055');