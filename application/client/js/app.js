var Promise = require('bluebird');
var get = Promise.promisify(require('superagent').get);
var blankState = require('./blank-state.js');

get('/people/').then(function(response) {
    var people = response.body.people;
    if(!people.length) blankState.draw();
});