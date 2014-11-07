describe('Blank State Component', function() {
    var blankState;
    beforeEach(function() {
        blankState = require('../../components/blank-state/blank-state.js');
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
});