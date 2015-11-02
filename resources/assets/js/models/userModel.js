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
     * Get the user object converted from string to JSON
     * @return {user object}
     */
    userModel.getUserObject = function() {
        var userObj = angular.fromJson($cookies.get('auth'));
        return userObj;
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
