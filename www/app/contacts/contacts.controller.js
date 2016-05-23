 (function() {
    'use strict';

    angular.module('starter')
        .controller('contactsController', contactsController);

    function contactsController($scope, $rootScope, ajaxService) {
            console.log('contactsController');
            ajaxService.getData('contacts.json').then(function(response){
                console.log(response);
                $scope.displaycontacts = response; 
            });
    }
})();