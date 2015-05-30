'use strict';

app.factory('authService',
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

            getCurrentUser: function () {
                var userObject = sessionStorage['currentUser'];
                if (userObject) {
                    return JSON.parse(sessionStorage['currentUser']);
                }
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
        }
    }
);