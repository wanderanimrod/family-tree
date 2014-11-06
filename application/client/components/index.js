var Vue = require('vue');

var options = {
    el: '#landing-page',
    components: {
        'blank-state': require('./blank-state/blank-state.js')
    }
};

var vm = new Vue(options);

module.exports = options;