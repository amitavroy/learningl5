myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout', '$routeParams',

    function($scope, $location, galleryModel, $timeout, $routeParams) {

        /*Getting all the galleries*/
        galleryModel.getAllGalleries().success(function(response) {
            $scope.galleries = response;
            $timeout(function() {
                $scope.galleries = response;
                $scope.showGallery = true;
            }, 1000);
        });

        if ($routeParams.id) {
            console.log('Looking at gallery id' + $routeParams.id);
        }

        /*Variables*/
        angular.extend($scope, {
            newGallery: {},
            errorDiv: false,
            errorMessages: [],
            singleGalery: {}
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
