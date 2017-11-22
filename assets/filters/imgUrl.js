(function () {
    'use strict';
    
    angular.module('pgApp.filter'
        ).filter('imageUrl', imageUrl)
    function imageUrl() {
        return function (imageName) {
            var folder = "images";
            
            return 'app/assets/' + folder + '/' + imageName;
        }
    }
})();