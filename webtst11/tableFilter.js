app.filter('searching', function () {
    return function (word) {
        console.log(word);
        return word;
    }
});