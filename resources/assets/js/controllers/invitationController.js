myApp.controller('invitationController', ['$scope',
    function($scope) {
        /*variables*/
        angular.extend($scope, {
            newInvite: {}
        });

        /*methods*/
        angular.extend($scope, {
            sendInvite: function(sendInviteForm) {
                if (sendInviteForm.$valid) {
                    console.log('newInvite', $scope.newInvite);
                }
            }
        });
    }
]);
