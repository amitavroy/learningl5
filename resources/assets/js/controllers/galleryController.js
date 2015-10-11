myApp.controller('galleryController', ['$scope', 'galleryModel', function($scope, galleryModel) {

    galleryModel.fetchUserGalleries().then(function(response) {
        $scope.galleries = response.data;
    });

    /*variables*/
    angular.extend($scope, {
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
        /**
         * Saving a new gallery
         * 
         * @return {galleryObj}
         */
        saveNewGallery: function(addGalleryFrm) {
            $scope.formSubmitted = true;

            if (addGalleryFrm.$valid) {
                $scope.formSubmitted = false;
                galleryModel.saveGallery($scope.newGallery).success(function(response) {
                    console.log(response, 'success');
                    $scope.errorMessages = null;
                }).error(function(data, status, header) {
                    $scope.errorDiv = true;
                    $scope.errorMessages = data;
                    console.log(data, 'error');
                });
            }
        }
    });
}]);

/**
 * Sinnper taken from https://gist.github.com/compact/8118670
 */
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
