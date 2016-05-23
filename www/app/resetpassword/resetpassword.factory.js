(function() {
   'use strict';
   angular.module('starter')
       .factory('resetPasswordFactory', resetPasswordFactory);

   function resetPasswordFactory($resource, Configurations) {
       return $resource(Configurations.Hostserver+'/reset_password/:email', {},{});
   };
})();
