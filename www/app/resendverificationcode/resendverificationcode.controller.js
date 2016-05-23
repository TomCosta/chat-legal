 (function() {
    'use strict';

    angular.module('starter')
        .controller('resendVerificationCodeController', resendVerificationCodeController);

    function resendVerificationCodeController($scope, $state, resendVerificationCodeFactory) {
            console.log('resendVerificationCodeController');
            $scope.data={
                email:''
                }
            $scope.resend = function(){
            	console.log($scope.data.email);
            	var query = resendVerificationCodeFactory.save({
                email: $scope.data.email
                });
                query.$promise.then(function(data) {
                    console.log(data);
                });
            };
    }
})();