var Vue = require('vue');

var componentRegistry = require('./component-registry.js');

var vm = new Vue({
    el: '#landing-page'
});

module.exports = {viewModel: vm, components: componentRegistry};