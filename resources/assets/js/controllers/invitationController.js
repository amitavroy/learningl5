myApp.controller('invitationController', ['$scope', 'data',
    function($scope, data) {
        /*getting all invites*/
        if (data && data.myInvitations != undefined) {
            data.myInvitations.success(function(response) {
                $scope.myInvitations = response;
                console.log('Invites loaded', $scope.myInvitations);
                $scope.showInvites = true;
            });
        }

        /*variables*/
        angular.extend($scope, {
            showInvites: false,
            newInvite: {},
            myInvitations: {}
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
