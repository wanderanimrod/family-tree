require('../../bower_components/pickadate/lib/picker.js');
require('../../bower_components/pickadate/lib/picker.date.js');
var jquery = require('jquery');

module.exports = {
    template: require('./date-input.html'),
    ready: function() {
        jquery('#el').pickadate({
            today: '',
            selectMonths: true,
            selectYears: 1000,
            min: new Date(1800, 1, 1),
            max: new Date()
        });
    }
};