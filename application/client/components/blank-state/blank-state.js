Vue = require('vue');

var component = Vue.component('blank-state', {
    template: require("./blank-state.html"),
    methods: {
        showAddPersonDialog: function() {
            console.log('**************', "Going to show dialog", '**************');
        }
    }
});

module.exports = component;