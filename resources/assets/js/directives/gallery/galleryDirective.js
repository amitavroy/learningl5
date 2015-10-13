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
