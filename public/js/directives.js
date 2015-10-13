/**
 * Sinnpet taken from https://gist.github.com/compact/8118670
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

myApp.directive('gallery', ['$location', 'galleryModel', function($location, galleryModel) {
    return {
        restrict: 'EA',
        templateUrl: 'templates/gallery/directive-gal.html',
        scope: {
            data: '='
        },
        controller: function($scope) {},
        link: function(scope, elem, attrs) {
            scope.goToGallery = function() {
                $location.path('/gallery/' + scope.data.id);
            };

            scope.deleteGallery = function() {
                galleryModel.deleteGallery(scope.data.id);
            };
        }
    };
}]);

//# sourceMappingURL=directives.js.map