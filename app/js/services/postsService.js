'use strict';

app.factory('postsService',
    function ($http, baseServiceUrl, usersService) {
        return {
            addNewPost: function (postData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/posts',
                    headers: usersService.getAuthHeaders(),
                    data: postData
                };
                $http(request).success(success).error(error);
            },

            getPostById: function (postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            editPostById: function (postId, postData, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    headers: usersService.getAuthHeaders(),
                    data: postData
                };
                $http(request).success(success).error(error);
            },

            deletePostById: function (postId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postId,
                    headers: usersService.getAuthHeaders(),
                    data: postData
                };
                $http(request).success(success).error(error);
            },

            getPostPreviewLikes: function (postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes/preview',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            getPostDetailedLikes: function (postId, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            likePost: function (postId, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },

            unlikePost: function (postId, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/Posts/' + postId + '/likes',
                    headers: usersService.getAuthHeaders(),
                };
                $http(request).success(success).error(error);
            },
        }
    }
);