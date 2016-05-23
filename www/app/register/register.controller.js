 (function() {
    'use strict';

    angular.module('starter')
        .controller('registerController', registerController);

    function registerController($scope, $state, registerFactory, googleLogin, facebookLogin, 
            localStorageService, $localStorage, tostService, deviceService) {
            console.log('Register Controller');
            $scope.user={
                name:'',
                email:'',
                password:'',
                };
            //var deviceUUID = deviceService.getuuid();
            var deviceUUID = 'dfdfdsfdf';
            $scope.register = function() {
            $scope.registerSpinner = true;
            localStorageService.set('userEmail',$scope.user.email);
            delete $localStorage.fromLoginPage;
            var query = registerFactory.save({
                action_type:'manual',
                social_id:'',
                platform:'android',
                token:'AIzaSyCud3Ip685_VAzRB-b5KtTl3CpUKCGdezE',
                action:'login_register',
                device_id:deviceUUID,
                email: $scope.user.email,
                name: $scope.user.name,
                password: $scope.user.password
            });
            query.$promise.then(function(data) {
                $scope.registerSpinner = false;
                console.log(data);
                tostService.notify(data.message);
                if(data.data.show_verification == '1'){
                    $state.go('verification');
                }
            });
        };
        $scope.googleRegister = function(){
            $scope.googleSpinner = true;
            console.log('Attempting Google Login');
            var promise = googleLogin.startLogin();
            promise.then(function(googleData) {
                console.log(googleData);
                    var query = registerFactory.save({
                        action_type:'google',
                        social_id:googleData.google_id,
                        platform:'android',
                        token:'AIzaSyCud3Ip685_VAzRB-b5KtTl3CpUKCGdezE',
                        action:'login_register',
                        device_id:deviceUUID,
                        email: googleData.email,
                        name: googleData.name
                    });
                    query.$promise.then(function(data) {
                        $scope.googleSpinner = false;
                        console.log(data);
                        tostService.notify(data.message);
                        $state.go('app.contacts');
                    });
            }, function(data) {
                console.log(data);
            });
        };
        $scope.facebookRegister = function() {
            console.log('Attempting Facebook Login');
            $scope.facebookSpinner = true;
            facebookLogin.login().then(function(fbData){
                console.log(fbData);
                var query = registerFactory.save({
                        action_type:'facebook',
                        social_id:fbData.id,
                        platform:'android',
                        token:'AIzaSyCud3Ip685_VAzRB-b5KtTl3CpUKCGdezE',
                        action:'login_register',
                        device_id:deviceUUID,
                        email: fbData.email,
                        name: fbData.name
                    });
                    query.$promise.then(function(data) {
                        $scope.facebookSpinner = false;
                        console.log(data);
                        tostService.notify(data.message);
                        $state.go('app.contacts');
                    });
            }, function(data) {
                console.log(data);
            });
        };
    }
})();