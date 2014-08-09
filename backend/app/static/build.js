(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
console.log("Blank state js invoked!")

},{}]},{},[1,2]);