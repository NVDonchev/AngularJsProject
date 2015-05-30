'use strict';

app.factory('profileService',
    function ($http, baseServiceUrl) {
        return {
            getCurrentUserData: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            editCurrentUserData: function (userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    headers: authService.getAuthHeaders(),
                    data: userData
                };
                $http(request).success(success).error(error);
            },

            changeProfilePassword: function (passwordData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    headers: authService.getAuthHeaders(),
                    data: passwordData
                };
                $http(request).success(success).error(error);
            },

            getCurrentUserFriendsPreview: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends/preview',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getCurrentUserFriendsList: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getNewsFeedPages: function (success, error) { // TODO: Implement paging
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendRequests: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            approveFriendRequest: function (requestId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=approved',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            rejectFriendRequest: function (requestId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=rejected',
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            sendFriendRequest: function (user, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/me/requests/' + user,
                    headers: authService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },
        }
    }
);