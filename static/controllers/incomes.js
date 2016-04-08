/**
 * created by maning
 */
angular.module('homEco').controller('IncomesCtrl', function($scope, $rootScope, $http, $location){
    $scope.select = function (string) {
        $scope.typeIncome = string;
    };
    $scope.deleteDate = function () {
        $scope.selectedDate = '';
    };
    $scope.clear = function () {
        $scope.typeIncome = '';
        $scope.selectedDate = '';
        $scope.content = '';
        $scope.payType1 = false;
        $scope.payType2 = false;
        $scope.payType3 = false;
    };
    $scope.saveIncome = function() {
        $http({
            url: '/api/saveTradeInfo',
            method: 'POST',
            data: {
                tradeInfo: $scope.tradeInfo
            }
        }).success(function(user) {
            $rootScope.alertSuccess = true;
        }).error(function(data) {
            $rootScope.alertDanger = true;
        })
    }
});