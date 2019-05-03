app.controller('tableControllerFunc', function ($scope, $http) {
    $scope.tst = " Golabi";

    var url = "https://api.myjson.com/bins/1fjxze";
    $http.get(url)
        .then(function(response) {
            $scope.Users = response.data;

        });
});