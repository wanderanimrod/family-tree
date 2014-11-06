describe('Blank State Component', function() {
    var blankState;
    beforeEach(function() {
        blankState = require('../../components/blank-state/blank-state.js');
    });

    it('should be registered in the component registry', function() {
        var registry = require('../../components/component-registry');
        expect(registry).toContain(blankState);
    });
});