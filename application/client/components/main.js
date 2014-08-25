var get = Promise.promisify(superagent.get);

get('/people/').then(function(response) {
    var people = response.body.people;
    if(!people.length) {}
});