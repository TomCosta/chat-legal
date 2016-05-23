 (function() {
    'use strict';

    angular.module('starter')
        .controller('chatsController', chatsController);

    function chatsController($scope, $rootScope, $state, ajaxService) {
            console.log('chatsController');
            ajaxService.getData('chats.json').then(function(response){
                console.log(response);
                $scope.displayChats = response; 
            });
    }
})();