myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout', '$routeParams', 'Lightbox',

    function($scope, $location, galleryModel, $timeout, $routeParams, Lightbox) {

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

        $scope.$on('imageAdded', function(event, args) {
            $scope.singleGallery = args;
            console.log('Inside event', $scope.singleGallery);
            $scope.$apply();
        });

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
                        $scope.singleGallery.images.push(response);
                        console.log($scope.singleGallery);
                        $scope.$emit('imageAdded', $scope.singleGallery);
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
                $location.path('/gallery/' + id);
            },
            openLightboxModal: function(index) {
                Lightbox.openModal($scope.singleGallery.images, index);
            },
            deleteImage: function(imageId) {
                var data = {
                    imageId: imageId,
                    galleryId: $routeParams.id
                };
                galleryModel.deleteSingleImage(data).success(function(response) {
                    console.log('response', response);
                    $scope.singleGallery = response;
                });
            }
        });
    }
]);
