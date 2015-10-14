myApp.factory('galleryModel', ['$http', '$rootScope', function($http, $rootScope) {
    return {
        myGalleries: '',
        viewGallery: {},
        loadGalleryById: function(id) {
            this.viewGallery = this.getUserGalleries().then(function(response) {
                var thisGallery = '';
                angular.forEach(response.data, function(value, key) {
                    if (value.id == id) {
                        thisGallery = value;
                    }
                });

                return thisGallery;
            });
            return this.viewGallery;
        },
        getUserGalleries: function() {
            return this.myGalleries === '' ? this.fetchUserGalleries() : this.myGalleries;
        },
        fetchUserGalleries: function() {
            console.log('Fetch from url');
            this.myGalleries = $http.get(baseUrl + 'gallery').then(function(response) {
                return response;
            });
            return this.myGalleries;
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
                $rootScope.$broadcast('newUser', response);
            }).error(function(data, status, headers) {

            });
        },
        deleteGallery: function(id) {
            console.log('delete gallery ' + id)
                /*var galleries = this.myGalleries.$$state.value.data;
                angular.forEach(galleries, function(value, key) {
                    if (id == value.id) {
                        console.log(galleries[key]);
                        delete galleries[key];
                    }
                });
                return this.myGalleries.$$state.value.data = galleries;*/
        }
    };
}])
