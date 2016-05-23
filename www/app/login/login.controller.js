 (function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $state, loginFactory, localStorageService, $localStorage, tostService) {
            console.log('login');
            $scope.data = {
                email:'',
                password:''
                }
            $scope.login = function(){
                $state.go('app.contacts');
                var query = loginFactory.save({
                action_type:'manual',
                social_id:'',
                platform:'android',
                token:'token',
                action:'login_register',
                device_id:'device_id',
                email: $scope.data.email,
                password: $scope.data.password
                });
                query.$promise.then(function(data) {
                    console.log(data);
                    tostService.notify(data.message);
                    $state.go('app.contacts');
                });
            };
            $scope.verifyAccount = function(){
                localStorageService.set('fromLoginPage','fromLoginPage');
                delete $localStorage.userEmail;
                $state.go('verification');
            };
    }
})();