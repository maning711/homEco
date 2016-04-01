/**
 * created by maning
 */
angular.module('homEco').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/main', {
        templateUrl: '/pages/main.html',
        controller: 'MainCtrl'
    }).when('/login', {
        templateUrl: '/pages/login.html',
        controller: 'LoginCtrl'
    }).when('/regist', {
        templateUrl: '/pages/regist.html',
        controller: 'RegistCtrl'
    }).otherwise({
        redirectTo: '/login'
    });
});