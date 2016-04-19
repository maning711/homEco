/**
 * created by maning
 */
angular.module('homEco').controller('DaliyExpCtrl', function($scope, $rootScope, $http, $location){
    $scope.tradeInfo = {
        moneyNum: '',
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
        $scope.tradeInfo.costType = string;
    };
    $scope.deleteDate = function () {
        $scope.tradeInfo.tradeDate = '';
    };
    $scope.clear = function () {
        $scope.tradeInfo.costType = '';
        $scope.tradeInfo.tradeDate = '';
        $scope.tradeInfo.content = '';
        $scope.tradeInfo.moneyNum = '';
        $scope.tradeInfo.costType1 = false;
        $scope.tradeInfo.costType2 = false;
        $scope.tradeInfo.costType3 = false;
        $scope.tradeInfo.costType4 = false;
    };
    $scope.saveCost = function() {
        $http({
            url: '/api/saveTradeInfo',
            method: 'POST',
            data: {
                tradeInfo: $scope.tradeInfo
            }
        }).success(function(tradeInfos) {
            $rootScope.messg.saveSuccess = true;
            $rootScope.loginInfo.homeAccts.cashAcct = tradeInfos.cashAcct;
            $scope.clear();
        }).error(function() {
            $rootScope.messg.alertDanger = true;
        })
    }
});