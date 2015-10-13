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
