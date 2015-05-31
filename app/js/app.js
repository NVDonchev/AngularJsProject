'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

app.filter('debug', function () {
    return function (input) {
        if (input === '') return 'empty string';
        return input ? input : ('' + input);
    };
});

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/authentication.html',
        controller: 'AuthenticationController'
    });

    $routeProvider.when('/home/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/users/:username/friends', {
        templateUrl: 'templates/friends.html',
        controller: 'FriendsController'
    });

    $routeProvider.when('/users/:username', {
        templateUrl: 'templates/friend-wall.html',
        controller: 'FriendWallController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/change-password.html',
        controller: 'ChangePasswordController'
    });

    $routeProvider.when('/profile', {
        templateUrl: 'templates/edit-profile.html',
        controller: 'EditProfileController'
    });
});

app.run(function ($rootScope, $location, usersService) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if (!usersService.isLoggedIn()) {
      $location.path("/");
    }
    else if ($location.path() == "/") {
        $location.path("/home/");
    }
  });
});

var fileInput = function ($parse) {
    return {
        restrict: "EA",
        template: "<input type='file' />",
        replace: true,
        link: function (scope, element, attrs) {

            var modelGet = $parse(attrs.fileInput);
            var modelSet = modelGet.assign;
            var onChange = $parse(attrs.onChange);

            var updateModel = function () {
                scope.$apply(function () {
                    modelSet(scope, element[0].files[0]);
                    onChange(scope);
                });
            };

            element.bind('change', updateModel);
        }
    };
};