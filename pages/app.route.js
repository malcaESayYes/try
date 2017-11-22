/// <reference path="directives/pg-AddPictue/pgAddPicture.tmpl.html" />
(function () {
    'use strict';

    angular.module('pgApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/photogalary', {
                templateUrl: '../load/slider.html',
                controller: 'photoctrl',
                controllerAs:'vm'

            })
            .when('/load', {
                templateUrl: '../load/chooseImage.html',
                controller: 'chooseCtrl'

            })

           .otherwise({ redirectTo: '/photogalary' });
    }]);
})();
