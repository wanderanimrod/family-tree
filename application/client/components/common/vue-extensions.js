var Vue = require('vue');
var superagent = require('superagent');

var insertHtml = function(url, el) {
    superagent.get(url, function(response) {
        el.innerHTML = response.text;
    });
};

module.exports = {
    newComponent: function(cName, opts) {
        var oldCreated = opts.created;
        opts.created = function() {
            insertHtml(this.$options.templateFromFile, this.$el);
            oldCreated && oldCreated.call(this);
        };
        return Vue.component(cName, opts);
    }
};
