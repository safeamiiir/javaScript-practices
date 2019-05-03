app.controller("controllerDataName", ['$scope', function ($scope) {
    $scope.title = " Golabi";
    $scope.content = " Golabi1";
    $scope.number = 12345;
    $scope.foods = [ 'خیار', 'آبگوشت', 'پیتزا'];
    $scope.obj = { 'avali':'a', 'dovomi':'b', 'sevomi':'c'};
    $scope.arr = [ { 'name' : 'ramin', 'age' : '20', 'gender' : 'male' },
        { 'name' : 'reza', 'age' : '35', 'gender' : 'male' },
        { 'name' : 'ahmad', 'age' : '59', 'gender' : 'male' } ];
}]);