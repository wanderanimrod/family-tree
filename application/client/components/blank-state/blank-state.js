newComponent = require('../common/vue-extensions').newComponent;

var component = newComponent('blank-state', {
    templateFromFile: "client/components/blank-state/blank-state.html",
    methods: {
        showAddPersonDialog: function() {

        }
    }
});

module.exports = component;