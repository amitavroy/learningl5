myApp.controller('galleryController', ['$scope', '$location', 'galleryModel',
    function($scope, $location, galleryModel) {

        /*Getting all the galleries*/
        galleryModel.getAllGalleries().success(function(response) {
            $scope.galleries = response;
            $scope.showGallery = true;
        });

        /*Variables*/
        angular.extend($scope, {
            newGallery: {},
            errorDiv: false,
            errorMessages: []
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
            }
        });
    }
]);
