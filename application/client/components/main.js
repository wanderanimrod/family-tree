var Vue = require('vue');

//Necessary to ensure component will be registered before the top-level VM is created
require('./blank-state/blank-state.js');

var vm = new Vue({
    el: '#landing-page'
});