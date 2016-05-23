var facebookLoginService = angular.module('facebookLoginService', ['ngStorage']);

facebookLoginService.factory('facebookLogin', facebookLogin);

function facebookLogin($http, $q, $state) {
    return {
        login: function() {
            var def = $q.defer();
            var fbLoginSuccess = function(response) {
                if (!response.authResponse) {
                    fbLoginError("Cannot find the authResponse");
                    return;
                }

                var authResponse = response.authResponse;

                getFacebookProfileInfo(authResponse)
                    .then(function(profileInfo) {
                        console.log(profileInfo);
                        def.resolve(profileInfo);
                        // loginService.setParseUserData(profileInfo.id, profileInfo.email, profileInfo.name, "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large");
                        // homeService.set('user_id', profileInfo.id);
                        // homeService.set('user_email', profileInfo.email);
                        // homeService.set('user_name', profileInfo.name);
                        // homeService.set('user_picture', "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large");
                        // $state.go('home.contact');
                    }, function(fail) {
                        console.log('profile info fail', fail);
                    });
            };

            var fbLoginError = function(error) {
                console.log('fbLoginError', error);
            };
            var getFacebookProfileInfo = function(authResponse) {
                var info = $q.defer();

                facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
                    function(response) {
                        console.log(response);
                        info.resolve(response);
                    },
                    function(response) {
                        console.log(response);
                        info.reject(response);
                    }
                );
                return info.promise;
            };

            facebookConnectPlugin.getLoginStatus(function(success) {
                if (success.status === 'connected') {
                    console.log('getLoginStatus', success.status);
                        getFacebookProfileInfo(success.authResponse)
                            .then(function(profileInfo) {
                                console.log(profileInfo);
                                def.resolve(profileInfo);
                                // loginService.setParseUserData(profileInfo.id, profileInfo.email, profileInfo.name, "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large");
                                // homeService.set('user_id', profileInfo.id);
                                // homeService.set('user_email', profileInfo.email);
                                // homeService.set('user_name', profileInfo.name);
                                // homeService.set('user_picture', "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large");
                                // $state.go('home.contact');
                            }, function(fail) {
                                console.log('profile info fail', fail);
                            });
                } else {
                    console.log('getLoginStatus', success.status);
                    facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
                }
            });
                return def.promise;
        },




    };
}