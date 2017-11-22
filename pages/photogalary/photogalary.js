(function () {
    'use strict';
    angular.module('pgApp.photo').
    controller('photoctrl', photoctrl);
    photoctrl.$inject = ['$scope', '$http', '$location', 'photoService'];
    function photoctrl($scope, $http, $location, photoService)
    {
        var vm = this;
        vm.images = [];        
            photoService.loadPicture();
        activate();                  
        function activate()
        {
        
            vm.images = photoService.getItems();          
        }
        
        

 
        
         vm.current = 0;
        vm.under = [vm.images[vm.images.length - 1], vm.images[0], vm.images[1]];             
   vm.next = function() {
            if (vm.current==vm.images.length-1) {
                vm.current = 0;
                vm.under = [vm.images[vm.images.length-1], vm.images[0], vm.images[1]];
            }
            else {


                if (vm.current == vm.images.length-2) {
                    vm.current++;
                    vm.under = [vm.images[vm.current - 2], vm.images[vm.current - 1], vm.images[0]];
                }

                else {
                    vm.current++;
                    vm.under = [vm.images[vm.current - 1], vm.images[vm.current], vm.images[vm.current + 1]];
                }

            }
     }
  vm.prev=function() {
      if (!vm.current || vm.current == 1) {
             vm.current = vm.images.length - 1;
             vm.under = [vm.images[vm.current - 1], vm.images[vm.current], vm.images[0]];
             if (vm.current == 1) {
                 vm.current--;
                 vm.under = [vm.images[vm.current - 1], vm.images[0], vm.images[1]];
             }
         }
         else {
             //if (vm.current == 1) {
             //    vm.current--;
             //    vm.current = vm.images.length - 1;
             //    vm.under = [vm.images.length-1, vm.images[0], vm.images[1]];
             //}

             //else {
                 vm.current--;
                
                 vm.under = [vm.images[vm.current - 1], vm.images[vm.current], vm.images[vm.current + 1]];
             //}

         }
     }
  vm.addnew = function () {
      $location.path('/load');
  }

    }
  
})();