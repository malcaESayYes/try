/// <reference path="../photogalary/index.html" />
(function () {
    'use strict';

    angular.module('pgApp.chooseImage').controller('chooseCtrl', chooseCtrl);
    chooseCtrl.$inject = ['$scope', '$http','$location'];
    function chooseCtrl($scope,$http,$location) {
        $scope.image = [];
        $scope.cancel = function () {
            $location.path('/photogalary');
        }
        $scope.showPicture = function (element) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    $scope.image.src = event.target.result;
                    $scope.$apply();
                }
                reader.readAsDataURL(element.files[0]);
            }
        $scope.save = function () {
         
                if ($scope.image.src == null) {
                    alert('You Forgot To Choose A Picture');
                    return;
                }
                var count = localStorage.getItem('count') | 0;
                try {
                    localStorage.setItem('count', parseInt(count) + 1);
                    localStorage.setItem(count + 1, JSON.stringify($scope.image));
                }
                catch (e) {
                    alert('An Error Ocurred While Saving The Picture');
                }
            }
    }
})();
