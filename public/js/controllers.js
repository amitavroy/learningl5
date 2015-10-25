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

myApp.controller('userController', ['$scope', '$location', 'userModel',
    function($scope, $location, userModel) {
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
    }
]);

myApp.controller('galleryController', ['$scope', '$routeParams', '$location', 'galleryModel',
    function($scope, $routeParams, $location, galleryModel) {

        if ($routeParams.id) {
            galleryModel.loadGalleryById($routeParams.id).then(function(response) {
                $scope.viewGallery = response;
            });
        }

        galleryModel.getUserGalleries().then(function(response) {
            $scope.galleries = response.data;
        });

        $scope.$on('newUser', function(event, data) {
            $scope.galleries.push(data);
        });

        /*variables*/
        angular.extend($scope, {
            viewGallery: {},
            newGallery: {},
            errorDiv: false,
            errorMessages: ['asd', 'as'],
            csrfToken: csrfToken,
            dropzoneConfig: {
                'options': { // passed into the Dropzone constructor
                    'url': baseUrl + 'save/file'
                },
                'eventHandlers': {
                    'sending': function(file, xhr, formData) {},
                    'success': function(file, response) {}
                }
            }
        });

        /*methids*/
        angular.extend($scope, {
            saveNewGallery: function(addGalleryFrm) {
                $scope.formSubmitted = true;
                if (addGalleryFrm.$valid) {
                    $scope.formSubmitted = false;
                    galleryModel.saveGallery($scope.newGallery).success(function(response) {
                        $scope.errorMessages = null;
                        $location.path('/dashboard');
                    }).error(function(data, status, header) {
                        $scope.errorDiv = true;
                        $scope.errorMessages = data;
                    });
                }
            }
        });
    }
]);

myApp.controller('globalController', ['$scope', function($scope) {
    $scope.global = {};
    $scope.global.navUrl = "templates/partials/nav.html";
}]);

//# sourceMappingURL=controllers.js.map