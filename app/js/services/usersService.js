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
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/users/logout',
                    headers: this.getAuthHeaders()
                };
                $http(request).success(function (data) {
                    delete sessionStorage['currentUser'];
                    success(data);
                }).error(error);
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

            getUserPreviewData: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + user + '/preview',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getUserFullData: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            searchUserByName: function (searchTerm, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendWallByPages: function (user, success, error) { // TODO: Make pagination work
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user + '/wall?StartPostId=&PageSize=5',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendDetailedFriends: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/users/' + user + '/friends',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendFriendsPreview: function (user, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/users/' + user + '/friends/preview',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },
        }
    }
);