(function () {
    'use strict';

    angular
        .module('pgApp.photo')
        .factory('photoService', photoService);

    photoService.$inject = ['$http', '$location'];

    function photoService($http, $location) {
        var service = {
            loadPicture: loadPicture,
            savePicture: savePicture,
            getItems: getItems
        };
        function savePicture(image) {
            if (image.src == null) {
                alert('You Forgot To Choose A Picture');
                return;
            }
            var count = localStorage.getItem('count') | 0;
            try {
                //localStorage.setItem('count', parseInt(count) + 1);
                //localStorage.setItem(count + 1, JSON.stringify(image));
                var currentImages = angular.fromJson(localStorage.getItem("images"));
                var obj = {
                    name: 'image' + (count + 1),
                    src: image.src
                }
                currentImages.push(obj);
                localStorage.setItem("images", angular.toJson(currentImages));
                localStorage.setItem("count", count+1);
                alert('The Picture Had been Saved Successfully');
                $location.path('/photo');
            }
            catch (e) {
                alert('An Error Ocurred While Saving The Picture');
            }
        }
        function loadPicture() {
            var count = localStorage.getItem('count') | 0;
            var firstTime = localStorage.getItem('upLoadPicture', true);
            var images = [];
            if (!firstTime) {
                for (var i = 1; i <= 8; i++) {
                    var image = {
                        name: "image" + i,
                        src: '/app/assets/images/' + i + '.jpg'
                    }
                    images.push(image);
                }
                localStorage.setItem("images", angular.toJson(images));
                localStorage.setItem('count', i - 1);

            }
            localStorage.setItem('upLoadPicture', true);
            
        }
        function getItems() {

            var curen = angular.fromJson(localStorage.getItem("images"));
            return curen;
        }



        return service;
    }
        
})();