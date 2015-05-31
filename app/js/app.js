'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
//app.constant('pageSize', 5);

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
});