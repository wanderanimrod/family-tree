describe('Blank State Component', function() {
    var blankState;
    beforeEach(function() {
        blankState = require('../../components/blank-state/blank-state.js');
    });

    it('should be registered in the component registry', function() {
        var components = require('../../components/component-registry');
        expect(components).toContain(blankState);
    });
});