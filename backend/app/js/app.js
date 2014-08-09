var d3 = require('d3-browserify')

var canvas = d3.select("#canvas");
var canvasWidth = canvas.style("width").replace("px", "")
var canvasHeight = canvas.style("height").replace("px", "")

var svg = canvas.append("svg")
    .attr("width", canvasWidth)
    .attr("height", canvasHeight)

var personGroup = svg.append("svg")
    .attr("x", 100)
    .attr("y", 100)

var g = personGroup.append("g")

var center = {x: canvasWidth/2, y: canvasHeight/2}

var text = g.append('text')
    .attr("x", center.x)
    .attr("y", center.y)
    .attr("text-anchor", "middle")
    .attr('font-family', 'FontAwesome')
    .attr('font-size', 80)
    .attr("fill", "#1D8C5E")
    .text('\uf055')

module.exports = {
    myFunction: function() {
        console.log("imported function called")
    }
}