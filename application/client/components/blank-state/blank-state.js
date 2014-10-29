var vue = require('vue');
var superagent = require('superagent');

var fileFromUrl = function(url, el) {
    superagent.get(url, function(response) {
        el.innerHTML = response.text;
    });
};

var newComponent = function(cName, opts) {
    var oldCreated = opts.created;
    opts.created = function() {
        fileFromUrl(this.$options.templateFromFile, this.$el);
        oldCreated && oldCreated.call(this);
    };
    return vue.component(cName, opts);
};

newComponent('blank-state', {
    templateFromFile: "client/components/blank-state/blank-state.html",
    methods: {
        showAddPersonDialog: function() {

        }
    }
});