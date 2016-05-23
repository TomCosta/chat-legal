 (function() {
    'use strict';

    angular.module('starter')
        .controller('profileController', profileController);

    function profileController($scope, $rootScope, ajaxService, $interval, $timeout) {
            console.log('profileController');
            var picd = [];
            var imUri;
            var interval;
            $scope.editProfilePic = function(){
             console.log('take pic');
             navigator.camera.getPicture(onSuccess, onFail, {quality: 100,
                 destinationType: Camera.DestinationType.FILE_URI,
                 saveToPhotoAlbum: true,
                 mediaType: window.Camera.MediaType.ALLMEDIA            });
             function onSuccess(imageURI) {
                 console.log(imageURI);
                 picd.push(imageURI);
                 imUri = picd;
                 console.log(imUri);
                 interval = $interval(function() {
                     console.log('datapic');
                     if (imUri == 'none') {
                         $scope.pics = '';
                         console.log('there is none in picuri');
                     } else {
                         $scope.pics = picd;
                     }
                 }, 100);
                 $timeout(function() {
                     console.log('interval close');
                     $interval.cancel(interval);
                 }, 200);
             }            function onFail(message) {
                 alert('Failed because: ' + message);
             }
            };
            ajaxService.getData('profile.json').then(function(response){
                console.log(response);
                $scope.displayprofile = response; 
            });
    }
})();