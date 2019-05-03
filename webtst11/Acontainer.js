app.filter('Acontainer', function () {
    return function (input) {
        if( input === undefined )
            return "";
        else {
            console.log(input);
            return input
        }
    }
});
