 (function() {
    'use strict';

    angular.module('starter')
        .controller('resetPasswordController', resetPasswordController);

    function resetPasswordController($scope, $state, resetPasswordFactory, tostService) {
            console.log('resetPasswordController');
            $scope.data={
                email:''
                }
            $scope.resetPassword = function(){
                console.log($scope.data.email);
            	var query = resetPasswordFactory.save({
                email: $scope.data.email
                });
                query.$promise.then(function(data) {
                    console.log(data);
                    tostService.notify(data.message);
                });
            };
    }
})();