var superAgent = require('superagent-promise');
var endpoint = require('../config/api-config.js').PEOPLE_ENDPOINT;

var Person = function(surname, firstName) {
    this.surname = surname;
    this.firstName = firstName;
};

Person.prototype.save = function() {
    return addPerson({
        surname: this.surname,
        first_name: this.firstName
    });
};

Person.build = function(data) {
    var person = new Person(data.surname, data.first_name);
    person.id = data.id;
    return person;
};

var addPerson = function(data) {
    return superAgent.post(endpoint, data).end().then(function(response) {
        return Person.build(response.body);
    });
};

module.exports = Person;
