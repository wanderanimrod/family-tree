Vue = require('vue');

var options = {
    template: require("./blank-state.html"),
    methods: {
        showAddPersonDialog: function() {
            console.log('**************', "Going to show dialog", '**************');
        }
    }
};
var component = Vue.component('blank-state', options);

module.exports = options;