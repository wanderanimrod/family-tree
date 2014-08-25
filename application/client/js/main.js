var get = Promise.promisify(superagent.get);

get('/people/').then(function(response) {
    var people = response.body.people;
    if(!people.length) {
        //TODO, render the blank-state.html into the page. Cannot select shadow DOM elements.
    }
});