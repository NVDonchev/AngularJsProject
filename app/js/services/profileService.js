'use strict';

app.factory('profileService',
    function ($http, baseServiceUrl, usersService) {
        return {
            getCurrentUserData: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            editCurrentUserData: function (userData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me',
                    headers: usersService.getAuthHeaders(),
                    data: userData
                };
                $http(request).success(success).error(error);
            },

            changeProfilePassword: function (passwordData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/changepassword',
                    headers: usersService.getAuthHeaders(),
                    data: passwordData
                };
                $http(request).success(success).error(error);
            },

            getCurrentUserFriendsPreview: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends/preview',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getCurrentUserFriendsList: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/friends',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getNewsFeedPages: function (success, error) { // TODO: Implement paging
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/feed?StartPostId=&PageSize=5',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getFriendRequests: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/me/requests',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            approveFriendRequest: function (requestId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=approved',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            rejectFriendRequest: function (requestId, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=rejected',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            sendFriendRequest: function (user, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/me/requests/' + user,
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },
        }
    }
);