/**
 * created by maning
 */
angular.module('homEco').controller('DaliyExpCtrl', function($scope, $http, $location){
    $scope.tradeInfo = {
        costType: '',
        tradeDate: '',
        content: '',
        payType1: false,
        payType2: false,
        payType3: false,
        payType4: false,
        tradeFlg: '2',
        incomeType: ''
    }; 
    $scope.select = function (string) {
        $scope.tradeInfo.incomeType = string;
    };
    $scope.deleteDate = function () {
        $scope.tradeInfo.tradeDate = '';
    };
    $scope.clear = function () {
        $scope.tradeInfo.costType = '';
        $scope.tradeInfo.tradeDate = '';
        $scope.tradeInfo.content = '';
        $scope.tradeInfo.payType1 = false;
        $scope.tradeInfo.payType2 = false;
        $scope.tradeInfo.payType3 = false;
        $scope.tradeInfo.payType4 = false;
    };
    $scope.saveCost = function() {
        $http({
            url: '/api/saveTradeInfo',
            method: 'POST',
            data: {
                tradeInfo: $scope.tradeInfo
            }
        }).success(function() {
            $rootScope.messg.saveSuccess = true;
            $scope.clear();
        }).error(function() {
            $rootScope.messg.alertDanger = true;
        })
    }
});