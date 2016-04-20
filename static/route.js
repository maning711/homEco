/**
 * created by maning
 */
angular.module('homEco').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
    when('/', {
        templateUrl: '/pages/main.html',
        controller: 'MainCtrl'
    }).
    when('/login', {
        templateUrl: '/pages/login.html',
        controller: 'LoginCtrl'
    }).
    when('/regist', {
        templateUrl: '/pages/regist.html',
        controller: 'RegistCtrl'
    }).
    when('/daliyExp', {
        templateUrl: '/pages/daliyExp.html',
        controller: 'DaliyExpCtrl'
    }).
    when('/incomes', {
        templateUrl: '/pages/incomes.html',
        controller: 'IncomesCtrl'
    }).
    when('/reports', {
        templateUrl: '/pages/reports.html',
        controller: 'ReportsCtrl'
    }).
    when('/rtnTotal', {
        templateUrl: '/pages/main.html',
        controller: 'MainCtrl'
    }).
    otherwise({
        redirectTo: '/login'
    });
});