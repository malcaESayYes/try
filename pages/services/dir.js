(function() {
    'use strict';

    angular
        .module('app')
        .directive('dir', dir);

    dir.$inject = ['$window'];
    
    function dir ($window) {
        // Usage:
        //     <dir></dir>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();