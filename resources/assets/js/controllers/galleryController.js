myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout', '$routeParams',

    function($scope, $location, galleryModel, $timeout, $routeParams) {

        /*Getting all the galleries*/
        galleryModel.getAllGalleries().success(function(response) {
            $scope.galleries = response;
            $timeout(function() {
                $scope.galleries = response;
                console.log('Galleries loaded', $scope.galleries);
                $scope.showGallery = true;
            }, 300);
        });

        if ($routeParams.id) {
            console.log('Looking at gallery id' + $routeParams.id);
            galleryModel.getGalleryById($routeParams.id).success(function(response) {
                console.log('Gallery details', response);
                $scope.singleGallery = response;
            });
        }

        /*Variables*/
        angular.extend($scope, {
            newGallery: {},
            errorDiv: false,
            errorMessages: [],
            singleGallery: {},
            dropzoneConfig: {
                'options': {
                    'url': baseUrl + 'upload-image'
                },
                'eventHandlers': {
                    'sending': function(file, xhr, formData) {
                        formData.append('_token', csrfToken);
                        formData.append('galleryId', $routeParams.id);
                    },
                    'success': function(file, response) {
                        console.log(response);
                    }
                }
            }
        });

        /*Functions*/
        angular.extend($scope, {
            saveNewGallery: function(addGalleryForm) {
                console.log(addGalleryForm);
                if (addGalleryForm.$valid) {
                    $scope.formSubmitted = false;
                    galleryModel.saveGallery($scope.newGallery).success(function(response) {
                        $location.path('/gallery/view');
                    });
                } else {
                    $scope.formSubmitted = true;
                    console.log('Error');
                }
            },
            viewGallery: function(id) {
                console.log(id);
                $location.path('/gallery/' + id);
            }
        });
    }
]);
