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

myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies) {
    var userModel = {};

    /**
     * Check if the credentials are correct from server
     * and return the promise back to the controller
     * 
     * @param  {array} loginData
     * @return {promise}
     */
    userModel.doLogin = function(loginData) {
        console.log(loginData);
        return $http({
            headers: {
                'Content-Type': 'application/json'
            },
            url: baseUrl + 'auth',
            method: "POST",
            data: {
                email: loginData.email,
                password: loginData.password
            }
        }).success(function(response) {
            console.log(response);
            $cookies.put('auth', JSON.stringify(response));
        }).error(function(data, status, headers) {
            console.log(data, status, headers);
            alert(data);
        });
    };

    /**
     * Return whether the user is logged in or not
     * based on the cookie set during the login
     * 
     * @return {boolean}
     */
    userModel.getAuthStatus = function() {
        var status = $cookies.get('auth');
        if (status) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * Return the user object from the cookie
     * and convert from string to JSON
     * 
     * @return {userObject}
     */
    userModel.getUserObject = function() {
        var user = angular.fromJson($cookies.get('auth'));
        return user;
    }

    /**
     * Close the session of the current user
     * and delete the cookie set for him
     *
     * @return boolean
     */
    userModel.doUserLogout = function() {
        $cookies.remove('auth');
    };

    return userModel;
}])

//# sourceMappingURL=models.js.map