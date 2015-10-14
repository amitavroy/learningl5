myApp.controller('navController', ['$scope', '$location', '$cookies', 'userModel',
    function($scope, $location, $cookies, userModel) {
        /*Variables*/
        angular.extend($scope, {
            user: userModel.getUserObject(),
            navLinkPrimary: [{
                link: 'Home',
                url: '/dashboard',
                subMenu: [{
                    link: 'View Galleries',
                    url: '/dashboard'
                }, {
                    link: 'Add Gallery',
                    url: '/gallery/add'
                }]
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
