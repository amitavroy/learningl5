myApp.factory('userModel', ['$http', function($http) {
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
        }).error(function(data, status, headers) {
            console.log(data, status, headers);
            alert(data);
        });
    }
    return userModel;
}])
