/**
 * created by maning
 */
angular.module('homEco').controller('IncomesCtrl', function($scope, $http, $location){
    $scope.select = function (string) {
        $scope.typeIncome = string;
    };
    $scope.deleteDate = function () {
        $scope.selectedDate = '';
    };
});