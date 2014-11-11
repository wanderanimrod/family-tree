describe('Person', function() {
    var Person = require('../../models/person.js');
    var peopleEndpoint = require('../../config/api-config.js').PEOPLE_ENDPOINT;
    var superagent = require('superagent-promise');
    var FakeResponse = require('../fakes/fake-superagent.js');

    it('should save person to the backend', function(done) {
        var response = {body: {id: 1}};
        var postSpy = spyOn(superagent, 'post').and.returnValue(FakeResponse(response));
        var data = {surname: 'Nekesa', first_name: 'Patricia'};

        var person = new Person(data.surname, data.first_name);

        person.save().then(function(savedPerson) {
            expect(postSpy).toHaveBeenCalledWith(peopleEndpoint, data);
            expect(savedPerson.id).toBe(1);
            done();
        });
    });
});
