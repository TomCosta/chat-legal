(function() {
   'use strict';
   angular.module('starter')
       .factory('resendVerificationCodeFactory', resendVerificationCodeFactory);

   function resendVerificationCodeFactory($resource, Configurations) {
       return $resource(Configurations.Hostserver+'/resend_verification_code/:email', {},{});
   };
})();
