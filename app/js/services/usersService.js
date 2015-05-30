'use strict';

app.factory('usersService',
    function ($http, baseServiceUrl) {
        return {
            login: function (userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/login',
                    data: userData
                };
                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            register: function (userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/register',
                    data: userData
                };
                $http(request).success(function (data) {
                    sessionStorage['currentUser'] = JSON.stringify(data);
                    success(data);
                }).error(error);
            },

            logout: function (success, error) {
                delete sessionStorage['currentUser'];
            },

            isLoggedIn: function () {
                return sessionStorage['currentUser'] != undefined;
            },

            getAuthHeaders: function () {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            },

            getCurrentUser: function () {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
            },

            getUserPreviewData: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + user + '/preview',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getUserFullData: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user,
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            searchUserByName: function (searchTerm, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendWallByPages: function (user, success, error) { // TODO: Make pagination work
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user + '/wall?StartPostId=&PageSize=5',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendDetailedFriends: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user + '/friends',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendFriendsPreview: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + user + '/friends/preview',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },
        }
    }
);