Polymer('blank-state', {
    showDialog: function() {
        this.$.person.toggle();
    },
    addPerson: function() {
        console.log("Going to add person")
    }
});

