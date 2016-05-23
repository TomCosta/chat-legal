(function() {
    'use strict';

    angular.module('starter')

    .run(function($ionicPlatform, timeStorage, $state, Configurations, deviceService) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });


        document.addEventListener("deviceready", function() {
            console.log("device uuid: " + deviceService.getuuid());
            var push = PushNotification.init({
                "android": {
                    "senderID": Configurations.senderID,
                    "icon": Configurations.icon,
                    "iconColor": "grey"
                },
                "ios": {
                    "alert": "true",
                    "badge": "true",
                    "sound": "true"
                },
                "windows": {}
            });
            push.on('registration', function(data) {
                console.log(data);
            });
            push.on('notification', function(data) {
                if (undefined != data.additionalData.callback && 'function' == typeof window[data.additionalData.callback]) {
                    windowdata.additionalData.callback;
                }
                console.log(data);
                if (data.additionalData.foreground) {
                    console.log(data);
                } else {
                    data.message,
                        data.title,
                        data.count,
                        data.sound,
                        data.image,
                        data.additionalData
                }
                window.callbackName = function() {
                    console.log("Notification");
                }
            });
            window.actions_left = function(data) {
                $state.go('app.chatpage');
            };
            push.on('error', function(e) {
                console.log("error");
                console.log(e.message);
            });

        });


    });

})();