describe('Index Page ViewModel', function() {
    var index;

    beforeEach(function() {
        var $ = require('jquery');
        spyOn(document, 'querySelector').and.returnValue($('<div></div>'));
        index = require('../components/index.js');
    });

    it('should have blank-state as one of its components', function() {
        expect(typeof index.components['blank-state']).toEqual('function')
    });
});