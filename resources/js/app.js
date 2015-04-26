/**
 * Created by amitav on 6/4/15.
 */
var app = angular.module('app', []);

app.factory('apiController', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        apiCall: function (method, url, data) {
            return $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method: method,
                url: baseUrl + url,
                data: (data!=undefined) ? $.param(data) : ''
            }).error(function (data, status, headers, config) {

            }).success(function (data) {

            });
        }
    }
}]);

app.factory('postFactory', ['apiController', function (apiController) {
    return {
        getPosts: function(skip, take) {
            var url = 'post' + '?skip=' + skip + '&take=' + take;
            return apiController.apiCall('GET', url, '').then(function (data) {
                return data.data;
            });
        }
    }
}]);

app.controller('homeCtrl', ['$scope', 'postFactory',  function($scope, postFactory) {
    $scope.skip = 0;
    $scope.take = 10;
    $scope.loading = false;

    postFactory.getPosts($scope.skip, $scope.take).then(function (data) {
        $scope.posts = data;
        $scope.skip = $scope.skip + $scope.take;
    });

    $scope.loadMore = function() {
        var current = $scope.posts;
        postFactory.getPosts($scope.skip, $scope.take).then(function (data) {
            $scope.posts = data;
            angular.forEach(current, function(value, key) {
                $scope.posts.push(value);
            });
            $scope.skip = $scope.skip + $scope.take;
        });
    }


}]);