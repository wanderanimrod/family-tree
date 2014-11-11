var Person = require('../../models/person.js');

module.exports = {
    template: require("./blank-state.html"),
    data: {
        person: {
            surname: '',
            firstName: '',
            dateOfBirth: '',
            gender: ''
        }
    },
    methods: {
        toggleAddPersonDialog: function() {
            this.showDialog = !this.showDialog;
        },
        addPerson: function() {
            var person = new Person(
                this.person.surname, this.person.firstName,
                this.person.dateOfBirth, this.person.gender
            );
            return person.save();
        },
        genderChanged: function(event) {
            var idGenderMatcher = {'gender-female': Person.GENDER.FEMALE, 'gender-male': Person.GENDER.MALE};
            this.person.gender = idGenderMatcher[event.detail.item.id];
        }
    },
    components: {
        'date-input': require('../date-input/date-input.js')
    }
};