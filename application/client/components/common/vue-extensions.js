var fileFromUrl = function(url) {
    superagent.get(url, function(response) {
        return response.text;
    });
};