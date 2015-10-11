myApp.factory('galleryModel', ['$http', function($http) {
    return {
        myGalleries: '',
        getUserGalleries: function() {

        },
        fetchUserGalleries: function() {
            return $http.get(baseUrl + 'gallery').then(function(response) {
                return response;
            });
        },
        saveGallery: function(galleryData) {
            return $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'gallery',
                method: "POST",
                data: {
                    name: galleryData.name
                }
            }).success(function(response) {

            }).error(function(data, status, headers) {

            });
        }
    };
}])
