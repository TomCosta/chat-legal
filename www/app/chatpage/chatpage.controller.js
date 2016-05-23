 (function() {
    'use strict';

    angular.module('starter')
        .controller('chatpageController', chatpageController);

    function chatpageController($scope, $rootScope, $state, $timeout, $ionicScrollDelegate, ajaxService) {
            console.log('Chat Page');
            $scope.login = function(){
            	$state.go('app.contacts');
            }
            $timeout(function() {
                $ionicScrollDelegate.scrollBottom(true);
            });
            ajaxService.getData('chatpage.json').then(function(response){
                console.log(response);
                $scope.displayChatMessages = response; 
            });
    }
})();