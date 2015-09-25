/*This is the main file where angular is defined*/
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/users/login.html',
            controller: 'userController'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/users/dashboard.html',
            controller: 'userController'
        });

        $routeProvider.when('/logout', {
            templateUrl: 'templates/users/logout.html',
            controller: 'userController'
        });

        $routeProvider.otherwise('/');
    }
]);

//# sourceMappingURL=app.js.map