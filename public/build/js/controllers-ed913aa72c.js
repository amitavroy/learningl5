myApp.controller('navController', ['$scope', '$location', '$cookies', 'userModel',
    function($scope, $location, $cookies, userModel) {
        /*Variables*/
        angular.extend($scope, {
            user: userModel.getUserObject(),
            navLinkPrimary: [{
                link: 'Home',
                url: '/dashboard'
            }, {
                link: 'Add Gallery',
                url: '/gallery/add'
            }]
        });

        /*Methods*/
        angular.extend($scope, {
            checkActiveLink: function(currLink) {
                if ($location.path() == currLink) {
                    return 'make-active';
                }
            },
            doLogout: function() {
                userModel.doUserLogout();
                $location.path('/');
            }
        });
    }
]);

myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel) {
    angular.extend($scope, {
        login: {
            username: 'reachme@amitavroy.com',
            password: 'pass'
        }
    });

    angular.extend($scope, {
        doLogin: function(loginForm) {
            var data = {
                email: $scope.login.username,
                password: $scope.login.password
            };

            userModel.doLogin(data).then(function() {
                $location.path('/dashboard');
            });
        }
    });
}]);

myApp.controller('globalController', ['$scope', function($scope) {
    $scope.global = {};
    $scope.global.navUrl = "templates/partials/nav.html";
}]);

//# sourceMappingURL=controllers.js.map