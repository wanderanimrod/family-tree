describe('Index Page ViewModel', function() {
    var main;

    beforeEach(function() {
        var $ = require('jquery');
        spyOn(document, 'querySelector').and.returnValue($('<div></div>'));
        main = require('../components/main.js');
    });

    it('should initialise component registry', function() {
        var componentRegistry = require('../components/component-registry.js');
        expect(main.components).toEqual(componentRegistry);
    });
});
