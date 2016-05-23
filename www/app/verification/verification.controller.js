 (function() {
    'use strict';

    angular.module('starter')
        .controller('verificationController', verificationController);

    function verificationController($scope, $state, verificationFactory, tostService, localStorageService) {
            console.log('verificationController');
            $scope.data={
                varificationCode:'',
                email:''
                }
                if(localStorageService.get('userEmail')){
                 $scope.data.email = localStorageService.get('userEmail');
                }
            $scope.verify = function(){
            	var query = verificationFactory.save({
                email: $scope.data.email,
                code: $scope.data.varificationCode
                });
                query.$promise.then(function(data) {
                    console.log(data);
                    tostService.notify(data.message);
                });
            };
            if(localStorageService.get('fromLoginPage')){
                console.log('fromLoginPage');
                $scope.showEmailInput = true;
            }
    }
})();