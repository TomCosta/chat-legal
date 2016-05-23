 (function() {
    'use strict';

    angular.module('starter')
        .controller('settingController', settingController);

    function settingController($scope, $rootScope, $state) {
            console.log('settingController');
            $rootScope.footerMenu = true;
    }
})();