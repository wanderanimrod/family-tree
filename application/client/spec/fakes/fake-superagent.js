var Promise = require('promise');

var response = {};

var Request = {
    postAndReturn: function(desiredResponse) {
        response = desiredResponse;
        return Request;
    },
    end: function() {
        return Promise.resolve(response);
    }
};

module.exports = Request;