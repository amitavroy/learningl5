myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies) {
    var userModel = {};

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
            $cookies.put('auth', response);
        }).error(function(data, status, headers) {
            console.log(data, status, headers);
            alert(data);
        });
    };

    userModel.getAuthStatus = function() {
        var status = $cookies.get('auth');
        if (status) {
            return true;
        } else {
            return false;
        }
    };

    userModel.doUserLogout = function() {
        $cookies.remove('auth');
    };
    return userModel;
}])

//# sourceMappingURL=models.js.map