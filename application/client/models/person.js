var superAgent = require('superagent-promise');
var endpoint = require('../config/api-config.js').PEOPLE_ENDPOINT;

var Person = function(surname, firstName, dateOfBirth, gender) {
    this.surname = surname;
    this.firstName = firstName;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
};

Person.GENDER = {
    FEMALE: 'female',
    MALE: 'male'
};

Person.prototype.save = function() {
    return addPerson({
        surname: this.surname,
        first_name: this.firstName,
        date_of_birth: this.dateOfBirth,
        gender: this.gender
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
