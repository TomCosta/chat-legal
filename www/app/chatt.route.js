(function() {
    'use strict';

angular.module('starter', ['ionic', 'ngStorage', 'ngResource', 'GoogleLoginService', 'facebookLoginService'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
    url: '/login',
    cache:false,
    templateUrl: 'app/login/login.html',
    controller: 'loginController'
  })
    .state('register', {
    url: '/register',
    cache:false,
    templateUrl: 'app/register/register.html',
    controller: 'registerController'
  })
    .state('verification', {
    url: '/verification',
    cache:false,
    templateUrl: 'app/verification/verification.html',
    controller: 'verificationController'
  })
    .state('resetPassword', {
    url: '/resetPassword',
    cache:false,
    templateUrl: 'app/resetpassword/resetpassword.html',
    controller: 'resetPasswordController'
  })
    .state('resendVerificationCode', {
    url: '/resendVerificationCode',
    cache:false,
    templateUrl: 'app/resendverificationcode/resendverificationcode.html',
    controller: 'resendVerificationCodeController'
  })
    .state('app', {
    url: '/app',
    cache:false,
    abstract: true,
    templateUrl: 'app/menu/menu.html'
  })

  .state('app.contacts', {
    url: '/contacts',
    cache:false,
    views: {
      'menuContent': {
        templateUrl: 'app/contacts/contacts.html',
        controller: 'contactsController'
      }
    }
  })
  .state('app.chatpage', {
      url: '/chatpage',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/chatpage/chatpage.html',
          controller: 'chatpageController'
        }
      }
    })
  .state('app.setting', {
      url: '/setting',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/setting/setting.html',
          controller: 'settingController'
        }
      }
    })
  .state('app.chats', {
      url: '/chats',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/chats/chats.html',
          controller: 'chatsController'
        }
      }
    })
  .state('app.profile', {
      url: '/profile',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'app/profile/profile.html',
          controller: 'profileController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

})();