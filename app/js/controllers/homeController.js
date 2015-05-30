'use strict';

app.controller('HomeController',
    function ($scope, $rootScope, $location, usersService, profileService, postsService, notifyService) {
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
                });
        };
        $scope.getNewsFeedPages();

        $scope.likePost = function () {
            postsService.likePost(
                function success(data) {

                }),
                function error(err) {

                };
        }

        //$scope.toggleLikeUnlike() = function () {

        //}
    }
);