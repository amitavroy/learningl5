/*This is the main file where angular is defined*/
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies', 'ui.bootstrap', 'bootstrapLightbox', 'angular-loading-bar']);

myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/users/login.html',
            controller: 'userController'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: 'templates/users/dashboard.html',
            controller: 'userController',
            authenticated: true
        });

        $routeProvider.when('/gallery/view', {
            templateUrl: 'templates/gallery/gallery-view.html',
            controller: 'galleryController',
            resolve: {
                data: function(galleryModel) {
                    return {
                        galleries: galleryModel.getAllGalleries()
                    };
                }
            },
            authenticated: true
        });

        $routeProvider.when('/gallery/add', {
            templateUrl: 'templates/gallery/gallery-add.html',
            controller: 'galleryController',
            resolve: {
                data: function() {
                    return 'single';
                }
            },
            authenticated: true
        });

        $routeProvider.when('/gallery/:id', {
            templateUrl: 'templates/gallery/gallery-single.html',
            controller: 'galleryController',
            resolve: {
                data: function(galleryModel, $route) {
                    return {
                        singleGallery: galleryModel.getGalleryById($route.current.params.id)
                    };
                }
            },
            authenticated: true
        });

        $routeProvider.when('/invitation/list', {
            templateUrl: 'templates/invitation/invitation-list.html',
            controller: 'invitationController',
            resolve: {
                data: function(invitationModel) {
                    return {
                        myInvitations: invitationModel.getInvitations()
                    };
                }
            },
            authenticated: true
        });

        $routeProvider.when('/logout', {
            templateUrl: 'templates/users/logout.html',
            controller: 'userController',
            authenticated: true
        });

        $routeProvider.otherwise('/');
    }
]);

myApp.run(["$rootScope", "$location", 'userModel',
    function($rootScope, $location, userModel) {
        $rootScope.$on("$routeChangeStart",
            function(event, next, current) {
                if (next.$$route.authenticated) {
                    if (!userModel.getAuthStatus()) {
                        $location.path('/');
                    }
                }

                if (next.$$route.originalPath == '/') {
                    if (userModel.getAuthStatus()) {
                        $location.path(current.$$route.originalPath);
                    }
                }
            });
    }
]);

myApp.directive('dropzone', function() {
    return function(scope, element, attrs) {
        var config, dropzone;

        config = scope[attrs.dropzone];

        // create a Dropzone for the element with the given options
        dropzone = new Dropzone(element[0], config.options);

        // bind the given event handlers
        angular.forEach(config.eventHandlers, function(handler, event) {
            dropzone.on(event, handler);
        });
    };
});

myApp.directive('imageonload', function() {
    return {
        restrict: 'A',
        scope: {
            class: '@'
        },
        link: function($scope, element, attrs) {
            element.bind('load', function() {
                $scope.imageLoaded = 'check';
                console.log('image is loaded outer');
                $scope.$apply();
            });
        }
    };
});

myApp.directive('imgLoad', function() {
    return {
        restrict: 'E',
        template: '<img ng-src="{{ actualLink }}" class="directive-image" />',
        scope: {
            actualLink: '@'
        },
        link: function($scope, element, attrs) {
            element.bind('load', function() {
                console.log('image is loaded inner');
            });
        }
    };
});
