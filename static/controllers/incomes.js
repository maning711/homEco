/**
 * created by maning
 */
angular.module('homEco').controller('IncomesCtrl', function($scope, $rootScope, $http){
    $scope.tradeInfo = {
        moneyNum: '',
        incomeType: '',
        tradeDate: '',
        content: '',
        payType1: false,
        payType2: false,
        payType3: false,
        tradeFlg: '1',
        costType: ''
    }; 
    $scope.select = function (string) {
        $scope.tradeInfo.incomeType = string;
    };
    $scope.deleteDate = function () {
        $scope.tradeInfo.tradeDate = '';
    };
    $scope.clear = function () {
        $scope.tradeInfo.incomeType = '';
        $scope.tradeInfo.tradeDate = '';
        $scope.tradeInfo.moneyNum = '';
        $scope.tradeInfo.content = '';
        $scope.tradeInfo.payType1 = false;
        $scope.tradeInfo.payType2 = false;
        $scope.tradeInfo.payType3 = false;
    };
    $scope.saveIncome = function() {
        $http({
            url: '/api/saveTradeInfo',
            method: 'POST',
            data: {
                tradeInfo: $scope.tradeInfo
            }
        }).success(function(tradeInfo) {
            $rootScope.messg.saveSuccess = true;
            $rootScope.loginInfo.homeAccts.cashAcct = tradeInfo.cashAcct;
            $scope.clear();
        }).error(function() {
            $rootScope.messg.alertDanger = true;
        })
    }
});