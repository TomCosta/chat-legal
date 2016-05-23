(function () {
    'use strict';
    angular.module('starter')
            .factory('ajaxService', ajaxService);
    function ajaxService($http, $q, $log) {
        return {
            getData: function (api) {
                var def = $q.defer();
                var http = $http({
                    url: 'app/mock/'+api,
                    method: 'GET',
//                    headers: {'Content-Type': 'application/json;charset=utf-8', 'Authorization': 'bearer 1dbf33d6-4788-41d5-aecd-821d9842f538'},
//                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                });
                http.success(function (data) {
                    def.resolve(data);
                });
                http.error(function () {
                    $log.warn('500 Error');
                    def.reject('500');
                });
                return def.promise;
            }
        };
    }

})();

    