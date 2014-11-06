require('vue');

module.exports = {
    template: require("./blank-state.html"),
    data: {
        showDialog: false
    },
    methods: {
        toggleAddPersonDialog: function() {
            this.showDialog = !this.showDialog;
        }
    }
};