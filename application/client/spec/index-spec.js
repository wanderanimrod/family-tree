describe('Index Page ViewModel', function() {
    var main;

    beforeEach(function() {
        var $ = require('jquery');
        spyOn(document, 'querySelector').and.returnValue($('<div></div>'));
        main = require('../components/index.js');
    });
});
