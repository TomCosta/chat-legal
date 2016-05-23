 (function() {
    'use strict';
    angular.module('starter')
            .factory('deviceService', deviceService);

    function deviceService() {
        return {
            getuuid: function() {
                return device.uuid;
            }
        }
    };

})();