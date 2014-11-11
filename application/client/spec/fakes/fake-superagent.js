var Promise = require('promise');

var FakeResponse = function(response) {
    self.response = response;
    this.end = function() {
        return Promise.resolve(self.response)
    };
    return this;
};

module.exports = FakeResponse;