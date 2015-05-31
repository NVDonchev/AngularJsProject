'use strict';

app.controller('HomeController',
    function ($scope, $location, usersService, profileService, postsService, notifyService) {
        $scope.currentUser = usersService.getCurrentUser().userName;

        $scope.getCurrentUserFriendsPreview = function () {
            profileService.getCurrentUserFriendsPreview(
                function success(data) {
                    $scope.friendsCount = data.totalCount;
                    $scope.friendsList = data.friends;
                },
                function error(err) {
                    notifyService.showError("Cannot retrieve friends preview list", err);
                });
        };
        $scope.getCurrentUserFriendsPreview();

        $scope.getNewsFeedPages = function () {
            profileService.getNewsFeedPages(
                function success(data) {
                    $scope.newsList = data;
                },
                function error(err) {
                    notifyService.showError("Cannot retrieve news feed", err);
                });
        };
        $scope.getNewsFeedPages();

        $scope.likePost = function (postId) {
            postsService.likePost(
                postId,
                function success(data) {
                    $scope.getNewsFeedPages();
                }),
                function error(err) {
                    notifyService.showError("Cannot send like post request", err);
                };
        }

        $scope.unlikePost = function (postId) {
            postsService.unlikePost(
                postId,
                function success(data) {
                    $scope.getNewsFeedPages();
                }),
                function error(err) {
                    notifyService.showError("Cannot send unlike post request", err);
                };
        }
    }
);