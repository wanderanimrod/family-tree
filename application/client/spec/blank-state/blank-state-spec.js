describe('Blank State Component', function() {
    var blankState, Person;

    beforeEach(function() {
        blankState = require('../../components/blank-state/blank-state.js');
        Person = require('../../models/person.js');
    });

    it('should import the blank state template', function() {
        var expectedTemplate = require('../../components/blank-state/blank-state.html');
        expect(blankState.template).toBe(expectedTemplate)
    });

    it('should make the new person dialog not show by default', function() {
        expect(blankState.data.showDialog).toBeFalsy();
    });

    it('should toggle visibility of new person dialog', function() {
        var mockVM = {showDialog: false};
        blankState.methods.toggleAddPersonDialog.call(mockVM);
        expect(mockVM.showDialog).toBeTruthy();
    });

    it('should save person when addPerson is called', function() {
        var Person = require('../../models/person.js');
        var mockVM = {person: {firstName: 'Patricia', surname: 'Nekesa'}};
        var mockSavePerson = spyOn(Person.prototype, 'save');

        blankState.methods.addPerson.call(mockVM);

        expect(mockSavePerson).toHaveBeenCalled();
    });

    it('should include the date-input component', function() {
        var dateInput = require('../../components/date-input/date-input.js');
        expect(blankState.components['date-input']).toEqual(dateInput);
    });

    it('should set female gender from polymer core-select event', function() {
        var mockVM = {person: {gender: ''}};
        var event = {detail: {
            isSelected: true,
            item: {id: 'gender-female'}
        }};
        blankState.methods.genderChanged.bind(mockVM)(event);
        expect(mockVM.person.gender).toEqual(Person.GENDER.FEMALE)
    });

    it('should set male gender from polymer core-select event', function() {
        var mockVM = {person: {gender: ''}};
        var event = {detail: {
            isSelected: true,
            item: {id: 'gender-male'}
        }};
        blankState.methods.genderChanged.bind(mockVM)(event);
        expect(mockVM.person.gender).toEqual(Person.GENDER.MALE)
    });
});