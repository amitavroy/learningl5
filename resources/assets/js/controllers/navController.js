myApp.controller('navController', ['$scope', '$location', '$cookies', 'userModel',
    function($scope, $location, $cookies, userModel) {
        /*Variables*/
        angular.extend($scope, {
            user: userModel.getUserObject()
        });

        /*Methods*/
        angular.extend($scope, {
            doLogout: function() {
                userModel.doUserLogout();
                $location.path('/');
            }
        });
    }
]);
