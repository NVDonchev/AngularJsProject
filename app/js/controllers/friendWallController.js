'use strict';

app.controller('FriendWallController',
    function ($scope, $location, $routeParams, usersService, postsService, profileService, notifyService) {
            $scope.getUserFullData = function () {
                usersService.getUserFullData(
                    $routeParams.username,
                    function success(data) {
                        $scope.friendData = data;
                    },
                    function error(err) {
                        notifyService.showError("Getting full user data failed", err);
                    }
                );
            };
            $scope.getUserFullData();

        $scope.getFriendWallByPages = function () {
            usersService.getFriendWallByPages(
                $routeParams.username,
                function success(data) {
                    $scope.postsList = data;
                },
                function error(err) {
                    notifyService.showError("Getting friend's wall by pages failed", err);
                }
            );
        };
        $scope.getFriendWallByPages();

        $scope.submitMessage = function (postContent, username) {
            var postData = {
                postContent: postContent,
                username: username
            }

            postsService.addNewPost(
                postData,
                function success(data) {
                    notifyService.showInfo("Post successful");
                    $scope.getFriendWallByPages();
                    $scope.postContent = "";
                }),
                function error(err) {
                    notifyService.showError("Adding new post failed", err);
                };
        };

        if ($routeParams.username !== $scope.currentUser.userName) {
            $scope.getFriendFriendsPreview = function () {
                    usersService.getFriendFriendsPreview(
                        $routeParams.username,
                        function success(data) {
                            $scope.friendsCount = data.totalCount;
                            $scope.friendsList = data.friends;
                        },
                        function error(err) {
                        });
            };
            $scope.getFriendFriendsPreview();
        } else {
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
        }
    }
);