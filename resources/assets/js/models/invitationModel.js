myApp.factory('invitationModel', ['$http', function($http) {
    return {
        getInvitations: function() {
            return $http.get(baseUrl + 'get-invitations');
        }
    };
}])
