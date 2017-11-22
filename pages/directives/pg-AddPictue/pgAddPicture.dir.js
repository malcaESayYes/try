/// <reference path="pgAddPicture.tmpl.html" />

(function() {
    'use strict';

    angular
        .module('pgApp')
        .directive('pgAddPicture', pgAddPicture);

    pgAddPicture.$inject = ['$window','photoService'];
    //var path = '/app/assets/images/';

    function pgAddPicture($window, photoService) {
    	var directive = {
    	    templateUrl: "/app/pages/directives/pg-AddPictue/pgAddPicture.tmpl.html",//path+'pgAddPicture.tmpl.html',
    	    link: link,
    	    controllerAs: 'vm',
    	    bindToController: true,
            restrict: 'EA'
    	};
    	function link($scope, element, attrs) {
        	$scope.image = {};
        	angular.element(document.getElementById("file")).on("change", function (event) {
        		var file = event.target.files[0];
        		var reader = new FileReader();
        		reader.onload = function (e) {
        			
        			$scope.$apply(function () { $scope.image.src = e.target.result; });
        		}
        		reader.readAsDataURL(file);
        	});
        	$scope.save = function () {
        		photoService.savePicture($scope.image);
        	}
        	$scope.cancel = function() {
        		location.path('/photo');
        	}

        }
        return directive;

     
    }

})();
// Usage:
//     <pgAddPicture></pgAddPicture>
// Creates:
// 