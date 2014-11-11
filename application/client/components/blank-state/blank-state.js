var Person = require('../../models/person.js');

module.exports = {
    template: require("./blank-state.html"),
    data: {
        person: {
            surname: '',
            firstName: ''
        }
    },
    methods: {
        toggleAddPersonDialog: function() {
            this.showDialog = !this.showDialog;
        },
        addPerson: function() {
            var person = new Person(this.person.surname, this.person.firstName);
            person.save()
        }
    },
    components: {
        'date-input': require('../date-input/date-input.js')
    }
};