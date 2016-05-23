(function() {
   'use strict';
   angular.module('starter')
       .factory('verificationFactory', verificationFactory);

   function verificationFactory($resource, Configurations) {
       return $resource(Configurations.Hostserver+'/do_user_verification/:email/:code', {},{});
   };
})();
