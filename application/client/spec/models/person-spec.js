describe('Person', function() {
    var Person = require('../../models/person.js');
    var peopleEndpoint = require('../../config/api-config.js').PEOPLE_ENDPOINT;
    var superagent = require('superagent-promise');
    var FakeResponse = require('../fakes/fake-superagent.js');

    it('should save person to the backend', function(done) {
        var response = {body: {id: 1}};
        var postSpy = spyOn(superagent, 'post').and.returnValue(FakeResponse(response));
        var data = {surname: 'Nekesa', first_name: 'Patricia', date_of_birth: '2010-01-31', gender: Person.GENDER.FEMALE};

        var person = new Person(data.surname, data.first_name, data.date_of_birth, data.gender);

        person.save().then(function(savedPerson) {
            expect(postSpy).toHaveBeenCalledWith(peopleEndpoint, data);
            expect(savedPerson.id).toBe(1);
            done();
        });
    });

    it('should provide options for gender', function() {
        expect(Person.GENDER.FEMALE).toBe('female');
        expect(Person.GENDER.MALE).toBe('male');
    });
});
